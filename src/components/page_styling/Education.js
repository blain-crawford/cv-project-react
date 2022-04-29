import React, { Component } from 'react';
import { Typography } from '@mui/material';
import { StyledHeaderUnderline, StyledHeaderLabel, StyledAddButton } from '../mui-styles/cvGeneratorStyle';
import { StyledExperienceHeader } from '../mui-styles/cvExperienceStyle';
import SchoolIcon from '@mui/icons-material/School';
import AddIcon from '@mui/icons-material/Add';

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <StyledExperienceHeader>
        <StyledHeaderLabel>
          <SchoolIcon />
          <Typography variant="h4">Education</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <StyledAddButton variant="outlined" startIcon={<AddIcon />}>
          Add
        </StyledAddButton>
      </StyledExperienceHeader>
    );
  }
}

export default Education;