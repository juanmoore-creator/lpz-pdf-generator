import React from 'react';

const CoverPage = ({ data }) => {
    return (
        <div className="print-page cover-page">
            <div className="cover-sidebar"></div>
            <div className="cover-content">
                <div className="cover-logo">
                    LOPEZ <span style={{ color: '#00A8E8' }}>BIENES RAICES</span>
                </div>

                <div className="cover-title">REPORTE DE<br />TASACIÓN</div>

                <div className="cover-details">
                    <div style={{ marginBottom: '30px' }}>
                        <span style={{ display: 'block', fontSize: '12px', color: '#999', textTransform: 'uppercase', marginBottom: '5px' }}>Propiedad</span>
                        <span style={{ fontSize: '24px', color: '#003057', fontWeight: '600' }}>{data.propertyAddress || 'Dirección de la Propiedad'}</span>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <span style={{ display: 'block', fontSize: '12px', color: '#999', textTransform: 'uppercase', marginBottom: '5px' }}>Preparado para</span>
                        <span style={{ fontSize: '18px', color: '#333' }}>{data.clientName || 'Nombre del Cliente'}</span>
                    </div>

                    <div style={{ marginTop: '60px', borderTop: '1px solid #eee', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <div>
                            <span style={{ display: 'block', fontSize: '12px', color: '#999', textTransform: 'uppercase', marginBottom: '5px' }}>Corredor Inmobiliario</span>
                            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#003057' }}>{data.brokerName}</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>{data.brokerLicense}</div>
                        </div>
                        <div style={{ fontSize: '14px', color: '#999' }}>
                            {new Date().toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverPage;
