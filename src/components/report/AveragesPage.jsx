import React from 'react';

const AveragesPage = ({ properties }) => {
    // Calculate averages
    const count = properties.length;
    if (count === 0) return null;

    const total = properties.reduce((acc, p) => {
        acc.price += Number(p.price) || 0;
        acc.surfaceTotal += Number(p.surfaceTotal) || 0;
        acc.surfaceCovered += Number(p.surfaceCovered) || 0;
        acc.surfaceSemiCovered += Number(p.surfaceSemiCovered) || 0;
        acc.daysOnMarket += Number(p.daysOnMarket) || 0;
        return acc;
    }, { price: 0, surfaceTotal: 0, surfaceCovered: 0, surfaceSemiCovered: 0, daysOnMarket: 0 });

    const avgPrice = total.price / count;
    const avgSurfaceTotal = total.surfaceTotal / count;
    const avgSurfaceCovered = total.surfaceCovered / count;
    const avgHomogenized = (total.surfaceCovered + (total.surfaceSemiCovered * 0.5)) / count;
    const avgDays = total.daysOnMarket / count;
    const avgPricePerM2 = avgSurfaceTotal > 0 ? avgPrice / avgSurfaceTotal : 0;

    return (
        <div className="print-page">
            <div className="report-header">
                <h2>Análisis de Mercado</h2>
                <div className="brand">LOPEZ BIENES RAICES</div>
            </div>

            <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
                <div style={{ flex: 1, background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                    <h3 style={{ border: 'none', color: '#0A192F', fontSize: '14px', marginBottom: '5px' }}>Propiedades Analizadas</h3>
                    <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#D4AF37' }}>{count}</span>
                </div>
                <div style={{ flex: 1, background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                    <h3 style={{ border: 'none', color: '#0A192F', fontSize: '14px', marginBottom: '5px' }}>Precio Promedio</h3>
                    <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#0A192F' }}>U$S {Math.round(avgPrice).toLocaleString()}</span>
                </div>
            </div>

            <h3 style={{ marginBottom: '20px' }}>Detalle de Promedios</h3>
            <table className="report-table">
                <thead>
                    <tr>
                        <th>Concepto</th>
                        <th>Valor Promedio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Precio de Venta</td>
                        <td style={{ fontWeight: 'bold' }}>U$S {Math.round(avgPrice).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Precio por m² (Total)</td>
                        <td>U$S {Math.round(avgPricePerM2).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Superficie Total</td>
                        <td>{Math.round(avgSurfaceTotal)} m²</td>
                    </tr>
                    <tr>
                        <td>Superficie Cubierta</td>
                        <td>{Math.round(avgSurfaceCovered)} m²</td>
                    </tr>
                    <tr>
                        <td>Superficie Homogenizada</td>
                        <td>{Math.round(avgHomogenized)} m²</td>
                    </tr>
                    <tr>
                        <td>Días en el Mercado</td>
                        <td>{Math.round(avgDays)} días</td>
                    </tr>
                </tbody>
            </table>

            <div style={{ marginTop: '40px', padding: '20px', background: '#f0f4f8', borderLeft: '4px solid #0A192F' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#0A192F' }}>Conclusión del Análisis</h4>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#444' }}>
                    El análisis de mercado basado en las {count} propiedades seleccionadas indica una tendencia clara.
                    Los valores obtenidos reflejan el estado actual de la oferta en la zona y sirven como base sólida
                    para determinar el valor de mercado de la propiedad tasada.
                </p>
            </div>

            <div className="report-footer">
                <span>Reporte generado el {new Date().toLocaleDateString()}</span>
                <span>Página {count + 5}</span>
            </div>
        </div>
    );
};

export default AveragesPage;
