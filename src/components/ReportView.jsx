import React from 'react';
import { useReport } from '../context/ReportContext';
import CoverPage from './report/CoverPage';
import SummaryPage from './report/SummaryPage';
import PropertyDetailPage from './report/PropertyDetailPage';
import AveragesPage from './report/AveragesPage';
import MapPage from './report/MapPage';
import PriceSuggestionPage from './report/PriceSuggestionPage';
import ContactPage from './report/ContactPage';

const ReportView = () => {
    const { properties, reportData } = useReport();

    // Filter out empty properties if needed, or just show all 9 slots?
    // Usually we only show filled ones.
    const filledProperties = properties.filter(p => p.address !== '');

    return (
        <div id="report-view">
            <CoverPage data={reportData} />
            <MapPage properties={filledProperties} />
            <SummaryPage properties={filledProperties} />

            {filledProperties.map((prop, index) => (
                <PropertyDetailPage key={prop.id} property={prop} index={index} />
            ))}

            <PriceSuggestionPage data={reportData} />
            <AveragesPage properties={filledProperties} reportData={reportData} />
            <ContactPage data={reportData} />
        </div>
    );
};

export default ReportView;
