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

    //functionality for Avatar

    //functionality for name and bio
    this.setName = this.setName.bind(this);
    this.setBio = this.setBio.bind(this)

    //functionality for contact info
    this.setLocation = this.setLocation.bind(this);
    this.setPhoneNumber = this.setPhoneNumber.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setLinkedIn = this.setLinkedIn.bind(this);
    this.setGitHub = this.setGitHub.bind(this);

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
    this.setSkillToAdd = this.setSkillToAdd.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.state = {
      nameAndBio: {
        name: '',
        bio: '',
      },
      contactInfo: {
        location: '',
        phoneNumber: '',
        email: '',
        linkedIn: '',
        gitHub: ''
      },
      previousExperience: [],
      previousEducation: [],
      skillToAdd: '',
      skills: [],
    };
  }

  //declaring Avatar functions

  //declaring name and bio functions
  setName(name) {
    let newName = { ...this.state.nameAndBio };
    newName.name = name;
    this.setState({nameAndBio: newName});
  }

  setBio(bio) {
    let newBio = { ...this.state.nameAndBio };
    newBio.bio = bio;
    this.setState({nameAndBio: newBio});
  }

  //declaring contact info functions
  setLocation(location) {
    let newLocation = { ...this.state.contactInfo }
    newLocation.location = location;
    this.setState({contactInfo: newLocation})
    console.log(this.state.contactInfo);
  } 

  setPhoneNumber(phoneNumber) {
    let newPhoneNumber = { ...this.state.contactInfo }
    newPhoneNumber.phoneNumber = phoneNumber;
    this.setState({contactInfo: newPhoneNumber})
    console.log(this.state.contactInfo)
  }
  
  setEmail(email) {
    let newEmail = { ...this.state.contactInfo };
    newEmail.email = email;
    this.setState({contactInfo: newEmail})
    console.log(this.state.contactInfo);
  }

  setLinkedIn(linkedIn) {
    let newLinkedIn = { ...this.state.contactInfo }
    newLinkedIn.linkedIn = linkedIn;
    this.setState({contactInfo: newLinkedIn})
    console.log(this.state.contactInfo);
  }

  setGitHub(gitHub) {
    let newGitHub = { ...this.state.contactInfo }
    newGitHub.gitHub = gitHub;
    this.setState({contactInfo: newGitHub})
    console.log(this.state.contactInfo);
  }
  //declaring Experience functions
  setCompanyName(name, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].companyName = name;
    this.setState({ previousExperience: newPreviousExperiences });
  }

  setPositionTitle(title, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].position = title;
    this.setState({ previousExperience: newPreviousExperiences });
  }

  setJobDescription(description, experienceIndex) {
    const newPreviousExperiences = [...this.state.previousExperience];
    newPreviousExperiences[experienceIndex].jobDescription = description;
    this.setState({ previousExperience: newPreviousExperiences });
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

  //declaring education Functions
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
  }

  setEducationEndDate(date, educationIndex) {
    const newPreviousEducation = [...this.state.previousEducation];
    newPreviousEducation[educationIndex].endDate = date;
    this.setState({ previousEducation: newPreviousEducation });
  }

  deleteEducation(education) {
    const newPreviousEducation = [...this.state.previousEducation];
    newPreviousEducation.splice(education, 1);
    this.setState({ previousEducation: newPreviousEducation });
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
  }

  //declaring Skill Functions
  setSkillToAdd(skill) {
    let newSkill = '';
    newSkill += skill;
    this.setState({ skillToAdd: newSkill });
  }

  deleteSkill(skill) {
    const newSkillList = [...this.state.skills];
    newSkillList.splice(skill, 1);
    this.setState({ skills: newSkillList });
  }

  addSkill() {
    let newSkillList = [...this.state.skills, this.state.skillToAdd];
    this.setState({ skills: newSkillList });
  }

  render() {
    return (
      <StyledCvGenerator>
        <StyledGeneralInfo id='general-info'>
          <Avatar />
          <NameAndBio 
            setName={this.setName} 
            setBio={this.setBio}
          />
          <ContactInfo 
            setLocation={this.setLocation}
            setPhoneNumber={this.setPhoneNumber}
            setEmail={this.setEmail}
            setLinkedIn={this.setLinkedIn}
            setGitHub={this.setGitHub}
          />
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
            setSkillToAdd={this.setSkillToAdd}
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
