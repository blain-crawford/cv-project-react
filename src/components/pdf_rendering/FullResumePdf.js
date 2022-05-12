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
import ResumePreviousExperience from './ResumePreviousExperience';
import ResumeEducation from './ResumeEducation';

const styles = StyleSheet.create({
  pageBottom: {
    borderTop: '.25px solid #2C041C',
    borderBottom: '.25px solid #2C041C',
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
      return 'present';
    }
  }
  render() {
    return (
      <Document>
        <Page size='A4' style={styles.pageBottom}>
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
            <ResumePreviousExperience
              previousExperience={this.props.previousExperience}
            />
            <ResumeEducation previousEducation={this.props.previousEducation} />
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
