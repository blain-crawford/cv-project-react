import React, { Component } from 'react';
import {
  PictureHolder,
  StyledAvatarSection,
  StyledAddPhotoInput,
  StyledAddPhotoButton,
} from '../mui-styles/cvGeneratorStyle';
import Stack from '@mui/material/Stack';

class Avatar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <StyledAvatarSection>
        <PictureHolder image={this.props.imageSrc} alt={this.props.avatarAlt}>
          {this.props.imagePlaceHolder}
        </PictureHolder>
        <Stack direction='row' alignItems='center' spacing={2}>
          <label htmlFor='contained-button-file'>
            <StyledAddPhotoInput
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
              onChange={this.props.setAvatarImage}
            />
            <StyledAddPhotoButton variant='contained' component='span'>
              Upload Photo
            </StyledAddPhotoButton>
          </label>
        </Stack>
      </StyledAvatarSection>
    );
  }
}

export default Avatar;
