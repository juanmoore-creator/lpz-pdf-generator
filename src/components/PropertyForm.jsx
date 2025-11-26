import React from 'react';

const PropertyForm = ({ property, onChange, index, isModal }) => {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        onChange(property.id, name, val);
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
                    <label>Superficie Total (m²)</label>
                    <input type="number" name="surfaceTotal" value={property.surfaceTotal} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Superficie Cubierta (m²)</label>
                    <input type="number" name="surfaceCovered" value={property.surfaceCovered} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Superficie Semicubierta (m²)</label>
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
                    <label>Toilettes</label>
                    <input type="number" name="toilettes" value={property.toilettes} onChange={handleChange} />
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
                    <label>Estado</label>
                    <select name="status" value={property.status} onChange={handleChange}>
                        <option value="Activa">Activa</option>
                        <option value="Reservada">Reservada</option>
                        <option value="Cerrada">Cerrada</option>
                        <option value="Cancelada">Cancelada</option>
                    </select>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Descripción</label>
                    <textarea name="description" value={property.description} onChange={handleChange} rows="3"></textarea>
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Fotos de la Propiedad (Máx 4)</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => {
                            const files = Array.from(e.target.files);
                            if (files.length > 4) {
                                alert("Máximo 4 fotos permitidas");
                                return;
                            }

                            Promise.all(files.map(file => {
                                return new Promise((resolve, reject) => {
                                    const reader = new FileReader();
                                    reader.onload = (event) => resolve(event.target.result);
                                    reader.onerror = (error) => reject(error);
                                    reader.readAsDataURL(file);
                                });
                            })).then(images => {
                                onChange(property.id, 'images', images);
                            });
                        }}
                    />
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        {property.images && property.images.map((img, i) => (
                            <img key={i} src={img} alt={`Preview ${i}`} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyForm;
