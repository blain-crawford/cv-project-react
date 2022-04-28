import React, { Component } from 'react'; 
import PdfButton from '../pdf_rendering/PdfButton';
import { Typography } from '@mui/material';
import { StyledRightSideBar } from '../mui-styles/rightSideBarStyle';

class RightSideBar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <StyledRightSideBar>
        <Typography variant="h3">Hello, App!</Typography>
        <PdfButton />
      </StyledRightSideBar>

    )
  }
}

export default RightSideBar;