import React from 'react';

const AveragesPage = ({ properties }) => {
    // Calculate averages
    const count = properties.length;
    // if (count === 0) return null; // Render even if empty for verification

    const total = properties.reduce((acc, p) => {
        acc.price += Number(p.price) || 0;
        acc.surfaceTotal += Number(p.surfaceTotal) || 0;
        acc.surfaceCovered += Number(p.surfaceCovered) || 0;
        acc.surfaceSemiCovered += Number(p.surfaceSemiCovered) || 0;
        acc.daysOnMarket += Number(p.daysOnMarket) || 0;
        return acc;
    }, { price: 0, surfaceTotal: 0, surfaceCovered: 0, surfaceSemiCovered: 0, daysOnMarket: 0 });

    const avgPrice = count > 0 ? total.price / count : 0;
    const avgSurfaceTotal = count > 0 ? total.surfaceTotal / count : 0;
    const avgSurfaceCovered = count > 0 ? total.surfaceCovered / count : 0;
    const avgHomogenized = count > 0 ? (total.surfaceCovered + (total.surfaceSemiCovered * 0.5)) / count : 0;
    const avgDays = count > 0 ? total.daysOnMarket / count : 0;
    const avgPricePerM2 = avgSurfaceTotal > 0 ? avgPrice / avgSurfaceTotal : 0;

    return (
        <div className="print-page">
            <div className="report-header">
                <h2>Análisis de Mercado</h2>
                <div className="brand">LOPEZ BIENES RAICES</div>
            </div>

            <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
                <div style={{ flex: 1, background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #eee', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h3 style={{ border: 'none', color: '#003057', fontSize: '14px', marginBottom: '5px', display: 'block', width: '100%', textAlign: 'center' }}>Propiedades Analizadas</h3>
                    <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#666' }}>{count}</span>
                </div>
                <div style={{ flex: 1, background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #00A8E8', boxShadow: '0 4px 10px rgba(0, 168, 232, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h3 style={{ border: 'none', color: '#003057', fontSize: '14px', marginBottom: '5px', display: 'block', width: '100%', textAlign: 'center' }}>Precio Promedio</h3>
                    <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#00A8E8' }}>U$S {Math.round(avgPrice).toLocaleString()}</span>
                </div>
            </div>

            <table className="report-table table-minimal">
                <thead>
                    <tr>
                        <th>Concepto</th>
                        <th className="text-right">Valor Promedio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Precio de Venta</td>
                        <td className="text-right" style={{ fontWeight: 'bold', color: '#003057' }}>U$S {Math.round(avgPrice).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Precio por m² (Total)</td>
                        <td className="text-right">U$S {Math.round(avgPricePerM2).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Superficie Total</td>
                        <td className="text-right">{Math.round(avgSurfaceTotal)} m²</td>
                    </tr>
                    <tr>
                        <td>Superficie Cubierta</td>
                        <td className="text-right">{Math.round(avgSurfaceCovered)} m²</td>
                    </tr>
                    <tr>
                        <td>Superficie Homogenizada</td>
                        <td className="text-right">{Math.round(avgHomogenized)} m²</td>
                    </tr>
                    <tr>
                        <td>Días en el Mercado</td>
                        <td className="text-right">{Math.round(avgDays)} días</td>
                    </tr>
                </tbody>
            </table>

            <div style={{ marginTop: '40px', padding: '20px', background: '#f0f4f8', borderLeft: '4px solid #003057' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#003057' }}>Conclusión del Análisis</h4>
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
