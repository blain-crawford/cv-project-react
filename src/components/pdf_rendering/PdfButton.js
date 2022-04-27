import React, { Component } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import RenderedPdf from './RenderPDF';
import '../../styles/styles.css';

class PdfButton extends Component {
  constructor() {
    super()
  }
  render () {
    return (
      <div className='button-container'>
        <PDFDownloadLink className="download-button" document={<RenderedPdf />} fileName='Test_Document'>
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
  }
};

export default PdfButton;