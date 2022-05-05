import React, { Component } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { PictureHolder, GeneralInfo } from '../mui-styles/cvGeneratorStyle'

class Avatar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
          <PictureHolder
            Component='img'
            image=''
            alt={this.props.avatarAlt}
            onClick={this.props.setAvatarImage}
          >
            <CameraAltIcon />
          </PictureHolder>
    )
  }
}

export default Avatar;