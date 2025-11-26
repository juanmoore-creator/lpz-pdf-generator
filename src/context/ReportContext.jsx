import React, { createContext, useState, useContext } from 'react';
import { createNewProperty, initialReportData } from '../initialState';

const ReportContext = createContext();

export const useReport = () => useContext(ReportContext);

export const ReportProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [reportData, setReportData] = useState(initialReportData);

    const addProperty = () => {
        setProperties([...properties, createNewProperty()]);
    };

    const removeProperty = (id) => {
        setProperties(properties.filter(p => p.id !== id));
    };

    const updateProperty = (id, field, value) => {
        setProperties(properties.map(p =>
            p.id === id ? { ...p, [field]: value } : p
        ));
    };

    const updateReportData = (field, value) => {
        setReportData(prev => ({ ...prev, [field]: value }));
    };

    const resetReport = () => {
        if (window.confirm('¿Estás seguro de que deseas restablecer todo el reporte?')) {
            setProperties([]);
            setReportData(initialReportData);
        }
    };

    return (
        <ReportContext.Provider value={{
            properties,
            reportData,
            addProperty,
            removeProperty,
            updateProperty,
            updateReportData,
            resetReport
        }}>
            {children}
        </ReportContext.Provider>
    );
};
