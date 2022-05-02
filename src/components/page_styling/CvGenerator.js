import React, { Component } from 'react';
import {
  StyledGeneralInfo,
  StyledCvGenerator,
} from '../mui-styles/cvGeneratorStyle';
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
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addSkills = this.addSkills.bind(this);
    this.setCompanyName = this.setCompanyName.bind(this);
    this.setPositionTitle = this.setPositionTitle.bind(this);
    this.setJobDescription = this.setJobDescription.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this)
    this.state = {
      previousExperience: [],
      previousEducation: [],
      educationCount: 0,
      skills: [],
      skillCount: 0,
    };
  }

  setCompanyName(name, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].companyName = name;
    this.setState({ previousExperience: newPreviousExperiences });
  }

  setPositionTitle(title, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].position = title;
    this.setState({ previousExperience: newPreviousExperiences });
    console.log(this.state.previousExperience[experienceIndex]);
  }

  setJobDescription(description, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].jobDescription = description;
    this.setState({ previousExperience: newPreviousExperiences });
    console.log(this.state.previousExperience[experienceIndex]);
  }

  setCompanyName(name, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].companyName = name;
    this.setState({ previousExperience: newPreviousExperiences });
  }

  setStartDate(startDate, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].startDate = startDate;
    this.setState({ previousExperience: newPreviousExperiences });
  }

  setEndDate(endDate, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].endDate = endDate;
    this.setState({ previousExperience: newPreviousExperiences });
   
  }

  deleteExperience(experience) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences.splice(experience, 1);
    this.setState({previousExperience: newPreviousExperiences});
  }

  addExperience() {
    const newExperience = [
      ...this.state.previousExperience,
      {
        companyName: '',
        position: '',
        jobDescription: '',
        startDate: '',
        endDate: '',
      },
    ];
    this.setState({
      previousExperience: newExperience,
    });
  }

  addEducation() {
    const newEducation = [
      ...this.state.previousEducation,
      {
        education: 'More Education',
        educationKey: this.state.educationCount,
      },
    ];
    this.setState({
      previousEducation: newEducation,
      educationCount: this.state.educationCount + 1,
    });
  }

  addSkills() {
    const SkillInput = document.querySelector('#skill-input');
    const newSkillList = [
      ...this.state.skills,
      {
        skills: SkillInput.value,
        skillCount: this.state.skillCount,
      },
    ];
    this.setState({
      skills: newSkillList,
      skillCount: this.state.skillCount + 1,
    });

    SkillInput.value = '';
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
            setStartDate={this.setStartDate}
            setEndDate={this.setEndDate}
            setCompanyName={this.setCompanyName}
            setPositionTitle={this.setPositionTitle}
            setJobDescription={this.setJobDescription}
            deleteExperience={this.deleteExperience}
          />
        </StyledExperienceContainer>
        <StyledExperienceContainer>
          <Education
            addEducation={this.addEducation}
            previousEducation={this.state.previousEducation}
          />
        </StyledExperienceContainer>
        <StyledExperienceContainer>
          <Skills addSkills={this.addSkills} skills={this.state.skills} />
        </StyledExperienceContainer>
      </StyledCvGenerator>
    );
  }
}

export default CvGenerator;
