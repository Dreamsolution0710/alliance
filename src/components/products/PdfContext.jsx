// VideoContext.js
import { createContext, useState } from "react";

const PdfContext = createContext();

export const PdfProvider = ({ children }) => {
  const [pdfLink, setPdfLink] = useState("");
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <PdfContext.Provider
      value={{ pdfLink, setPdfLink, isPdfOpen, setIsPdfOpen }}
    >
      {children}
    </PdfContext.Provider>
  );
};

export default PdfContext;
