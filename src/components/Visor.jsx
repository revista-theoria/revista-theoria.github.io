/*
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useParams } from 'react-router-dom';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Visor() {
    const { numeroEdicion } = useParams();
    const pdf = `/Números/${encodeURIComponent(numeroEdicion)}.pdf`;

    return (
        <div className="pdf-container">
            <Document file={pdf}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}

export default Visor;
*/

// Visor.jsx
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Visor() {
    const { numero } = useParams();
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            <Document
                file={`https://revista-theoria.github.io/Números/${encodeURIComponent(numero)}.pdf`}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
    );
}

export default Visor;
