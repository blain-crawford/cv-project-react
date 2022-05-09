import React, { Component } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import RenderedPdf from './RenderPDF';
import '../../styles/styles.css';

class PdfButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='button-container'>
        <PDFDownloadLink
          className='download-button'
          document={
            <RenderedPdf
              name={this.props.name}
              bio={this.props.bio}
              contactInfo={this.props.contactInfo}
              previousExperience={this.props.previousExperience}
              previousEducation={this.props.previousEducation}
              skills={this.props.skills}
            />
          }
          fileName='Test_Document'
        >
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
}

export default PdfButton;
