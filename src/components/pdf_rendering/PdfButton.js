import React, { Component } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import RenderedPdf from './RenderPDF';
import '../../styles/styles.css';

class PdfButton extends Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    return (
      <div className='button-container'>
        <PDFDownloadLink 
        name={this.props.name}
        bio={this.props.bio}
        className="download-button" 
        document={<RenderedPdf 
          name={this.props.name}
          bio={this.props.bio}
        />} 
        fileName='Test_Document'>
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