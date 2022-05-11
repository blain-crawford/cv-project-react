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
  StyledFrontEndSkills,
  StyledSkillsAndToolsSection,
  StyledExperienceContainer,
  StyledExperienceHeader,
  StyledNameAndPosition,
  StyledStartAndEndDate,
  StyledExperienceList,
  StyledEducationContainer,
  StyledApplicationContainer,
} from '../mui-styles/CvPreviewStyles';

class CvPreview extends Component {
  constructor(props) {
    super(props);
    this.convertDate = this.convertDate.bind(this);
  }

  convertDate(date) {
    if (date) {
      return date.toLocaleDateString();
    } else {
      return 'present';
    }
  }

  render() {
    return (
      <StyledCvPreview>
        <StyledNameAndContactInfo>
          <StyledName>
            <h1>{this.props.nameAndBio.name}</h1>
          </StyledName>
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
          <StyledSectionHeaderText variant='h6'>Skills</StyledSectionHeaderText>
        </StyledSectionHeader>
        <StyledSectionUnderline />
        <StyledSkillsAndToolsSection>
          <StyledSkillsContainer>
            <StyledFrontEndSkills>
              <p style={{ fontWeight: 'bold', margin: '0px 3px 0px 3px' }}>
                Front end:{' '}
              </p>
              {this.props.skills.map((skill, skillIndex) => {
                return (
                  <div id={skillIndex} key={skillIndex}>
                    <p style={{ margin: '0px 3px 0px 3px' }}>{skill}</p>
                  </div>
                );
              })}
            </StyledFrontEndSkills>
          </StyledSkillsContainer>
          <StyledSkillsContainer>
            <StyledFrontEndSkills>
              <p style={{ fontWeight: 'bold', margin: '0px 3px 0px 3px' }}>
                Developer Tools:{' '}
              </p>
              {this.props.developerTools.map(
                (developerTool, developerToolIndex) => {
                  return (
                    <div id={developerToolIndex} key={developerToolIndex}>
                      <p style={{ margin: '0px 3px 0px 3px' }}>
                        {developerTool}
                      </p>
                    </div>
                  );
                },
              )}
            </StyledFrontEndSkills>
          </StyledSkillsContainer>
        </StyledSkillsAndToolsSection>
        <StyledSectionHeader>
          <StyledSectionHeaderText variant='h6'>
            Software Applications
          </StyledSectionHeaderText>
        </StyledSectionHeader>
        <StyledSectionUnderline />
        <div style={{ marginTop: '10px' }}>
          {this.props.applicationList.map((application, applicationIndex) => {
            return (
              <StyledApplicationContainer
                key={applicationIndex}
                id={applicationIndex}
              >
                <StyledNameAndPosition style={{ padding: '0' }}>
                  <p style={{ margin: '0px 3px 0px 3px' }}>
                    <span style={{ fontWeight: 'bold' }}>
                      {application.applicationName} -{' '}
                    </span>
                    {application.toolsUsed}
                  </p>
                </StyledNameAndPosition>
                <StyledNameAndPosition style={{ padding: '0' }}>
                  <p style={{ margin: '0px 3px 0px 3px', fontStyle: 'italic' }}>
                    {application.appDescription}
                  </p>
                </StyledNameAndPosition>
                <StyledExperienceList>
                  {application.tasksAccomplished
                    .split(', ')
                    .map((task, taskIndex) => {
                      return (
                        <li id={taskIndex} key={taskIndex}>
                          {task}
                        </li>
                      );
                    })}
                </StyledExperienceList>
              </StyledApplicationContainer>
            );
          })}
        </div>
        <StyledSectionHeader>
          <StyledSectionHeaderText variant='h6'>
            Experience
          </StyledSectionHeaderText>
        </StyledSectionHeader>
        <StyledSectionUnderline />
        <div>
          {this.props.previousExperience.map((experience, experienceIndex) => {
            return (
              <StyledExperienceContainer
                key={experienceIndex}
                id={experienceIndex}
              >
                <StyledExperienceHeader>
                  <StyledNameAndPosition>
                    <h3 style={{ margin: '0px 3px 0px 3px' }}>
                      {experience.companyName}
                    </h3>{' '}
                    /
                    <h4 style={{ margin: '0px 3px 0px 3px' }}>
                      {experience.position}
                    </h4>
                  </StyledNameAndPosition>
                  <StyledStartAndEndDate>
                    <p style={{ margin: '0px 3px 0px 3px' }}>
                      {this.convertDate(experience.startDate)} -
                      {this.convertDate(experience.endDate)}
                    </p>
                  </StyledStartAndEndDate>
                </StyledExperienceHeader>
                <StyledExperienceList>
                  {experience.jobDescription
                    .split('. ')
                    .map((sentence, sentenceIndex) => {
                      return (
                        <li id={sentenceIndex} key={sentenceIndex}>
                          {sentence}
                        </li>
                      );
                    })}
                </StyledExperienceList>
                <div>
                  <ul></ul>
                </div>
              </StyledExperienceContainer>
            );
          })}
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
              <StyledEducationContainer
                key={educationIndex}
                id={educationIndex}
              >
                <StyledNameAndPosition>
                  <h4 style={{ margin: '0' }}>
                    {education.collegeName} - {education.degree}
                  </h4>
                </StyledNameAndPosition>
                <StyledStartAndEndDate>
                  <p style={{ margin: '0' }}>
                    {this.convertDate(education.startDate)} -{' '}
                    {this.convertDate(education.endDate)}
                  </p>
                </StyledStartAndEndDate>
              </StyledEducationContainer>
            );
          })}
        </div>
      </StyledCvPreview>
    );
  }
}

export default CvPreview;
