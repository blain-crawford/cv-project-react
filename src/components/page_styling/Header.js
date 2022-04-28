import React, { Component } from 'react';
import { AppBar, Typography } from '@mui/material';
import { StyledHeader, HeaderLeft, HeaderRight }  from '../mui-styles/headerStyles.js';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import PdfButton from '../pdf_rendering/PdfButton.js';

class Header extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <StyledHeader>
          <HeaderLeft>
            <AssignmentSharpIcon />
            <Typography variant="h4">Custom CV Generator</Typography> 
          </HeaderLeft>
          <HeaderRight>
            <Typography variant="h5">Export to PDF for free!</Typography>
          </HeaderRight>
        </StyledHeader>
      </div>
    )
  };
}

export default Header;