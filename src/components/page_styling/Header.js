import React, { Component } from 'react';
import { Typography } from '@mui/material';
import {
  StyledHeader,
  HeaderLeft,
  HeaderRight,
} from '../mui-styles/headerStyles.js';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <StyledHeader>
          <HeaderLeft>
            <AssignmentSharpIcon />
            <Typography variant='h4'>Dynamic CV Generator</Typography>
          </HeaderLeft>
          <HeaderRight>
            <Typography variant='h5'>Export to PDF for free!</Typography>
          </HeaderRight>
        </StyledHeader>
      </div>
    );
  }
}

export default Header;
