import React, { Component } from 'react';
import { PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import FullResumePdf from './FullResumePdf';
import '../../styles/styles.css';
import { StyledAddButton } from '../mui-styles/cvGeneratorStyle';

const buttonStyles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginTop: '20px',
    margin: '10px auto',
  },
  renderButton: {
    padding: '10px',
    margin: '0 auto',
    width: '50%',
    textDecoration: 'none'
  }
});

class PdfButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div 
        style={buttonStyles.buttonContainer}
        className='button-container'
      >
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
          fileName={this.props.name.split(' ').join('-') + '-resume'}
        >
          {({ loading }) =>
            loading ? (
              <StyledAddButton style={buttonStyles.renderButton}>Loading Resume. . .</StyledAddButton>
            ) : (
              <StyledAddButton style={buttonStyles.renderButton}>Download Resume</StyledAddButton>
            )
          }
        </PDFDownloadLink>
      </div>
    );
  }
}

export default PdfButton;
