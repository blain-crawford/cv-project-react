import React, { Component, useState, newValue, setValue } from 'react';
import { Typography, TextField } from '@mui/material';
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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



class Experience extends Component {
  constructor(props) {
    super(props);
    this.setStartDate = this.setStartDate.bind(this)
    this.setEndDate = this.setEndDate.bind(this)
    this.state = {
      startDate: '',
      endDate: ''
    }
  }

  setStartDate (startDate) {
      this.setState({startDate: startDate})
      console.log(this.state)
  };

  setEndDate (endDate) {
    this.setState({endDate: endDate})
    console.log(this.state)
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
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StyledDateInput 
                      label="Start Date"
                      inputFormat="MM/dd/yyyy"
                      onChange={this.setStartDate}
                      value={this.state.startDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <StyledDateInput 
                    label="End Date"
                    inputFormat="MM/dd/yyyy"
                    onChange={this.setEndDate}
                    value={this.state.endDate}
                    renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
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
