import React from 'react';
import { useReport } from '../context/ReportContext';
import PDFGenerator from './PDFGenerator';

const Layout = ({ children }) => {
    const { resetReport } = useReport();

    return (
        <div className="app-container">
            <header className="no-print">
                <h1>LOPEZ BIENES RAICES</h1>
                <div className="header-actions">
                    <button onClick={resetReport} className="btn-secondary">
                        Restablecer
                    </button>
                    <PDFGenerator />
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
