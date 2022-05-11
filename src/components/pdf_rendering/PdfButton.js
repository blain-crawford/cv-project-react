import React, { Component } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import FullResumePdf from './FullResumePdf';
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
            <FullResumePdf
              name={this.props.name}
              bio={this.props.bio}
              contactInfo={this.props.contactInfo}
              skills={this.props.skills}
              developerTools={this.props.developerTools}
              applicationList={this.props.applicationList}
              previousExperience={this.props.previousExperience}
              previousEducation={this.props.previousEducation}
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
