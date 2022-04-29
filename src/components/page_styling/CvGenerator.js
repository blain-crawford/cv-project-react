import React, { Component } from 'react';
import { StyledGeneralInfo, StyledCvGenerator } from '../mui-styles/cvGeneratorStyle';
import { StyledExperienceContainer } from '../mui-styles/cvExperienceStyle';
import Avatar from './Avatar';
import NameAndBio from './NameAndBio';
import ContactInfo from './ContactInfo';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';


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
        <StyledExperienceContainer>
          <Skills />
        </StyledExperienceContainer>
      </StyledCvGenerator>
    );
  }
}

export default CvGenerator;
