import { useContext, useState, useRef, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import PdfContext from "../products/PdfContext";
import { pdfjs } from "react-pdf";

const publicPdfLink = "/assets/pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/assets/pdfjs/pdf.worker.mjs";

const PdfViewButton = () => {
  const { pdfLink, isPdfOpen, setIsPdfOpen } = useContext(PdfContext);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(600);

  useEffect(() => {
    if (pdfContainerRef.current) {
      setContainerWidth(pdfContainerRef.current.clientWidth);
    }
  }, [isPdfOpen]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleScroll = useCallback(
    (event) => {
      event.preventDefault(); // Prevent scrolling beyond layout

      if (event.deltaY > 0 && pageNumber < numPages) {
        setPageNumber((prev) => prev + 1);
      } else if (event.deltaY < 0 && pageNumber > 1) {
        setPageNumber((prev) => prev - 1);
      }
    },
    [pageNumber, numPages]
  );

  useEffect(() => {
    const container = pdfContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false }); // Prevents page scrolling
      return () => container.removeEventListener("wheel", handleScroll);
    }
  }, [handleScroll]);

  return (
    <div>
      {isPdfOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.8)] bg-opacity-50 z-[150]">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[80%] max-w-2xl flex flex-col items-center relative">
            <button
              onClick={() => setIsPdfOpen(false)}
              className="absolute top-2 right-2 text-white z-10 bg-black/50 p-2 rounded-full hover:cursor-pointer"
            >
              <X size={30} />
            </button>

            {/* PDF Container */}
            <div
              ref={pdfContainerRef}
              className="w-[600px] h-[800px] overflow-hidden flex justify-center items-center border border-gray-300"
            >
              <Document
                file={`${publicPdfLink}/${pdfLink}`}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} width={containerWidth} />
              </Document>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-2 flex gap-4 justify-center items-center">
              <button
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(pageNumber - 1)}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-[#151515]">
                {String(pageNumber).padStart(2, "0")} of {numPages}
              </span>
              <button
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber(pageNumber + 1)}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfViewButton;
