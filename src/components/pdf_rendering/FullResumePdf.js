import React, { Component } from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from '@react-pdf/renderer';
import ResumeGeneralInfo from './ResumeGeneralInfo'; 
import ResumeSkillsAndTools from './ResumeSkillsAndTools';
import ResumeSoftwareApplications from './ResumeSoftwareApplications';

const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#e4e4e4',
    textTransform: 'uppercase',
    fontFamily: 'Oswald',
  },
  body: {
    flexGrow: 1,
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  block: {
    flexGrow: 1,
  },
  text: {
    width: '60%',
    margin: 10,
    fontFamily: 'Oswald',
    textAlign: 'justify',
  },
  fill1: {
    width: '40%',
    backgroundColor: '#e14427',
  },
  fill2: {
    flexGrow: 2,
    backgroundColor: '#e6672d',
  },
  fill3: {
    flexGrow: 2,
    backgroundColor: '#e78632',
  },
  fill4: {
    flexGrow: 2,
    backgroundColor: '#e29e37',
  },
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

class FullResumePdf extends Component {
  constructor(props) {
    super(props);
    this.convertDate = this.convertDate.bind(this);
  }

  convertDate(date) {
    if (date) {
      return date.toLocaleDateString();
    } else {
      return 'present'
    }
  }
  render() {
    return (
      <Document>
        <Page size='A4'>
          <View>
            <ResumeGeneralInfo 
              name={this.props.name}
              contactInfo={this.props.contactInfo}
            />
            <ResumeSkillsAndTools 
              skills={this.props.skills}
              developerTools={this.props.developerTools}
            />
            <ResumeSoftwareApplications 
              applicationList={this.props.applicationList}
            />
            <View style={styles.row}>
              <Text style={styles.text}>
                {this.props.previousExperience.map(
                  (experience, experienceIndex) => {
                    return (
                      <div key={experienceIndex} id={experienceIndex}>
                        <h3>Company: {experience.companyName}</h3>
                        <h4>Position: {experience.position}</h4>
                        <h5>Description: {experience.jobDescription}</h5>
                        <p>
                          Start Date: {this.convertDate(experience.startDate)}
                        </p>
                        <p>End Date: {this.convertDate(experience.endDate)}</p>
                      </div>
                    );
                  },
                )}
              </Text>
              <View style={styles.fill3} />
              <Text style={styles.text}>
                {this.props.previousEducation.map(
                  (education, educationIndex) => {
                    return (
                      <div key={educationIndex} id={educationIndex}>
                        <h3>College: {education.college}</h3>
                        <h4>Degree: {education.degree}</h4>
                        <p>
                          Start Date: {this.convertDate(education.startDate)}
                        </p>
                        <p>End Date: {this.convertDate(education.endDate)}</p>
                      </div>
                    );
                  },
                )}
              </Text>
              
            </View>
          </View>
          <Text
            style={styles.text}
            render={({ pageNumber, totalPages }) => {
              `${pageNumber / totalPages}`;
            }}
          />
        </Page>
      </Document>
    );
  }
}

export default FullResumePdf;
