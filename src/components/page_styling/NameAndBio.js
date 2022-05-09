import React, { Component } from 'react';
import {
  StyledNameAndBio,
  StyledNameInput,
  StyledBioInput,
} from '../mui-styles/cvGeneratorStyle';

class NameAndBio extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <StyledNameAndBio>
        <StyledNameInput
          required
          id='outlined-required-flexible'
          value={this.props.name}
          label='Required'
          label='Name'
          onChange={(e) => {
            this.props.setName(e.target.value);
          }}
        />
        <StyledBioInput
          required
          id='outlined-multiline-flexible'
          value={this.props.bio}
          label='Bio'
          multiline
          rows={4}
          onChange={(e) => {
            this.props.setBio(e.target.value);
          }}
          variant='filled'
        />
      </StyledNameAndBio>
    );
  }
}

export default NameAndBio;
