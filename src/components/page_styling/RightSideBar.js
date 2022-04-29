import React, { Component } from 'react'; 
import PdfButton from '../pdf_rendering/PdfButton';
import { Typography} from '@mui/material';
import { StyledRightSideBar, StyledRightSideHeader } from '../mui-styles/rightSideBarStyle';
import { PreviewSwitch } from '../mui-styles/rightSideBarStyle';

class RightSideBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledRightSideBar
        color={this.props.color}
        mode={this.props.mode}
      >
        <StyledRightSideHeader>
          <Typography variant="h4">Preview View</Typography>
          <PreviewSwitch
            label="Preview Mode"
            size="normal"
            onChange={this.props.changeMode}
          />
        </StyledRightSideHeader>
        <PdfButton />
      </StyledRightSideBar>

    )
  }
}

export default RightSideBar;