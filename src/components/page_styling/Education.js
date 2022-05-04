import React, { Component } from 'react';
import { Typography, TextField } from '@mui/material';
import {
  StyledHeaderUnderline,
  StyledHeaderLabel,
  StyledAddButton,
  StyledCvForm,
  StyledCvInfoInputs,
  StyledNameInput,
  StyledDateAndDeleteContainer,
  StyledDateInput,
  StyledDeleteButton

} from '../mui-styles/cvGeneratorStyle';
import { StyledExperienceHeader } from '../mui-styles/cvExperienceStyle';
import SchoolIcon from '@mui/icons-material/School';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledExperienceHeader>
        <StyledHeaderLabel>
          <SchoolIcon />
          <Typography variant='h4'>Education</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <div>
          {this.props.previousEducation.map((education, educationIndex) => {
            return (
              <StyledCvForm
                id={educationIndex}
                key={educationIndex}
                className='form-container'
              >
                <StyledCvInfoInputs>
                  <StyledNameInput
                    required
                    id='outlined-required-flexible'
                    label='College Name'
                    onChange={(e) => {
                      this.props.setCollegeName(e.target.value, educationIndex);
                    }}
                    value={education.collegeName}
                  />
                  <StyledNameInput
                    required
                    id='outlined-required-flexible'
                    label='Field of Study'
                    onChange={(e) => {
                      this.props.setDegree(e.target.value, educationIndex);
                    }}
                    value={education.degree}
                  />
                </StyledCvInfoInputs>
                <StyledDateAndDeleteContainer>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StyledDateInput
                      label='Start Date'
                      inputFormat='MM/dd/yyyy'
                      onChange={(date) => {
                        this.props.setEducationStartDate(date, educationIndex);
                      }}
                      value={education.startDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <StyledDateInput
                      label='End Date'
                      inputFormat='MM/dd/yyyy'
                      onChange={(date) => {
                        this.props.setEducationEndDate(date, educationIndex);
                      }}
                      value={education.endDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <StyledDeleteButton
                    onClick={() => {
                      this.props.deleteEducation(educationIndex);
                    }}
                    id={educationIndex}
                  >
                    Delete
                  </StyledDeleteButton>
                </StyledDateAndDeleteContainer>
              </StyledCvForm>
            );
          })}
        </div>
        <StyledAddButton
          variant='outlined'
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
