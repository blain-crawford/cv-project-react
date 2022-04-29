import React, { Component } from 'react';
import { StyledGeneralInfo, StyledCvGenerator } from '../mui-styles/cvGeneralInfoStyle';
import { StyledExperienceContainer, StyledExperienceHeader } from '../mui-styles/cvExperienceStyle';
import Avatar from './Avatar';
import NameAndBio from './NameAndBio';
import ContactInfo from './ContactInfo';
import Experience from './Experience';
import Education from './Education';


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
        <StyledExperienceContainer>
          <Experience />
        </StyledExperienceContainer>
        <StyledExperienceContainer>
          <Education />
        </StyledExperienceContainer>
      </StyledCvGenerator>
    );
  }
}

export default CvGenerator;
