import React, { Component } from 'react';
import { StyledNameAndBio, StyledNameInput, StyledBioInput } from '../mui-styles/cvGeneratorStyle';

class NameAndBio extends Component {
  constructor() {
    super();
  }

  render() {
    return ( 
      <StyledNameAndBio>
        <StyledNameInput
          required
          id="outlined-required-flexible"
          label="Required"
          label="Name"
        />
        <StyledBioInput
          required
          id="outlined-multiline-flexible"
          label="Bio"
          multiline
          rows={4}
          // maxRows={8}
          // // value=''
          // // onChange=''
          variant="filled"
        />
      </StyledNameAndBio>
    );
  }
}

export default NameAndBio;