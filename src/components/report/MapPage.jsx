import React from 'react';

const MapPage = ({ properties }) => {
    return (
        <div className="print-page">
            <h2>Ubicación de Comparables</h2>
            <div style={{ width: '100%', height: '80%', border: '2px dashed #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <p style={{ color: '#999' }}>Mapa de Ubicación (Placeholder)</p>
                {/* In a real app, we would render a Google Map or Leaflet map here */}
            </div>
            <div style={{ marginTop: '20px' }}>
                <ul>
                    {properties.map((p, i) => (
                        <li key={p.id}><strong>{i + 1}.</strong> {p.address}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MapPage;
