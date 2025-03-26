import { useContext, useState, useRef, useEffect } from "react";
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
  const [containerWidth, setContainerWidth] = useState(600); // Fixed width

  useEffect(() => {
    if (pdfContainerRef.current) {
      setContainerWidth(pdfContainerRef.current.clientWidth);
    }
  }, [isPdfOpen]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  console.log(pdfLink);

  return (
    <div>
      {isPdfOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.8)] bg-opacity-50 z-[150]">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[80%] max-w-2xl flex flex-col items-center">
            <button
              onClick={() => setIsPdfOpen(false)}
              className="mb-4 px-3 py-1 bg-red-500 text-white rounded"
            >
              Close
            </button>

            {/* Fixed Size PDF Viewer */}
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
            <div className="mt-2 flex gap-4 justify-center">
              <button
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(pageNumber - 1)}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span>
                Page {pageNumber} of {numPages}
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
