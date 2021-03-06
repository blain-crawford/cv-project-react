import React, { Component } from 'react';
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
  StyledDateInput,
  StyledDeleteButton,
  StyledExperienceHeader,
} from '../mui-styles/cvGeneratorStyle';
import WorkIcon from '@mui/icons-material/Work';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

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
          {this.props.previousExperience.map((experience, experienceIndex) => {
            return (
              <StyledCvForm
                id={experienceIndex}
                key={experienceIndex}
                className='form-container'
              >
                <StyledCvInfoInputs>
                  <StyledNameInput
                    required
                    id='outlined-required-flexible'
                    label='Company Name'
                    onChange={(e) => {
                      this.props.setCompanyName(
                        e.target.value,
                        experienceIndex,
                      );
                    }}
                    value={experience.companyName}
                  />
                  <StyledNameInput
                    required
                    id='outlined-required-flexible'
                    label='Position'
                    onChange={(e) => {
                      this.props.setPositionTitle(
                        e.target.value,
                        experienceIndex,
                      );
                    }}
                    value={experience.position}
                  />
                  <StyledBioInput
                    required
                    id='outlined-required-flexible'
                    multiline
                    rows={4}
                    label='Job Description (optional)'
                    onChange={(e) => {
                      this.props.setJobDescription(
                        e.target.value,
                        experienceIndex,
                      );
                    }}
                    value={experience.jobDescription}
                  />
                </StyledCvInfoInputs>
                <StyledDateAndDeleteContainer>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StyledDateInput
                      label='Start Date'
                      inputFormat='MM/dd/yyyy'
                      onChange={(date) => {
                        this.props.setExperienceStartDate(
                          date,
                          experienceIndex,
                        );
                      }}
                      value={experience.startDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <StyledDateInput
                      label='End Date'
                      inputFormat='MM/dd/yyyy'
                      onChange={(date) => {
                        this.props.setExperienceEndDate(date, experienceIndex);
                      }}
                      value={experience.endDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <StyledDeleteButton
                    onClick={() => {
                      this.props.deleteExperience(experience.experienceIndex);
                    }}
                    id={experienceIndex}
                  >
                    Delete
                  </StyledDeleteButton>
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
