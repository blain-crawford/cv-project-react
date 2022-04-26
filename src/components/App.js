import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './pdf_rendering/renderPDF';

const App = () => {
  return (
    <div className='App'>
      <PDFDownloadLink document={<MyDocument />} fileName='Test_Document'>
        {({ loading }) =>
          loading ? (
            <button>Loading Document. . .</button>
          ) : (
            <button>'Download'</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default App;
