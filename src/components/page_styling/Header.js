import React, { Component } from 'react';
import { AppBar, Typography } from '@mui/material';
import {StyledHeader, headerStyles } from '../mui-styles/headerStyles';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <StyledHeader>
            <AssignmentSharpIcon sx={{...headerStyles.icon}}/>
            <Typography variant="h3">Custom CV Generator</Typography> 
        </StyledHeader>
      </div>
    )
  }

};

export default Header;