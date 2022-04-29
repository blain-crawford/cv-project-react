import React, { Component } from 'react';
import { Typography } from '@mui/material';
import { StyledHeaderUnderline, StyledHeaderLabel, StyledAddButton } from '../mui-styles/cvGeneratorStyle';
import { StyledExperienceHeader } from '../mui-styles/cvExperienceStyle';
import SchoolIcon from '@mui/icons-material/School';
import AddIcon from '@mui/icons-material/Add';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledExperienceHeader>
        <StyledHeaderLabel>
          <SchoolIcon />
          <Typography variant="h4">Education</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <div>
          {this.props.previousEducation.map((education) => {
            return (
              <div 
              id={education.educationKey}
              key={education.educationKey}
              >{education.education}</div>
              )
          })}
        </div>
        <StyledAddButton 
        variant="outlined" 
        startIcon={<AddIcon />}
        onClick={this.props.addEducation}
        >
          Add
        </StyledAddButton>
      </StyledExperienceHeader>
    );
  }
}

export default Education;