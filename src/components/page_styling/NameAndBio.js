import React, { Component } from 'react';
import { StyledNameAndBio, StyledNameInput, StyledBioInput } from '../mui-styles/cvGeneralInfoStyle';

class NameAndBio extends Component {
  constructor() {
    super();
  }

  render() {
    return ( 
      <StyledNameAndBio>
        <StyledNameInput
          required
          id="outlined-required"
          // label="Required"
          defaultValue="Name"
        />
        <StyledBioInput
          required
          id="outlined-multiline-flexible"
          label="Bio"
          multiline
          rows={4}
          maxRows={8}
          // value=''
          // onChange=''
          variant="filled"
        />
      </StyledNameAndBio>
    );
  }
}

export default NameAndBio;