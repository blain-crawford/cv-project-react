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
} from '../mui-styles/cvGeneratorStyle';
import { StyledExperienceHeader } from '../mui-styles/cvExperienceStyle';
import WorkIcon from '@mui/icons-material/Work';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

class SoftwareApplications extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledExperienceHeader>
        <StyledHeaderLabel>
          <WorkIcon />
          <Typography variant='h4'>Software Applications</Typography>
        </StyledHeaderLabel>
        <StyledHeaderUnderline />
        <div>
          {this.props.applicationList.map((application, applicationIndex) => {
            return (
              <StyledCvForm
              id={applicationIndex}
              key={applicationIndex}
              className='form-container'
              >
                <StyledCvInfoInputs>
                <StyledNameInput
                      required
                      id='outlined-required-flexible'
                      label='Application Name'
                      onChange={(e) => {
                        this.props.setApplicationName(
                          e.target.value,
                          applicationIndex,
                        );
                      }}
                      value={application.applicationName}
                    />
                <StyledNameInput
                      required
                      id='outlined-required-flexible'
                      label='Tools Used'
                      onChange={(e) => {
                        this.props.setToolsUsed(
                          e.target.value,
                          applicationIndex,
                        );
                      }}
                      value={application.toolsUsed}
                    />
                <StyledBioInput
                      required
                      multiline
                      rows={4}
                      id='outlined-required-flexible'
                      label='Application Description'
                      onChange={(e) => {
                        this.props.setAppDescription(
                          e.target.value,
                          applicationIndex,
                        );
                      }}
                      value={application.appDescription}
                    />
                <StyledBioInput
                      required
                      multiline
                      rows={4}
                      id='outlined-required-flexible'
                      label='Tasks Accomplished'
                      onChange={(e) => {
                        this.props.setTasksAccomplished(
                          e.target.value,
                          applicationIndex,
                        );
                      }}
                      value={application.tasksAccomplished}
                    />
                <StyledDeleteButton
                  style={{width: '20%'}}
                  onClick={() => {
                    this.props.deleteApplication(applicationIndex);
                  }}
                >Delete</StyledDeleteButton>
                </StyledCvInfoInputs>
              </StyledCvForm>
            )
          })}
        </div>
        <StyledAddButton
          onClick={this.props.addApplication}
          variant='outlined'
          startIcon={<AddIcon />}
        >
          Add
        </StyledAddButton>
      </StyledExperienceHeader>
    );
  }
}

export default SoftwareApplications;
