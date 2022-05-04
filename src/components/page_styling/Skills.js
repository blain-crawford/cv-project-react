import React, { Component } from 'react';
import { Typography } from '@mui/material';
import {
  StyledHeaderUnderline,
  StyledHeaderLabel,
  StyledSkillInput,
  StyledAddButton,
  StyledInputAndAddButton,
  StyledSkillContainer,
  StyledIndividualSkill, 
  StyledClearIcon
} from '../mui-styles/cvGeneratorStyle';
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
          <HandymanIcon />
          <Typography variant='h4'>Skills</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <StyledInputAndAddButton>
          <StyledSkillInput size='small' label='Skills' id='skill-input' />
          <StyledAddButton
            onClick={this.props.addSkill}
            variant='outlined'
            startIcon={<AddIcon />}
          >
            Add
          </StyledAddButton>
        </StyledInputAndAddButton>
        <div>
          <StyledSkillContainer>
            {this.props.skills.map((skill, skillIndex) => {
              return (
                  <StyledIndividualSkill
                  id={skillIndex} 
                  key={skillIndex}
                  >
                    <Typography variant='h4'>{skill.skills}</Typography> 
                    <StyledClearIcon 
                      onClick={this.props.deleteSkill}
                      id={skillIndex}
                    />
                  </StyledIndividualSkill>
              );
            })}
          </StyledSkillContainer>
        </div>
      </StyledExperienceHeader>
    );
  }
}

export default Skills;
