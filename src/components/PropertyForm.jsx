import React from 'react';

const PropertyForm = ({ property, onChange, index, isModal }) => {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        onChange(property.id, name, val);
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);

        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Append new image to existing images
                const currentImages = property.images || [];
                if (currentImages.length < 4) {
                    onChange(property.id, 'images', [...currentImages, reader.result]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const removeImage = (imgIndex) => {
        const currentImages = property.images || [];
        const newImages = currentImages.filter((_, i) => i !== imgIndex);
        onChange(property.id, 'images', newImages);
    };

    return (
        <div className={isModal ? "" : "card"}>
            {!isModal && <h3>Propiedad Comparable #{index + 1}</h3>}
            <div className="form-grid">
                <div className="form-group">
                    <label>Dirección</label>
                    <input name="address" value={property.address} onChange={handleChange} placeholder="Ej: Av. Libertador 1234" />
                </div>
                <div className="form-group">
                    <label>Precio Venta (U$S)</label>
                    <input type="number" name="price" value={property.price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Sup. Total (m²)</label>
                    <input type="number" name="surfaceTotal" value={property.surfaceTotal} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Sup. Cubierta (m²)</label>
                    <input type="number" name="surfaceCovered" value={property.surfaceCovered} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Sup. Semi (m²)</label>
                    <input type="number" name="surfaceSemiCovered" value={property.surfaceSemiCovered} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Ambientes</label>
                    <input type="number" name="environments" value={property.environments} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Dormitorios</label>
                    <input type="number" name="bedrooms" value={property.bedrooms} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Baños</label>
                    <input type="number" name="bathrooms" value={property.bathrooms} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Cochera</label>
                    <select name="garage" value={property.garage} onChange={handleChange}>
                        <option value={false}>No</option>
                        <option value={true}>Sí</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Antigüedad (años)</label>
                    <input type="number" name="antiquity" value={property.antiquity} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Expensas ($)</label>
                    <input type="number" name="expenses" value={property.expenses} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Estado</label>
                    <select name="status" value={property.status} onChange={handleChange}>
                        <option value="Activa">Activa</option>
                        <option value="Reservada">Reservada</option>
                        <option value="Vendida">Vendida</option>
                        <option value="Suspendida">Suspendida</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Tipo Propiedad</label>
                    <select name="propertyType" value={property.propertyType} onChange={handleChange}>
                        <option value="Departamento">Departamento</option>
                        <option value="Casa">Casa</option>
                        <option value="PH">PH</option>
                        <option value="Terreno">Terreno</option>
                        <option value="Local">Local</option>
                        <option value="Oficina">Oficina</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Operación</label>
                    <select name="operationType" value={property.operationType} onChange={handleChange}>
                        <option value="Venta">Venta</option>
                        <option value="Alquiler">Alquiler</option>
                    </select>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Descripción / Observaciones</label>
                    <textarea name="description" value={property.description} onChange={handleChange} rows="3" />
                </div>

                {/* Image Upload Section */}
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Imágenes (Máx 4)</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        disabled={property.images && property.images.length >= 4}
                    />
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                        {property.images && property.images.map((img, i) => (
                            <div key={i} style={{ position: 'relative', width: '80px', height: '80px' }}>
                                <img src={img} alt={`Preview ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                                <button
                                    type="button"
                                    onClick={() => removeImage(i)}
                                    style={{
                                        position: 'absolute', top: '-5px', right: '-5px',
                                        background: 'red', color: 'white', borderRadius: '50%',
                                        width: '20px', height: '20px', border: 'none',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        cursor: 'pointer', fontSize: '12px'
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyForm;
