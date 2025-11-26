import React from 'react';

const PriceSuggestionPage = ({ data }) => {
    return (
        <div className="print-page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="report-header" style={{ width: '100%' }}>
                <h2>Valores Sugeridos</h2>
                <div className="brand">LOPEZ BIENES RAICES</div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80%', gap: '40px' }}>

                <div style={{
                    border: '1px solid #eee',
                    padding: '40px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    background: 'white',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                        background: '#003057', padding: '5px 20px', color: 'white', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '20px', fontSize: '12px'
                    }}>
                        Recomendación
                    </div>

                    <h3 style={{ color: '#666', border: 'none', fontSize: '16px', marginBottom: '10px' }}>Precio de Publicación Sugerido</h3>
                    <p style={{ fontSize: '48px', fontWeight: 'bold', margin: '0', color: '#003057', fontFamily: 'Inter' }}>
                        U$S {Number(data.suggestedPublicationPrice).toLocaleString()}
                    </p>
                </div>

                <div style={{
                    border: '2px solid #00A8E8',
                    padding: '40px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    background: '#f0f9ff',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                        background: '#00A8E8', padding: '5px 20px', color: 'white', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '20px', fontSize: '12px'
                    }}>
                        Estimación de Cierre
                    </div>
                    <h3 style={{ color: '#003057', border: 'none', fontSize: '16px', marginBottom: '10px' }}>Precio de Venta Estimado</h3>
                    <p style={{ fontSize: '48px', fontWeight: 'bold', margin: '0', color: '#003057', fontFamily: 'Inter' }}>
                        U$S {Number(data.suggestedSalePrice).toLocaleString()}
                    </p>
                </div>
            </div>

            <div className="report-footer" style={{ width: '100%' }}>
                <span>Reporte generado el {new Date().toLocaleDateString()}</span>
                <span>Página Final</span>
            </div>
        </div>
    );
};

export default PriceSuggestionPage;
