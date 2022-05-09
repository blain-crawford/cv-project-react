import React, { Component } from 'react';
import { StyledCvPreview } from '../mui-styles/CvPreviewStyles';

class CvPreview extends Component {
  constructor(props) {
    super(props);
    this.convertDate = this.convertDate.bind(this);
  }

  convertDate(date) {
    if(date) {
      return date.toLocaleDateString()
    }
  }

  render() {
    return (
      <StyledCvPreview>
        <div>
          <div>
            <h1>General Info</h1>
          </div>
          <h1>{this.props.nameAndBio.name}</h1>
          <h3>{this.props.nameAndBio.bio}</h3>
        </div>
        <div>
          <div>
            <h1>Contact Info</h1>
          </div>
          <p>Location: {this.props.contactInfo.location}</p>
          <p>Phone Number: {this.props.contactInfo.phoneNumber}</p>
          <p>Email: {this.props.contactInfo.email}</p>
          <p>LinkedIn: {this.props.contactInfo.linkedIn}</p>
          <p>GitHub: {this.props.contactInfo.gitHub}</p>
          </div>
        <div>
          <div>
            <h1>Previous Work Experience</h1>
          </div>
          <div>
            {this.props.previousExperience.map((experience, experienceIndex) => {
              return (
                <div key={experienceIndex} id={experienceIndex}>
                  <h3>Company: {experience.companyName}</h3>
                  <h4>Position: {experience.position}</h4>
                  <p>Description: {experience.jobDescription}</p>
                  <p>Start Date:{this.convertDate(experience.startDate)}</p>
                  <p>End Date: {this.convertDate(experience.endDate)}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <h1>Education</h1>
          </div>
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
        </div>
        <div>
          <div>
            <h1>Skills</h1>
          </div>
          <div>
            {this.props.skills.map((skill, skillIndex) => {
              return (
                <div id={skillIndex} key={skillIndex}>
                  <p>{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </StyledCvPreview>
    );
  }
};

export default CvPreview;
