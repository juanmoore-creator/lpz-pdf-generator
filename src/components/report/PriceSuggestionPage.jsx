import React from 'react';

const PriceSuggestionPage = ({ data }) => {
    return (
        <div className="print-page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="report-header" style={{ width: '100%' }}>
                <h2>Valores Sugeridos</h2>
                <div className="brand">LOPEZ BIENES RAICES</div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80%' }}>
                <div style={{
                    border: '2px solid #0A192F',
                    padding: '40px',
                    borderRadius: '0',
                    textAlign: 'center',
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                        background: 'white', padding: '0 20px', color: '#0A192F', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px'
                    }}>
                        Recomendación
                    </div>

                    <h3 style={{ color: '#666', border: 'none', fontSize: '16px', marginBottom: '10px' }}>Precio de Publicación Sugerido</h3>
                    <p style={{ fontSize: '48px', fontWeight: 'bold', margin: '0', color: '#0A192F', fontFamily: 'Playfair Display' }}>
                        U$S {Number(data.suggestedPublicationPrice).toLocaleString()}
                    </p>
                </div>

                <div style={{
                    border: '2px solid #D4AF37',
                    padding: '40px',
                    borderRadius: '0',
                    textAlign: 'center',
                    marginTop: '60px',
                    background: '#fffdf5',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                        background: '#fffdf5', padding: '0 20px', color: '#D4AF37', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px'
                    }}>
                        Estimación de Cierre
                    </div>
                    <h3 style={{ color: '#666', border: 'none', fontSize: '16px', marginBottom: '10px' }}>Precio de Venta Estimado</h3>
                    <p style={{ fontSize: '48px', fontWeight: 'bold', margin: '0', color: '#D4AF37', fontFamily: 'Playfair Display' }}>
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
