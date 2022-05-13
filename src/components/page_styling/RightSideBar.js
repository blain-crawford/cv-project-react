import React, { Component } from 'react';
import PdfButton from '../pdf_rendering/PdfButton';
import { Typography } from '@mui/material';
import {
  StyledRightSideBar,
  StyledRightSideHeader,
  StyledInstructions
} from '../mui-styles/rightSideBarStyle';
import { PreviewSwitch } from '../mui-styles/rightSideBarStyle';

class RightSideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledRightSideBar color={this.props.color} mode={this.props.mode}>
        <StyledRightSideHeader>
          <Typography variant='h4'>Preview View</Typography>
          <PreviewSwitch size='normal' onChange={this.props.changeMode} />
        </StyledRightSideHeader>
        <PdfButton
          name={this.props.name}
          bio={this.props.bio}
          contactInfo={this.props.contactInfo}
          skills={this.props.skills}
          developerTools={this.props.developerTools}
          applicationList={this.props.applicationList}
          previousExperience={this.props.previousExperience}
          previousEducation={this.props.previousEducation}
        />
        <StyledRightSideHeader style={{marginTop: '20px', width: '70%'}}>
          <Typography variant='h5'>Instructions:</Typography>
        </StyledRightSideHeader>
        <StyledInstructions>
         <p>Fill in all requested info at the top of the form</p>
         <p>Add Skills and Developer Tools by typing in the inputs and clicking the add button</p>
         <p>Click the add button to add forms for Software Applications, Experience, and Education and add as many as necessary!</p>
         <p>When you are ready to preview your Resumè, click the "Preview View" switch above</p>
         <p>When it looks done, click the "download Resumè" button and save it to your computer!</p>
         <h3>Go out there and get that dream job!</h3>
        </StyledInstructions>
      </StyledRightSideBar>
    );
  }
}

export default RightSideBar;
