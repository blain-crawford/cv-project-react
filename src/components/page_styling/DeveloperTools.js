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

class DeveloperTools extends Component {
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
          <Typography variant='h4'>Developer Tools</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <StyledInputAndAddButton>
          <StyledSkillInput
            size='small'
            label='Developer Tools'
            value={this.state.activeInputValue}
            id='developer-tool-input'
            onChange={(e) => {
              this.props.setDeveloperToolToAdd(e.target.value);
              let newValue = e.target.value;
              this.setState({ activeInputValue: newValue });
            }}
          />
          <StyledAddButton
            onClick={(e) => {
              this.props.addDeveloperTool();
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
            {this.props.developerTools.map(
              (developerTool, developerToolIndex) => {
                return (
                  <StyledIndividualSkill
                    id={developerToolIndex}
                    key={developerToolIndex}
                  >
                    <Typography variant='h4'>{developerTool}</Typography>
                    <StyledClearIcon
                      onClick={(e) => {
                        this.props.deleteDeveloperTool(e.currentTarget.id);
                      }}
                      id={developerToolIndex}
                    />
                  </StyledIndividualSkill>
                );
              },
            )}
          </StyledSkillContainer>
        </div>
      </StyledExperienceHeader>
    );
  }
}

export default DeveloperTools;
