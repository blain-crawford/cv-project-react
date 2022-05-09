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
