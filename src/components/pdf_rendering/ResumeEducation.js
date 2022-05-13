import React, { Component } from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import robotoBold from '../pdf_rendering/pdf_fonts/Roboto/Roboto-Bold.ttf';
import robotoRegular from '../pdf_rendering/pdf_fonts/Roboto/Roboto-Regular.ttf';

const educationStyles = StyleSheet.create({
  educationContainer: {
    width: '85%',
    margin: '10px auto 0 auto',
  },
  sectionHeader: {
    width: '100%',
    margin: '8px auto 0 auto',
  },
  sectionHeaderText: {
    color: '#2C041C',
    fontSize: '14',
    marginBottom: '8px',
  },
  sectionUnderline: {
    border: '1px solid orange',
    opacity: '.6',
    width: '100%',
    margin: '0 auto 10px auto',
  },
  educationDetails: {
    margin: '0',
    padding: '0',
  },
  educationHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameAndDegree: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'robotoBold',
    fontSize: '10',
  },
  degree: {
    fontFamily: 'robotoRegular',
    fontSize: '9',
  },
  date: {
    display: 'flex',
    flexDirection: 'row',
  },
  startAndEndDate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '9',
  },
});

Font.register({
  family: 'robotoBold',
  src: robotoBold,
});

Font.register({
  family: 'robotoRegular',
  src: robotoRegular,
});

class ResumeEducation extends Component {
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
      <View style={educationStyles.educationContainer}>
        <View style={educationStyles.sectionHeader}>
          <Text style={educationStyles.sectionHeaderText}>Education</Text>
        </View>
        <View style={educationStyles.sectionUnderline} />
        {this.props.previousEducation.map((education, educationIndex) => {
          return (
            <View
              style={educationStyles.educationDetails}
              key={educationIndex}
              id={educationIndex}
            >
              <View style={educationStyles.educationHeader}>
                <View style={educationStyles.nameAndDegree}>
                  <Text style={educationStyles.name}>
                    {education.collegeName}
                  </Text>
                  <Text style={educationStyles.name}>{'/'}</Text>
                  <Text style={educationStyles.degree}>{education.degree}</Text>
                </View>
                <View style={educationStyles.startAndEndDate}>
                  <Text style={educationStyles.date}>
                    <Text>{this.convertDate(education.startDate)}</Text>
                    <Text> - </Text>
                    <Text>{this.convertDate(education.endDate)}</Text>
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default ResumeEducation;
