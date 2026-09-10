import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // 가로 가운데 정렬
      }}
    >
      <Document file={file}>
        <Page
          pageNumber={pageNumber}
          width={1000}
          canvasBackground="transparent"
        />
      </Document>

      {numPages && (
        <div>
          <button onClick={() => setPageNumber((p) => Math.max(1, p - 1))}>
            이전
          </button>
          <span>
            {" "}
            {pageNumber} / {numPages}{" "}
          </span>
          <button
            onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
}

export default PdfViewer;
