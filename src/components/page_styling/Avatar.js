import React, { Component } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { PictureHolder, GeneralInfo } from '../mui-styles/cvGeneralInfoStyle'

class Avatar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
          <PictureHolder>
            <CameraAltIcon />
          </PictureHolder>
    )
  }
}

export default Avatar;