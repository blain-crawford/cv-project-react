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
    //functionality for experience form
    this.setCompanyName = this.setCompanyName.bind(this);
    this.setPositionTitle = this.setPositionTitle.bind(this);
    this.setJobDescription = this.setJobDescription.bind(this);
    this.setExperienceStartDate = this.setExperienceStartDate.bind(this);
    this.setExperienceEndDate = this.setExperienceEndDate.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);

    //functionality for education form
    this.setCollegeName = this.setCollegeName.bind(this);
    this.setDegree = this.setDegree.bind(this);
    this.setEducationStartDate = this.setEducationStartDate.bind(this);
    this.setEducationEndDate = this.setEducationEndDate.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);

    //functionality for skill form
    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.state = {
      previousExperience: [],
      previousEducation: [],
      skills: [],
    };
  }

  //Declaring Experience functions
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

  setExperienceStartDate(startDate, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].startDate = startDate;
    this.setState({ previousExperience: newPreviousExperiences });
  }

  setExperienceEndDate(endDate, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].endDate = endDate;
    this.setState({ previousExperience: newPreviousExperiences });
  }

  deleteExperience(experience) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences.splice(experience, 1);
    this.setState({ previousExperience: newPreviousExperiences });
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

  //Declaring education Functions
  setCollegeName(name, educationIndex) {
    const newPreviousEducation = [...this.state.previousEducation];
    newPreviousEducation[educationIndex].collegeName = name;
    this.setState({ previousEducation: newPreviousEducation });
  }

  setDegree(degree, educationIndex) {
    const newPreviousEducation = [...this.state.previousEducation];
    newPreviousEducation[educationIndex].degree = degree;
    this.setState({ previousEducation: newPreviousEducation });
  }

  setEducationStartDate(date, educationIndex) {
    const newPreviousEducation = [...this.state.previousEducation];
    newPreviousEducation[educationIndex].startDate = date;
    this.setState({ previousEducation: newPreviousEducation });
    console.log(this.state.previousEducation);
  }

  setEducationEndDate(date, educationIndex) {
    const newPreviousEducation = [...this.state.previousEducation];
    newPreviousEducation[educationIndex].endDate = date;
    this.setState({ previousEducation: newPreviousEducation });
    console.log(this.state.previousEducation);
  }

  deleteEducation(education) {
    const newPreviousEducation = [...this.state.previousEducation];
    newPreviousEducation.splice(education, 1);
    this.setState({ previousEducation: newPreviousEducation });
    console.log(this.state.previousEducation);
  }

  addEducation() {
    const newEducation = [
      ...this.state.previousEducation,
      {
        collegeName: '',
        degree: '',
        startDate: '',
        endDate: '',
      },
    ];
    this.setState({
      previousEducation: newEducation,
    });
    console.log(this.state.previousEducation);
  }

  //Declaring Skill Functions
  deleteSkill(e) {
    // const newSkillList = [this.state.skills];
    // newSkillList.splice(skill, 1);
    // this.setState({skills: newSkillList})
    console.log(e.currentTarget);
  }

  addSkill() {
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
            setExperienceStartDate={this.setExperienceStartDate}
            setExperienceEndDate={this.setExperienceEndDate}
            setCompanyName={this.setCompanyName}
            setPositionTitle={this.setPositionTitle}
            setJobDescription={this.setJobDescription}
            deleteExperience={this.deleteExperience}
          />
        </StyledExperienceContainer>
        <StyledExperienceContainer>
          <Education
            setCollegeName={this.setCollegeName}
            setDegree={this.setDegree}
            setEducationStartDate={this.setEducationStartDate}
            setEducationEndDate={this.setEducationEndDate}
            deleteEducation={this.deleteEducation}
            addEducation={this.addEducation}
            previousEducation={this.state.previousEducation}
          />
        </StyledExperienceContainer>
        <StyledExperienceContainer>
          <Skills
            addSkill={this.addSkill}
            skills={this.state.skills}
            deleteSkill={this.deleteSkill}
          />
        </StyledExperienceContainer>
      </StyledCvGenerator>
    );
  }
}

export default CvGenerator;
