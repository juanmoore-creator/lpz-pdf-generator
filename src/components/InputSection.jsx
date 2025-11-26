import React, { useState } from 'react';
import { useReport } from '../context/ReportContext';
import PropertyForm from './PropertyForm';

const InputSection = () => {
    const { properties, addProperty, removeProperty, updateProperty, reportData, updateReportData } = useReport();
    const [editingId, setEditingId] = useState(null);

    const handleEdit = (id) => {
        setEditingId(id);
    };

    const handleCloseEdit = () => {
        setEditingId(null);
    };

    return (
        <div>
            <div className="card">
                <h3>Datos del Reporte</h3>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Cliente</label>
                        <input
                            value={reportData.clientName}
                            onChange={(e) => updateReportData('clientName', e.target.value)}
                            placeholder="Nombre del Cliente"
                        />
                    </div>
                    <div className="form-group">
                        <label>Dirección de la Propiedad</label>
                        <input
                            value={reportData.propertyAddress}
                            onChange={(e) => updateReportData('propertyAddress', e.target.value)}
                            placeholder="Dirección"
                        />
                    </div>
                    <div className="form-group">
                        <label>Corredor Inmobiliario</label>
                        <input
                            value={reportData.brokerName}
                            onChange={(e) => updateReportData('brokerName', e.target.value)}
                            placeholder="Nombre del Corredor"
                        />
                    </div>
                    <div className="form-group">
                        <label>Matrícula / Licencia</label>
                        <input
                            value={reportData.brokerLicense}
                            onChange={(e) => updateReportData('brokerLicense', e.target.value)}
                            placeholder="Ej: CMCPDJLP 7463"
                        />
                    </div>
                    <div className="form-group">
                        <label>Precio Sugerido Publicación (U$S)</label>
                        <input
                            type="number"
                            value={reportData.suggestedPublicationPrice}
                            onChange={(e) => updateReportData('suggestedPublicationPrice', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Precio Sugerido Venta (U$S)</label>
                        <input
                            type="number"
                            value={reportData.suggestedSalePrice}
                            onChange={(e) => updateReportData('suggestedSalePrice', e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3>Propiedades Comparables ({properties.length})</h3>
                    <button onClick={addProperty} className="btn-primary">
                        ➕ Añadir Propiedad
                    </button>
                </div>

                {properties.length === 0 ? (
                    <p style={{ color: '#666', fontStyle: 'italic' }}>No hay propiedades comparables añadidas. Haz clic en "Añadir" para comenzar.</p>
                ) : (
                    <div className="property-list">
                        {properties.map((prop, index) => (
                            <div key={prop.id} className="property-card">
                                <div>
                                    <div className="property-card-header">
                                        <h4>#{index + 1}</h4>
                                        <span style={{
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            background: prop.status === 'Activa' ? '#e6f4ea' : '#fce8e6',
                                            color: prop.status === 'Activa' ? '#1e8e3e' : '#c5221f',
                                            fontSize: '0.8rem',
                                            fontWeight: '600'
                                        }}>
                                            {prop.status}
                                        </span>
                                    </div>
                                    <p style={{ margin: '0 0 5px 0', fontSize: '0.95rem' }}>{prop.address || 'Sin dirección'}</p>
                                    <p className="property-price">U$S {Number(prop.price).toLocaleString()}</p>
                                    <p style={{ fontSize: '0.85rem', color: '#666' }}>
                                        {prop.surfaceTotal} m² Total • {prop.environments} Amb.
                                    </p>
                                </div>
                                <div className="property-actions">
                                    <button onClick={() => handleEdit(prop.id)} className="btn-secondary" style={{ color: '#333', borderColor: '#ddd' }}>
                                        ✏️ Editar
                                    </button>
                                    <button onClick={() => removeProperty(prop.id)} className="btn-danger btn-icon" title="Eliminar">
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Edit Modal / Overlay */}
            {editingId && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: 'white', padding: '2rem', borderRadius: '12px',
                        width: '90%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0 }}>Editar Propiedad</h3>
                            <button onClick={handleCloseEdit} style={{ background: 'none', border: 'none', fontSize: '1.5rem' }}>✕</button>
                        </div>

                        <PropertyForm
                            property={properties.find(p => p.id === editingId)}
                            onChange={(id, field, val) => updateProperty(id, field, val)}
                            index={properties.findIndex(p => p.id === editingId)}
                            isModal={true}
                        />

                        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                            <button onClick={handleCloseEdit} className="btn-primary">Guardar y Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InputSection;
