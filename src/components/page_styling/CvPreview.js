import { fontWeight } from '@mui/system';
import React, { Component } from 'react';
import {
  StyledCvPreview,
  StyledNameAndContactInfo,
  StyledName,
  StyledContactInfo,
  StyledInfoItem,
  StyledLink,
  StyledSectionHeader,
  StyledSectionHeaderText,
  StyledSectionUnderline,
  StyledSkillsContainer,
  StyledFrontEndSkills
} from '../mui-styles/CvPreviewStyles';

class CvPreview extends Component {
  constructor(props) {
    super(props);
    this.convertDate = this.convertDate.bind(this);
  }

  convertDate(date) {
    if (date) {
      return date.toLocaleDateString();
    }
  }

  render() {
    return (
      <StyledCvPreview>
        <StyledNameAndContactInfo>
          <StyledName>
            <h1>{this.props.nameAndBio.name}</h1>
          </StyledName>
          {/* <h3>{this.props.nameAndBio.bio}</h3> */}
          {/* <div>
            <h1>Contact Info</h1>
          </div> */}
          <StyledContactInfo>
            <StyledInfoItem variant='p'>
              {this.props.contactInfo.location}
            </StyledInfoItem>
            <StyledInfoItem variant='p'> | </StyledInfoItem>
            <StyledInfoItem variant='p'>
              {this.props.contactInfo.phoneNumber}
            </StyledInfoItem>
            <StyledInfoItem variant='p'> | </StyledInfoItem>
            <StyledInfoItem variant='p'>
              {this.props.contactInfo.email}
            </StyledInfoItem>
            <StyledInfoItem variant='p'> | </StyledInfoItem>
          </StyledContactInfo>
          <StyledContactInfo>
            <StyledLink
              href={`//${this.props.contactInfo.gitHub}`}
              target='_blank'
            >
              {this.props.contactInfo.gitHub}
            </StyledLink>
            <StyledInfoItem variant='p'> | </StyledInfoItem>
            <StyledLink
              href={`//${this.props.contactInfo.linkedIn}`}
              target='_blank'
            >
              {this.props.contactInfo.linkedIn}
            </StyledLink>
          </StyledContactInfo>
        </StyledNameAndContactInfo>
        <StyledSectionHeader>
          <StyledSectionHeaderText variant='h6'>
            Skills
          </StyledSectionHeaderText>
        </StyledSectionHeader>
        <StyledSectionUnderline />
        <StyledSkillsContainer>
          <StyledFrontEndSkills>
            <p style={{fontWeight: 'bold'}}>Front end: </p>
            {this.props.skills.map((skill, skillIndex) => {
              return (
                <div 
                  id={skillIndex} 
                  key={skillIndex} 
                  style={{marginLeft: '3px'}}
                >
                  <p>{skill}</p>
                </div>
              );
            })}
          </StyledFrontEndSkills>
        </StyledSkillsContainer>
          <StyledSectionHeader>
            <StyledSectionHeaderText variant='h6'>
              Experience
            </StyledSectionHeaderText>
          </StyledSectionHeader>
          <StyledSectionUnderline />
          <div>
            {this.props.previousExperience.map(
              (experience, experienceIndex) => {
                return (
                  <div key={experienceIndex} id={experienceIndex}>
                    <h3>Company: {experience.companyName}</h3>
                    <h4>Position: {experience.position}</h4>
                    <p>Description: {experience.jobDescription}</p>
                    <p>Start Date:{this.convertDate(experience.startDate)}</p>
                    <p>End Date: {this.convertDate(experience.endDate)}</p>
                  </div>
                );
              },
            )}
          </div>
        <StyledSectionHeader>
          <StyledSectionHeaderText variant='h6'>
            Education
          </StyledSectionHeaderText>
        </StyledSectionHeader>
        <StyledSectionUnderline />
          <div>
            {this.props.previousEducation.map((education, educationIndex) => {
              return (
                <div key={educationIndex} id={educationIndex}>
                  <h3>College: {education.collegeName}</h3>
                  <h4>Degree: {education.degree}</h4>
                  <p>Start Date:{this.convertDate(education.startDate)}</p>
                  <p>End Date: {this.convertDate(education.endDate)}</p>
                </div>
              );
            })}
          </div>
      </StyledCvPreview>
    );
  }
}

export default CvPreview;
