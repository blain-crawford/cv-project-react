import React, { Component } from 'react';
import { Typography } from '@mui/material';
import { StyledHeaderUnderline, StyledHeaderLabel, StyledDeleteButton } from '../mui-styles/cvGeneralInfoStyle';
import { StyledExperienceHeader } from '../mui-styles/cvExperienceStyle';
import WorkIcon from '@mui/icons-material/Work';
import AddIcon from '@mui/icons-material/Add';

class Experience extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <StyledExperienceHeader>
        <StyledHeaderLabel>
          <WorkIcon />
          <Typography variant="h4">Education</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <StyledDeleteButton variant="outlined" startIcon={<AddIcon />}>
          Add
        </StyledDeleteButton>
      </StyledExperienceHeader>
    );
  }
}

export default Experience;