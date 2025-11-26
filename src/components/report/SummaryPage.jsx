import React from 'react';

const SummaryPage = ({ properties }) => {
    return (
        <div className="print-page">
            <div className="report-header">
                <h2>Resumen de Comparables</h2>
                <div className="brand">LOPEZ BIENES RAICES</div>
            </div>

            <p style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
                A continuación se presenta un resumen de las propiedades seleccionadas para el análisis comparativo de mercado.
            </p>

            <table className="report-table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Dirección</th>
                        <th className="text-right">Precio (U$S)</th>
                        <th className="text-right">Sup. Total</th>
                        <th className="text-right">U$S/m²</th>
                        <th className="text-center">Amb.</th>
                        <th className="text-center">Dorm.</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((p, i) => (
                        <tr key={p.id}>
                            <td>{i + 1}</td>
                            <td style={{ fontWeight: '500' }}>{p.address}</td>
                            <td className="text-right">{Number(p.price).toLocaleString()}</td>
                            <td className="text-right">{p.surfaceTotal}</td>
                            <td className="text-right">{p.surfaceTotal > 0 ? Math.round(p.price / p.surfaceTotal).toLocaleString() : 0}</td>
                            <td className="text-center">{p.environments}</td>
                            <td className="text-center">{p.bedrooms}</td>
                            <td>
                                <span style={{
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    fontSize: '10px',
                                    fontWeight: '600',
                                    background: p.status === 'Activa' ? '#e6f4ea' : '#fce8e6',
                                    color: p.status === 'Activa' ? '#1e8e3e' : '#c5221f'
                                }}>
                                    {p.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="report-footer">
                <span>Reporte generado el {new Date().toLocaleDateString()}</span>
                <span>Página 3</span>
            </div>
        </div>
    );
};

export default SummaryPage;
