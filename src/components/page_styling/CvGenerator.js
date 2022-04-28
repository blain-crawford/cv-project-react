import React, { Component } from 'react';
import { Box } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { PictureHolder, GeneralInfo } from '../mui-styles/CvGeneralInfoStyle'

class CvGenerator extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <GeneralInfo id="general-info">
        <div>
          <PictureHolder>
            <CameraAltIcon />
          </PictureHolder>
        </div>
        <div id="name-bio">

        </div>
      </GeneralInfo>
    )
  }
}

export default CvGenerator;