import React from 'react';

const CoverPage = ({ data }) => {
    return (
        <div className="print-page cover-page">
            <div className="cover-logo">
                LOPEZ <span style={{ color: '#D4AF37' }}>BIENES RAICES</span>
            </div>

            <div className="cover-title">REPORTE DE TASACIÓN</div>

            <div className="cover-details">
                <div style={{ marginBottom: '20px' }}>
                    <span style={{ display: 'block', fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>Propiedad</span>
                    <span style={{ fontSize: '24px', color: '#0A192F', fontFamily: 'Playfair Display' }}>{data.propertyAddress || 'Dirección de la Propiedad'}</span>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <span style={{ display: 'block', fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>Preparado para</span>
                    <span style={{ fontSize: '18px', color: '#333' }}>{data.clientName || 'Nombre del Cliente'}</span>
                </div>

                <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                    <span style={{ display: 'block', fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>Fecha</span>
                    <span style={{ fontSize: '16px', color: '#333' }}>{new Date().toLocaleDateString()}</span>
                </div>
            </div>

            <div style={{ position: 'absolute', bottom: '60px', width: '100%', textAlign: 'center' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0A192F' }}>{data.brokerName}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>{data.brokerLicense}</div>
            </div>
        </div>
    );
};

export default CoverPage;
