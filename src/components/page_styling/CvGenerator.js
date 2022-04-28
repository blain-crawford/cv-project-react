import React, { Component } from 'react';
import { StyledGeneralInfo, StyledCvGenerator } from '../mui-styles/cvGeneralInfoStyle';
import Avatar from './Avatar';
import NameAndBio from './NameAndBio';

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
        </StyledGeneralInfo>
      </StyledCvGenerator>
    );
  }
}

export default CvGenerator;
