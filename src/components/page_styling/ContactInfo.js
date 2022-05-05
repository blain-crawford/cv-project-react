import React, { Component } from 'react';
import { Link, TextField } from '@mui/material';
import { StyledContactInfo, StyledContactInput, StyledContactDiv } from '../mui-styles/cvGeneratorStyle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


class ContactInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <StyledContactInfo>
        <StyledContactDiv>
          <LocationOnIcon></LocationOnIcon>
          <StyledContactInput
            size='small'
            label='Location'
            onChange={(e) =>{
              this.props.setLocation(e.target.value);
            }}
          ></StyledContactInput>
        </StyledContactDiv>
        <StyledContactDiv>
          <LocalPhoneIcon></LocalPhoneIcon>
          <StyledContactInput
            size='small'
            label='Phone Number'
            onChange={(e) =>{
              this.props.setPhoneNumber(e.target.value);
            }}
          ></StyledContactInput>
        </StyledContactDiv>
        <StyledContactDiv>
          <MailOutlineIcon></MailOutlineIcon>
          <StyledContactInput
            size='small'
            label='Email'
            onChange={(e) =>{
              this.props.setEmail(e.target.value);
            }}
          ></StyledContactInput>
        </StyledContactDiv>
        <StyledContactDiv>
          <LinkedInIcon></LinkedInIcon>
          <StyledContactInput
            size='small'
            label='LinkedIn'
            onChange={(e) =>{
              this.props.setLinkedIn(e.target.value);
            }}
          ></StyledContactInput>
        </StyledContactDiv>
        <StyledContactDiv>
          <GitHubIcon></GitHubIcon>
          <StyledContactInput
            size='small'
            label='GitHub'
            onChange={(e) =>{
              this.props.setGitHub(e.target.value);
            }}
          ></StyledContactInput>
        </StyledContactDiv>
    </StyledContactInfo>
    );
  }
}

export default ContactInfo;
