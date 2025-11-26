import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReportView from './ReportView';

const PDFGenerator = () => {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGeneratePDF = async () => {
        setIsGenerating(true);

        try {
            // Scope to the specific render target to avoid duplicates
            const container = document.getElementById('pdf-render-target');
            const pages = container.querySelectorAll('.print-page');
            const pdf = new jsPDF('p', 'mm', 'a4');

            for (let i = 0; i < pages.length; i++) {
                const page = pages[i];
                const canvas = await html2canvas(page, {
                    scale: 2, // Keep scale 2 for decent quality, but compress image
                    useCORS: true,
                    logging: false,
                    width: 794, // Force A4 width in px
                    windowWidth: 794
                });

                // Use JPEG with 0.75 quality to drastically reduce size
                const imgData = canvas.toDataURL('image/jpeg', 0.75);
                const imgWidth = 210; // A4 width in mm
                const pageHeight = 297; // A4 height in mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                if (i > 0) pdf.addPage();
                pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
            }

            pdf.save('tasacion-lopez-bienes-raices.pdf');
        } catch (err) {
            console.error("Error generating PDF", err);
            alert("Hubo un error al generar el PDF.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <>
            <button onClick={handleGeneratePDF} className="btn-primary" disabled={isGenerating}>
                {isGenerating ? 'Generando...' : 'Generar PDF'}
            </button>

            {/* Hidden Render Container 
          Fixed width 794px (A4) to ensure layout matches capture.
          z-index -1 to hide behind everything but keep in DOM.
      */}
            <div id="pdf-render-target" style={{
                position: 'fixed',
                left: '-10000px',
                top: 0,
                width: '794px',
                zIndex: -1000
            }}>
                <ReportView />
            </div>
        </>
    );
};

export default PDFGenerator;
