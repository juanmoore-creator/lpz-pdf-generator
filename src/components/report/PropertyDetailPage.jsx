import React from 'react';

const PropertyDetailPage = ({ property, index }) => {
    const pricePerM2 = property.surfaceTotal > 0 ? Math.round(property.price / property.surfaceTotal) : 0;
    const homogenizedSurface = Math.round(Number(property.surfaceCovered) + (Number(property.surfaceSemiCovered || 0) * 0.5));

    return (
        <div className="print-page">
            <div className="report-header">
                <h2>Comparable #{index + 1}</h2>
                <div className="brand">LOPEZ BIENES RAICES</div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>{property.address}</h1>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <span style={{ background: '#0A192F', color: 'white', padding: '5px 10px', fontSize: '14px', borderRadius: '4px' }}>
                        U$S {Number(property.price).toLocaleString()}
                    </span>
                    <span style={{ color: '#666', fontSize: '14px' }}>
                        {property.propertyType} en {property.operationType}
                    </span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '30px' }}>
                <div>
                    <h3>Características Principales</h3>
                    <div className="kv-grid">
                        <div className="kv-item"><span className="kv-label">Sup. Total</span><span className="kv-value">{property.surfaceTotal} m²</span></div>
                        <div className="kv-item"><span className="kv-label">Sup. Cubierta</span><span className="kv-value">{property.surfaceCovered} m²</span></div>
                        <div className="kv-item"><span className="kv-label">Sup. Homogen.</span><span className="kv-value">{homogenizedSurface} m²</span></div>
                        <div className="kv-item"><span className="kv-label">Ambientes</span><span className="kv-value">{property.environments}</span></div>
                        <div className="kv-item"><span className="kv-label">Dormitorios</span><span className="kv-value">{property.bedrooms}</span></div>
                        <div className="kv-item"><span className="kv-label">Baños</span><span className="kv-value">{property.bathrooms}</span></div>
                    </div>
                </div>
                <div>
                    <h3>Detalles Adicionales</h3>
                    <div className="kv-grid">
                        <div className="kv-item"><span className="kv-label">Cochera</span><span className="kv-value">{property.garage ? 'Sí' : 'No'}</span></div>
                        <div className="kv-item"><span className="kv-label">Antigüedad</span><span className="kv-value">{property.antiquity} años</span></div>
                        <div className="kv-item"><span className="kv-label">Expensas</span><span className="kv-value">$ {property.expenses}</span></div>
                        <div className="kv-item"><span className="kv-label">Estado</span><span className="kv-value">{property.status}</span></div>
                        <div className="kv-item"><span className="kv-label">Precio / m²</span><span className="kv-value">U$S {pricePerM2.toLocaleString()}</span></div>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3>Descripción</h3>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#555' }}>
                    {property.description || 'Sin descripción disponible.'}
                </p>
            </div>

            {/* Property Images Gallery */}
            <div style={{
                height: '350px',
                background: '#f5f5f5',
                border: '1px solid #e0e0e0',
                display: 'grid',
                gridTemplateColumns: property.images && property.images.length > 0 ? (property.images.length === 1 ? '1fr' : '2fr 1fr') : '1fr',
                gridTemplateRows: property.images && property.images.length > 2 ? '1fr 1fr' : '1fr',
                gap: '5px',
                overflow: 'hidden'
            }}>
                {property.images && property.images.length > 0 ? (
                    <>
                        <div style={{
                            gridRow: property.images.length > 2 ? '1 / -1' : '1',
                            backgroundImage: `url(${property.images[0]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}></div>
                        {property.images.slice(1, 3).map((img, i) => (
                            <div key={i} style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                        ))}
                    </>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#999', fontSize: '14px', height: '100%' }}>
                        [ Sin Fotos Disponibles ]
                    </div>
                )}
            </div>

            <div className="report-footer">
                <span>Reporte generado el {new Date().toLocaleDateString()}</span>
                <span>Página {index + 4}</span>
            </div>
        </div>
    );
};

export default PropertyDetailPage;
