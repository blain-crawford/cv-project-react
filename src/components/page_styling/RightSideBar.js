import React, { Component } from 'react'; 
import PdfButton from '../pdf_rendering/PdfButton';
import { Typography} from '@mui/material';
import { StyledRightSideBar, StyledRightSideHeader } from '../mui-styles/rightSideBarStyle';
import { PreviewSwitch } from '../mui-styles/rightSideBarStyle';

class RightSideBar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <StyledRightSideBar>
        <StyledRightSideHeader>
          <Typography variant="h4">Preview View</Typography>
          <PreviewSwitch
            size="normal"
          />
        </StyledRightSideHeader>
        <PdfButton />
      </StyledRightSideBar>

    )
  }
}

export default RightSideBar;