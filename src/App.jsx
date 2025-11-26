import React from 'react';
import Layout from './components/Layout';
import { ReportProvider } from './context/ReportContext';
import InputSection from './components/InputSection';
import ReportView from './components/ReportView';

function App() {
  return (
    <ReportProvider>
      <Layout>
        <div className="container no-print">
          <h2>Carga de Datos</h2>
          <InputSection />
        </div>

        {/* The ReportView is always rendered but hidden on screen via CSS if needed, 
            or we can just let it be part of the DOM and use @media print to show it properly.
            For now, let's render it. The CSS handles hiding the input section during print.
        */}
        <ReportView />
      </Layout>
    </ReportProvider>
  );
}

export default App;
