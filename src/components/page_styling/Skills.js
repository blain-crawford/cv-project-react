import React, { Component } from 'react';
import { Typography } from '@mui/material';
import { StyledHeaderUnderline, StyledHeaderLabel, StyledSkillInput, StyledAddButton, StyledInputAndAddButton } from '../mui-styles/cvGeneratorStyle';
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
          <Typography 
          variant="h4">Skills</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <StyledInputAndAddButton>
          <StyledSkillInput 
            size='small'
            label='Skills'
            id="skill-input"
          />
          <StyledAddButton 
          onClick={this.props.addSkills}
          variant="outlined" 
          startIcon={<AddIcon />}
          >
            Add
          </StyledAddButton>
        </StyledInputAndAddButton>
        <div>
          {this.props.skills.map((skill) => {
            return(
              <div 
              id={skill.skillCount}
              key={skill.skillCount}
              >{skill.skills}</div>
            )
          })}
        </div>
      </StyledExperienceHeader>
    );
  }
}

export default Skills;