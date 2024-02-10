import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument"; 

const PdfGenerator = () => {
  return (
    <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Загрузка документа..." : "Скачать документ"
      }
    </PDFDownloadLink>
  );
};

export default PdfGenerator;
