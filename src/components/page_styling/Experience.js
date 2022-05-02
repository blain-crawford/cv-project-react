import React, { Component } from 'react';
import { Typography } from '@mui/material';
import {
  StyledHeaderUnderline,
  StyledHeaderLabel,
  StyledAddButton,
  StyledCvInfoInputs,
  StyledDateAndDeleteContainer,
  StyledCvForm, 
  StyledNameInput,
  StyledBioInput, 
  StyledContactInput,
  StyledDateInput
} from '../mui-styles/cvGeneratorStyle';
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
          <Typography variant='h4'>Experience</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <div>
          {this.props.previousExperience.map((experience) => {
            return (
              <StyledCvForm 
                id={experience.experienceKey} 
                key={experience.experienceKey}
              >
                <StyledCvInfoInputs>
                  <StyledNameInput 
                    required
                    id="outlined-required-flexible"
                    label="Company Name"
                  />
                  <StyledNameInput 
                    required
                    id="outlined-required-flexible"
                    label="Position"
                  />
                  <StyledBioInput 
                       required
                       id="outlined-required-flexible"
                       multiline
                       rows={4}
                       label="Job Description (optional)"
                  />
                </StyledCvInfoInputs>
                <StyledDateAndDeleteContainer>
                  <StyledDateInput 
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                  />
                  <StyledDateInput 
                  label="Date desktop"
                  inputFormat="MM/dd/yyyy"
                  />
                </StyledDateAndDeleteContainer>
              </StyledCvForm>
            );
          })}
        </div>
        <StyledAddButton
          onClick={this.props.addExperience}
          variant='outlined'
          startIcon={<AddIcon />}
        >
          Add
        </StyledAddButton>
      </StyledExperienceHeader>
    );
  }
}

export default Experience;
