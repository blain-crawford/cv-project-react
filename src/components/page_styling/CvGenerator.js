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
import CameraAltIcon from '@mui/icons-material/CameraAlt';

class CvGenerator extends Component {
  constructor(props) {
    super(props);

    //functionality for Avatar
    // this.setAvatarImage = this.setAvatarImage.bind(this);
    // this.setImagePlaceHolder = this.setImagePlaceHolder.bind(this);

    //functionality for name and bio
    // this.setName = this.setName.bind(this);
    // this.setBio = this.setBio.bind(this);

    //functionality for contact info
    // this.setLocation = this.setLocation.bind(this);
    // this.setPhoneNumber = this.setPhoneNumber.bind(this);
    // this.setEmail = this.setEmail.bind(this);
    // this.setLinkedIn = this.setLinkedIn.bind(this);
    // this.setGitHub = this.setGitHub.bind(this);

    //functionality for experience form
    // this.setCompanyName = this.setCompanyName.bind(this);
    // this.setPositionTitle = this.setPositionTitle.bind(this);
    // this.setJobDescription = this.setJobDescription.bind(this);
    // this.setExperienceStartDate = this.setExperienceStartDate.bind(this);
    // this.setExperienceEndDate = this.setExperienceEndDate.bind(this);
    // this.deleteExperience = this.deleteExperience.bind(this);
    // this.addExperience = this.addExperience.bind(this);

    //functionality for education form
    // this.setCollegeName = this.setCollegeName.bind(this);
    // this.setDegree = this.setDegree.bind(this);
    // this.setEducationStartDate = this.setEducationStartDate.bind(this);
    // this.setEducationEndDate = this.setEducationEndDate.bind(this);
    // this.deleteEducation = this.deleteEducation.bind(this);
    // this.addEducation = this.addEducation.bind(this);

    //functionality for skill form
    // this.setSkillToAdd = this.setSkillToAdd.bind(this);
    // this.addSkill = this.addSkill.bind(this);
    // this.deleteSkill = this.deleteSkill.bind(this);
    // this.state = {
      // avatarImage: '',
      // imagePlaceHolder: <CameraAltIcon />,
      // nameAndBio: {
      //   name: '',
      //   bio: '',
      // },
      // contactInfo: {
      //   location: '',
      //   phoneNumber: '',
      //   email: '',
      //   linkedIn: '',
      //   gitHub: '',
      // },
      // previousExperience: [],
      // previousEducation: [],
    //   skillToAdd: '',
    //   skills: [],
    // };
  }

  //declaring Avatar functions
  // setAvatarImage = ({ target }) => {
  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(target.files[0]);
  //   fileReader.onload = (e) => {
  //     this.setState({ avatarImage: e.target.result });
  //   };
  //   this.setImagePlaceHolder();
  // };

  // setImagePlaceHolder() {
  //   const newImagePlaceHolder = <></>;
  //   this.setState({ imagePlaceHolder: newImagePlaceHolder });
  // }

  //declaring name and bio functions
  // setName(name) {
  //   let newName = { ...this.state.nameAndBio };
  //   newName.name = name;
  //   this.setState({ nameAndBio: newName });
  // }

  // setBio(bio) {
  //   let newBio = { ...this.state.nameAndBio };
  //   newBio.bio = bio;
  //   this.setState({ nameAndBio: newBio });
  // }

  //declaring contact info functions
  // setLocation(location) {
  //   let newLocation = { ...this.state.contactInfo };
  //   newLocation.location = location;
  //   this.setState({ contactInfo: newLocation });
  // }

  // setPhoneNumber(phoneNumber) {
  //   let newPhoneNumber = { ...this.state.contactInfo };
  //   newPhoneNumber.phoneNumber = phoneNumber;
  //   this.setState({ contactInfo: newPhoneNumber });
  // }

  // setEmail(email) {
  //   let newEmail = { ...this.state.contactInfo };
  //   newEmail.email = email;
  //   this.setState({ contactInfo: newEmail });
  // }

  // setLinkedIn(linkedIn) {
  //   let newLinkedIn = { ...this.state.contactInfo };
  //   newLinkedIn.linkedIn = linkedIn;
  //   this.setState({ contactInfo: newLinkedIn });
  // }

  // setGitHub(gitHub) {
  //   let newGitHub = { ...this.state.contactInfo };
  //   newGitHub.gitHub = gitHub;
  //   this.setState({ contactInfo: newGitHub });
  // }

  //declaring Experience functions
  // setCompanyName(name, experienceIndex) {
  //   const newPreviousExperiences = [...this.state.previousExperience];
  //   newPreviousExperiences[experienceIndex].companyName = name;
  //   this.setState({ previousExperience: newPreviousExperiences });
  // }

  // setPositionTitle(title, experienceIndex) {
  //   const newPreviousExperiences = [...this.state.previousExperience];
  //   newPreviousExperiences[experienceIndex].position = title;
  //   this.setState({ previousExperience: newPreviousExperiences });
  // }

  // setJobDescription(description, experienceIndex) {
  //   const newPreviousExperiences = [...this.state.previousExperience];
  //   newPreviousExperiences[experienceIndex].jobDescription = description;
  //   this.setState({ previousExperience: newPreviousExperiences });
  // }

  // setCompanyName(name, experienceIndex) {
  //   const newPreviousExperiences = [...this.state.previousExperience];
  //   newPreviousExperiences[experienceIndex].companyName = name;
  //   this.setState({ previousExperience: newPreviousExperiences });
  // }

  // setExperienceStartDate(startDate, experienceIndex) {
  //   const newPreviousExperiences = [...this.state.previousExperience];
  //   newPreviousExperiences[experienceIndex].startDate = startDate;
  //   this.setState({ previousExperience: newPreviousExperiences });
  // }

  // setExperienceEndDate(endDate, experienceIndex) {
  //   const newPreviousExperiences = [...this.state.previousExperience];
  //   newPreviousExperiences[experienceIndex].endDate = endDate;
  //   this.setState({ previousExperience: newPreviousExperiences });
  // }

  // deleteExperience(experience) {
  //   const newPreviousExperiences = [...this.state.previousExperience];
  //   newPreviousExperiences.splice(experience, 1);
  //   this.setState({ previousExperience: newPreviousExperiences });
  // }

  // addExperience() {
  //   const newExperience = [
  //     ...this.state.previousExperience,
  //     {
  //       companyName: '',
  //       position: '',
  //       jobDescription: '',
  //       startDate: '',
  //       endDate: '',
  //     },
  //   ];
  //   this.setState({
  //     previousExperience: newExperience,
  //   });
  // }

  //declaring education Functions
  // setCollegeName(name, educationIndex) {
  //   const newPreviousEducation = [...this.state.previousEducation];
  //   newPreviousEducation[educationIndex].collegeName = name;
  //   this.setState({ previousEducation: newPreviousEducation });
  // }

  // setDegree(degree, educationIndex) {
  //   const newPreviousEducation = [...this.state.previousEducation];
  //   newPreviousEducation[educationIndex].degree = degree;
  //   this.setState({ previousEducation: newPreviousEducation });
  // }

  // setEducationStartDate(date, educationIndex) {
  //   const newPreviousEducation = [...this.state.previousEducation];
  //   newPreviousEducation[educationIndex].startDate = date;
  //   this.setState({ previousEducation: newPreviousEducation });
  // }

  // setEducationEndDate(date, educationIndex) {
  //   const newPreviousEducation = [...this.state.previousEducation];
  //   newPreviousEducation[educationIndex].endDate = date;
  //   this.setState({ previousEducation: newPreviousEducation });
  // }

  // deleteEducation(education) {
  //   const newPreviousEducation = [...this.state.previousEducation];
  //   newPreviousEducation.splice(education, 1);
  //   this.setState({ previousEducation: newPreviousEducation });
  // }

  // addEducation() {
  //   const newEducation = [
  //     ...this.state.previousEducation,
  //     {
  //       collegeName: '',
  //       degree: '',
  //       startDate: '',
  //       endDate: '',
  //     },
  //   ];
  //   this.setState({
  //     previousEducation: newEducation,
  //   });
  // }

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
          <Avatar
            avatarAlt={this.props.avatarAlt}
            imageSrc={this.props.imageSrc}
            setAvatarImage={this.props.setAvatarImage}
            imagePlaceHolder={this.props.imagePlaceHolder}
          />
          <NameAndBio 
            name={this.props.name}
            bio={this.props.bio}
            setName={this.props.setName} 
            setBio={this.props.setBio} 
          />
          <ContactInfo
            setLocation={this.props.setLocation}
            location={this.props.location}
            setPhoneNumber={this.props.setPhoneNumber}
            phoneNumber={this.props.phoneNumber}
            setEmail={this.props.setEmail}
            email={this.props.email}
            setLinkedIn={this.props.setLinkedIn}
            linkedIn={this.props.linkedIn}
            setGitHub={this.props.setGitHub}
            gitHub={this.props.gitHub}
            
          />
        </StyledGeneralInfo>
        <StyledExperienceContainer>
          <Experience
            addExperience={this.props.addExperience}
            previousExperience={this.props.previousExperience}
            setExperienceStartDate={this.props.setExperienceStartDate}
            setExperienceEndDate={this.props.setExperienceEndDate}
            setCompanyName={this.props.setCompanyName}
            setPositionTitle={this.props.setPositionTitle}
            setJobDescription={this.props.setJobDescription}
            deleteExperience={this.props.deleteExperience}
          />
        </StyledExperienceContainer>
        <StyledExperienceContainer>
          <Education
            setCollegeName={this.props.setCollegeName}
            setDegree={this.props.setDegree}
            setEducationStartDate={this.props.setEducationStartDate}
            setEducationEndDate={this.props.setEducationEndDate}
            deleteEducation={this.props.deleteEducation}
            addEducation={this.props.addEducation}
            previousEducation={this.props.previousEducation}
          />
        </StyledExperienceContainer>
        <StyledExperienceContainer>
          <Skills
            setSkillToAdd={this.props.setSkillToAdd}
            addSkill={this.props.addSkill}
            skills={this.props.skills}
            deleteSkill={this.props.deleteSkill}
          />
        </StyledExperienceContainer>
      </StyledCvGenerator>
    );
  }
}

export default CvGenerator;
