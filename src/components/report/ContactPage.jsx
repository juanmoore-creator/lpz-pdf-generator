import React from 'react';

const ContactPage = ({ data }) => {
    return (
        <div className="print-page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ border: 'none', fontSize: '28pt', color: '#003366' }}>LOPEZ BIENES RAICES</h2>

            <div style={{ marginTop: '40px', fontSize: '14pt' }}>
                <p><strong>Corredor Responsable:</strong> {data.brokerName}</p>
                <p><strong>Matrícula:</strong> {data.brokerLicense}</p>
                <p><strong>Dirección:</strong> Calle 48 N°928/930 e 13 y 14, La Plata, Buenos Aires</p>
                <p><strong>Teléfono:</strong> 1234-5678</p>
                <p><strong>Email:</strong> contacto@lopezbienesraices.com</p>
                <p><strong>Web:</strong> www.lopezbienesraices.com</p>
            </div>

            <div style={{ marginTop: 'auto', fontSize: '10pt', color: '#666', textAlign: 'justify' }}>
                <p>
                    <strong>Aviso Legal:</strong> La presente tasación es una estimación de valor de mercado basada en comparables
                    y análisis profesional. No constituye una tasación bancaria oficial ni garantiza el precio final de venta.
                    Los valores pueden variar según las condiciones del mercado. Lopez Bienes Raices no se responsabiliza por
                    decisiones tomadas basadas únicamente en este reporte sin asesoramiento adicional.
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
