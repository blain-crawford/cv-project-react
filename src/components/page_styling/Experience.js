import React, { Component } from 'react';
import { Typography } from '@mui/material';
import { StyledHeaderUnderline, StyledHeaderLabel, StyledAddButton } from '../mui-styles/cvGeneratorStyle';
import { StyledExperienceHeader } from '../mui-styles/cvExperienceStyle';
import WorkIcon from '@mui/icons-material/Work';
import AddIcon from '@mui/icons-material/Add';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledExperienceHeader>
        <StyledHeaderLabel>
          <WorkIcon />
          <Typography variant="h4">Experience</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <div>
          {this.props.previousExperience.map((experience) => {
            return (
              <div 
              id={experience.experienceKey}
              key={experience.experienceKey}
              >{experience.experience}</div>
              )
          })}
        </div>
        <StyledAddButton 
        onClick={this.props.addExperience}
        variant="outlined" 
        startIcon={<AddIcon />}>
          Add
        </StyledAddButton>
      </StyledExperienceHeader>
    );
  }
}

export default Experience;
