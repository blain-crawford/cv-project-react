import React, { Component } from 'react';
import { StyledGeneralInfo, StyledCvGenerator } from '../mui-styles/cvGeneralInfoStyle';
import Avatar from './Avatar';
import NameAndBio from './NameAndBio';
import ContactInfo from './ContactInfo';

class CvGenerator extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <StyledCvGenerator>
        <StyledGeneralInfo id='general-info'>
          <Avatar />
          <NameAndBio />
          <ContactInfo />
        </StyledGeneralInfo>
      </StyledCvGenerator>
    );
  }
}

export default CvGenerator;
