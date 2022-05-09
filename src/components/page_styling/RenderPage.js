import React, { Component } from 'react';
import '../../styles/styles.css';
import Header from './Header';
import RightSideBar from './RightSideBar';
import CvGenerator from './CvGenerator';
import { StyledMainPage } from '../mui-styles/mainPageStyles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

class RenderPage extends Component {
  constructor(props) {
    super(props);

    //functionality for Avatar
    this.setAvatarImage = this.setAvatarImage.bind(this);
    this.setImagePlaceHolder = this.setImagePlaceHolder.bind(this);

    //functionality for name and bio
    this.setName = this.setName.bind(this);
    this.setBio = this.setBio.bind(this);

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

    //functionality for changing between generate cv and view cv
    this.changeMode = this.changeMode.bind(this);

    this.state = {
      mode: 'generate',
      avatarImage: '',
      imagePlaceHolder: <CameraAltIcon />,
      nameAndBio: {
        name: '',
        bio: '',
      },
      contactInfo: {
        location: '',
        phoneNumber: '',
        email: '',
        linkedIn: '',
        gitHub: '',
      },
      previousExperience: [],
      previousEducation: [],
      skillToAdd: '',
      skills: [],
    };
  }

  //declaring Avatar functions
  setAvatarImage = ({ target }) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      this.setState({ avatarImage: e.target.result });
    };
    this.setImagePlaceHolder();
  };

  setImagePlaceHolder() {
    const newImagePlaceHolder = <></>;
    this.setState({ imagePlaceHolder: newImagePlaceHolder });
  }

  //declaring name and bio functions
  setName(name) {
    let newName = { ...this.state.nameAndBio };
    newName.name = name;
    this.setState({ nameAndBio: newName });
  }

  setBio(bio) {
    let newBio = { ...this.state.nameAndBio };
    newBio.bio = bio;
    this.setState({ nameAndBio: newBio });
  }

  //declaring contact info functions
  setLocation(location) {
    let newLocation = { ...this.state.contactInfo };
    newLocation.location = location;
    this.setState({ contactInfo: newLocation });
    console.log(this.state.contactInfo);
  }

  setPhoneNumber(phoneNumber) {
    let newPhoneNumber = { ...this.state.contactInfo };
    newPhoneNumber.phoneNumber = phoneNumber;
    this.setState({ contactInfo: newPhoneNumber });
    console.log(this.state.contactInfo);
  }

  setEmail(email) {
    let newEmail = { ...this.state.contactInfo };
    newEmail.email = email;
    this.setState({ contactInfo: newEmail });
    console.log(this.state.contactInfo);
  }

  setLinkedIn(linkedIn) {
    let newLinkedIn = { ...this.state.contactInfo };
    newLinkedIn.linkedIn = linkedIn;
    this.setState({ contactInfo: newLinkedIn });
    console.log(this.state.contactInfo);
  }

  setGitHub(gitHub) {
    let newGitHub = { ...this.state.contactInfo };
    newGitHub.gitHub = gitHub;
    this.setState({ contactInfo: newGitHub });
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
    console.log(this.state.previousEducation);
  }

  setDegree(degree, educationIndex) {
    const newPreviousEducation = [...this.state.previousEducation];
    newPreviousEducation[educationIndex].degree = degree;
    this.setState({ previousEducation: newPreviousEducation });
    console.log(this.state.previousEducation);
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

  //declaring view switching functions
  changeMode() {
    if (this.state.mode === 'generate') {
      this.setState({ mode: 'preview' });
    } else {
      this.setState({ mode: 'generate' });
    }
    console.log(this.state);
  }

  render() {
    if (this.state.mode === 'generate') {
      return (
        <div>
          <div id='page-header'>
            <Header />
          </div>
          <StyledMainPage id='main-page'>
            <CvGenerator
              //passing to avatar component
              avatarAlt={this.state.nameAndBio}
              imageSrc={this.state.avatarImage}
              setAvatarImage={this.setAvatarImage}
              imagePlaceHolder={this.state.imagePlaceHolder}

              //passing to name and bio component
              name={this.state.nameAndBio.name}
              bio={this.state.nameAndBio.bio}
              setName={this.setName}
              setBio={this.setBio}

              //passing to contact info component
              setLocation={this.setLocation}
              location={this.state.contactInfo.location}
              setPhoneNumber={this.setPhoneNumber}
              phoneNumber={this.state.contactInfo.phoneNumber}
              setEmail={this.setEmail}
              email={this.state.contactInfo.email}
              setLinkedIn={this.setLinkedIn}
              linkedIn={this.state.contactInfo.linkedIn}
              setGitHub={this.setGitHub}
              gitHub={this.state.contactInfo.gitHub}

              //passing to experience component
              addExperience={this.addExperience}
              previousExperience={this.state.previousExperience}
              setExperienceStartDate={this.setExperienceStartDate}
              setExperienceEndDate={this.setExperienceEndDate}
              setCompanyName={this.setCompanyName}
              setPositionTitle={this.setPositionTitle}
              setJobDescription={this.setJobDescription}
              deleteExperience={this.deleteExperience}

              //passing to education Component
              setCollegeName={this.setCollegeName}
              setDegree={this.setDegree}
              setEducationStartDate={this.setEducationStartDate}
              setEducationEndDate={this.setEducationEndDate}
              deleteEducation={this.deleteEducation}
              addEducation={this.addEducation}
              previousEducation={this.state.previousEducation}

              //passing to skills component
              setSkillToAdd={this.setSkillToAdd}
              addSkill={this.addSkill}
              skills={this.state.skills}
              deleteSkill={this.deleteSkill}
            />
            <RightSideBar
              changeMode={this.changeMode}
              mode={this.state.mode}
              previouosExperience={this.state.previousExperience}
              //sending name and bio state to RightSideBar
              name={this.state.nameAndBio.name}
              bio={this.state.nameAndBio.bio}
              contactInfo={this.state.contactInfo}
              previousExperience={this.state.previousExperience}
              previousEducation={this.state.previousEducation}
              skills={this.state.skills}
            />
          </StyledMainPage>
        </div>
      );
    } else if (this.state.mode === 'preview') {
      return (
        <div>
          <div id='page-header'>
            <Header />
          </div>
          <StyledMainPage id='main-page'>
            <div>
              <h1>{this.state.nameAndBio.name}</h1>
              <h3>{this.state.nameAndBio.bio}</h3>
              <p>{this.state.contactInfo.location}</p>
              <p>Phone Number: {this.state.contactInfo.phoneNumber}</p>
              <p>Email: {this.state.contactInfo.email}</p>
              <p>LinkedIn: {this.state.contactInfo.linkedIn}</p>
              <p>GitHub: {this.state.contactInfo.gitHub}</p>
              <div>
                {this.state.previousExperience.map(
                  (experience, experienceIndex) => {
                    return (
                      <div key={experienceIndex} id={experienceIndex}>
                        <h3>Company: {experience.companyName}</h3>
                        <h4>Position: {experience.position}</h4>
                        <p>Description: {experience.jobDescription}</p>
                        <p>
                          Start Date:{experience.startDate.toLocaleDateString()}
                        </p>
                        <p>
                          End Date: {experience.endDate.toLocaleDateString()}
                        </p>
                      </div>
                    );
                  },
                )}
              </div>
              <div>
                {this.state.previousEducation.map(
                  (education, educationIndex) => {
                    return (
                      <div key={educationIndex} id={educationIndex}>
                        <h3>College: {education.collegeName}</h3>
                        <h4>Degree: {education.degree}</h4>
                        <p>
                          Start Date:{education.startDate.toLocaleDateString()}
                        </p>
                        <p>
                          End Date: {education.endDate.toLocaleDateString()}
                        </p>
                      </div>
                    );
                  },
                )}
              </div>
              <div>
              {this.state.skills.map(
                  (skill, skillIndex) => {
                    return (
                      <div
                        id={skillIndex}
                        key={skillIndex}
                      >
                        <p>{skill}</p>
                      </div>
                    )
                  },
                )}
              </div>
            </div>
            <RightSideBar
              changeMode={this.changeMode}
              mode={this.state.mode}
              //sending name and bio state to RightSideBar
              name={this.state.nameAndBio.name}
              bio={this.state.nameAndBio.bio}
              contactInfo={this.state.contactInfo}
              previousExperience={this.state.previousExperience}
              previousEducation={this.state.previousEducation}
              skills={this.state.skills}
            />
          </StyledMainPage>
        </div>
      );
    }
  }
}

export default RenderPage;
