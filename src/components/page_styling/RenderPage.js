import React, { Component } from 'react';
import '../../styles/styles.css';
import Header from './Header';
import RightSideBar from './RightSideBar';
import CvGenerator from './CvGenerator';
import CvPreview from './CvPreview';
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


    //functionality for skill form
    this.setSkillToAdd = this.setSkillToAdd.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);

    //functionality for developer tools form
    this.setDeveloperToolToAdd = this.setDeveloperToolToAdd.bind(this);
    this.addDeveloperTool = this.addDeveloperTool.bind(this);
    this.deleteDeveloperTool = this.deleteDeveloperTool.bind(this)

    //functionality for software applications form
    this.addApplication = this.addApplication.bind(this);
    this.setApplicationName = this.setApplicationName.bind(this);
    this.setToolsUsed = this.setToolsUsed.bind(this);
    this.setAppDescription = this.setAppDescription.bind(this);
    this.setTasksAccomplished = this.setTasksAccomplished.bind(this);
    this.deleteApplication = this.deleteApplication.bind(this);

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
      skillToAdd: '',
      skills: [],
      developerToolToAdd: '',
      developerTools: [],
      applicationList: [],
      previousExperience: [],
      previousEducation: []
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
  }

  setPhoneNumber(phoneNumber) {
    let newPhoneNumber = { ...this.state.contactInfo };
    newPhoneNumber.phoneNumber = phoneNumber;
    this.setState({ contactInfo: newPhoneNumber });
  }

  setEmail(email) {
    let newEmail = { ...this.state.contactInfo };
    newEmail.email = email;
    this.setState({ contactInfo: newEmail });
  }

  setLinkedIn(linkedIn) {
    let newLinkedIn = { ...this.state.contactInfo };
    newLinkedIn.linkedIn = linkedIn;
    this.setState({ contactInfo: newLinkedIn });
  }

  setGitHub(gitHub) {
    let newGitHub = { ...this.state.contactInfo };
    newGitHub.gitHub = gitHub;
    this.setState({ contactInfo: newGitHub });
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

  //declaring developer tool functions
  setDeveloperToolToAdd(tool) {
    let newDeveloperTool = '';
    newDeveloperTool += tool;
    this.setState({developerToolToAdd: newDeveloperTool});
  }

  deleteDeveloperTool(tool) {
    let newDeveloperToolList = [...this.state.developerTools];
    newDeveloperToolList.splice(tool, 1);
    this.setState({developerTools: newDeveloperToolList})
  }

  addDeveloperTool() {
    let newDeveloperToolList = [...this.state.developerTools, this.state.developerToolToAdd];
    this.setState({developerTools: newDeveloperToolList});
  }

  //declaring Software Applications functions
  addApplication() {
    const newApplication = [
      ...this.state.applicationList, 
      {
        applicationName: '',
        toolsUsed: '',
        appDescription: '',
        tasksAccomplished: ''
      }
    ]
    console.log(this.state.applicationList);
    this.setState({applicationList: newApplication})
  }

  setApplicationName(name, applicationIndex) {
    const newApplicationList = [...this.state.applicationList];
    newApplicationList[applicationIndex].applicationName = name;
    this.setState({applicationList: newApplicationList})
  }

  setToolsUsed(tools, applicationIndex) {
    const newApplicationList = [...this.state.applicationList];
    newApplicationList[applicationIndex].toolsUsed = tools;
    this.setState({applicationList: newApplicationList});
  }

  setAppDescription(description, applicationIndex) {
    const newApplicationList = [...this.state.applicationList];
    newApplicationList[applicationIndex].appDescription = description;
    this.setState({applicationList: newApplicationList});
  }

  setTasksAccomplished(tasks, applicationIndex) {
    const newApplicationList = [...this.state.applicationList];
    newApplicationList[applicationIndex].tasksAccomplished = tasks;
    this.setState({applicationList: newApplicationList});
    console.log(this.state.applicationList);
  }

  deleteApplication(index) {
    const newApplicationList = [...this.state.applicationList]
    newApplicationList.splice(index, 1);
    this.setState({applicationList: newApplicationList});
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


              //passing to skills component
              skills={this.state.skills}
              setSkillToAdd={this.setSkillToAdd}
              addSkill={this.addSkill}
              deleteSkill={this.deleteSkill}

              //passing to developer tools component
              developerTools={this.state.developerTools}
              setDeveloperToolToAdd={this.setDeveloperToolToAdd}
              addDeveloperTool={this.addDeveloperTool}
              deleteDeveloperTool={this.deleteDeveloperTool}

              //passing to software application component
              applicationList={this.state.applicationList}
              addApplication={this.addApplication}
              setApplicationName={this.setApplicationName}
              setToolsUsed={this.setToolsUsed}
              setAppDescription={this.setAppDescription}
              setTasksAccomplished={this.setTasksAccomplished}
              deleteApplication={this.deleteApplication}

              //passing to experience component
              previousExperience={this.state.previousExperience}
              addExperience={this.addExperience}
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

            />
            <RightSideBar
              changeMode={this.changeMode}
              mode={this.state.mode}

              //sending name and bio state to RightSideBar
              name={this.state.nameAndBio.name}
              bio={this.state.nameAndBio.bio}
              contactInfo={this.state.contactInfo}
              skills={this.state.skills}
              developerTools={this.state.developerTools}
              applicationList={this.state.applicationList}
              applicationList={this.state.applicationList}
              previousExperience={this.state.previousExperience}
              previousEducation={this.state.previousEducation}
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
            <CvPreview
              nameAndBio={this.state.nameAndBio}
              contactInfo={this.state.contactInfo}
              skills={this.state.skills}
              developerTools={this.state.developerTools}
              applicationList={this.state.applicationList}
              previousExperience={this.state.previousExperience}
              previousEducation={this.state.previousEducation}
            />
            <RightSideBar
              changeMode={this.changeMode}
              mode={this.state.mode}

              //sending name and bio state to RightSideBar
              name={this.state.nameAndBio.name}
              bio={this.state.nameAndBio.bio}
              contactInfo={this.state.contactInfo}
              skills={this.state.skills}
              developerTools={this.state.developerTools}
              applicationList={this.state.applicationList}
              previousExperience={this.state.previousExperience}
              previousEducation={this.state.previousEducation}
            />
          </StyledMainPage>
        </div>
      );
    }
  }
}

export default RenderPage;
