import React, { Component } from 'react'; 
import PdfButton from '../pdf_rendering/PdfButton';
import { Typography, Switch } from '@mui/material';
import { StyledRightSideBar, StyledRightSideHeader } from '../mui-styles/rightSideBarStyle';

class RightSideBar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <StyledRightSideBar>
        <StyledRightSideHeader>
          <Typography variant="h4">Preview View</Typography>
          <Switch
            name="loading"
            color="primary"
          />
        </StyledRightSideHeader>
        <PdfButton />
      </StyledRightSideBar>

    )
  }
}

export default RightSideBar;