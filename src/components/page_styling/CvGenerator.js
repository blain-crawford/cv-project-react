import React, { Component } from 'react';
import { StyledGeneralInfo, StyledCvGenerator } from '../mui-styles/cvGeneratorStyle';
import { StyledExperienceContainer } from '../mui-styles/cvExperienceStyle';
import Avatar from './Avatar';
import NameAndBio from './NameAndBio';
import ContactInfo from './ContactInfo';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';


class CvGenerator extends Component {
  constructor(props) {
    super(props);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addSkills = this.addSkills.bind(this);
    this.state = {
      previousExperience: [],
      experienceCount: 0,
      previousEducation: [],
      educationCount: 0,
      skills: [],
      skillCount: 0
    }
  };

  addExperience () {
    const newExperience = [...this.state.previousExperience, {
      experience:'More Experience', 
      experienceKey: this.state.experienceCount
    }];
    this.setState({previousExperience: newExperience, experienceCount: this.state.experienceCount + 1})
    console.log(this.state)
  }

  addEducation () {
    const newEducation = [...this.state.previousEducation, {
      education: 'More Education', 
      educationKey: this.state.educationCount
    }];
    this.setState({previousEducation: newEducation, educationCount: this.state.educationCount + 1})
    console.log(this.state.previousExperience)
  }

  addSkills () {
    //
  }

  render() {
    return (

      <StyledCvGenerator>
        <StyledGeneralInfo id='general-info'>
          <Avatar />
          <NameAndBio />
          <ContactInfo />
        </StyledGeneralInfo>
        <StyledExperienceContainer>
          <Experience 
            addExperience={this.addExperience}
            previousExperience={this.state.previousExperience}
          />
        </StyledExperienceContainer>
        <StyledExperienceContainer>
          <Education 
          addEducation={this.addEducation}
          previousEducation={this.state.previousEducation}
          />
        </StyledExperienceContainer>
        <StyledExperienceContainer>
          <Skills />
        </StyledExperienceContainer>
      </StyledCvGenerator>
    );
  }
}

export default CvGenerator;
