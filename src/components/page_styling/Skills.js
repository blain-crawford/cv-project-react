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
  StyledClearIcon,
  StyledExperienceHeader,
} from '../mui-styles/cvGeneratorStyle';
import HandymanIcon from '@mui/icons-material/Handyman';
import AddIcon from '@mui/icons-material/Add';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      activeInputValue: '',
    };
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
          <StyledSkillInput
            size='small'
            label='Front End Skills'
            value={this.state.activeInputValue}
            id='skill-input'
            onChange={(e) => {
              this.props.setSkillToAdd(e.target.value);
              let newValue = e.target.value;
              this.setState({ activeInputValue: newValue });
            }}
          />
          <StyledAddButton
            onClick={(e) => {
              this.props.addSkill();
              let clearedInputValue = '';
              this.setState({ activeInputValue: clearedInputValue });
            }}
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
                <StyledIndividualSkill id={skillIndex} key={skillIndex}>
                  <Typography variant='h4'>{skill}</Typography>
                  <StyledClearIcon
                    onClick={(e) => {
                      this.props.deleteSkill(e.currentTarget.id);
                    }}
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
