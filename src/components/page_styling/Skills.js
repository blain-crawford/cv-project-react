import React, { Component } from 'react';
import { Typography } from '@mui/material';
import { StyledHeaderUnderline, StyledHeaderLabel, StyledAddButton } from '../mui-styles/cvGeneratorStyle';
import { StyledExperienceHeader } from '../mui-styles/cvExperienceStyle';
import HandymanIcon from '@mui/icons-material/Handyman';
import AddIcon from '@mui/icons-material/Add';

class Skills extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <StyledExperienceHeader>
        <StyledHeaderLabel>
          <HandymanIcon/>
          <Typography variant="h4">Skills</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <StyledAddButton variant="outlined" startIcon={<AddIcon />}>
          Add
        </StyledAddButton>
      </StyledExperienceHeader>
    );
  }
}

export default Skills;