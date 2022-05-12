import React, { Component } from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { fontSize } from '@mui/system';
import robotoBold from '/Users/blaincrawford/Desktop/odinProj/cv-project-react/src/components/pdf_rendering/pdf_fonts/Roboto/Roboto-Bold.ttf'
import robotoThin from '../pdf_rendering/pdf_fonts/Roboto/Roboto-Regular.ttf'
const experienceStyles = StyleSheet.create({
  experienceContainer: {
    width: '85%',
    margin: '3px auto 0 auto',
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
    margin: '0 auto',
  },
  experienceDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto',
    padding: '0px',
  },
  experienceHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottom: '1px solid #2C041C'
  },
  nameAndPosition: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    alignItems: 'center'
  },
  name: {
    margin: '0px 3px 0px 3px',
    fontFamily: 'robotoBold',
    fontSize: '11',
  },
  position: {
    margin: '0px 3px 0px 3px',
    fontFamily: 'robotoRegular',
    fontSize: '10'
  },
  date: {
    display: 'flex', 
    flexDirection: 'row',
    margin: '0px 3px 0px 3px',
  },
  startAndEndDate: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    alignItems: 'center',
    fontSize: '10'
  },
  experienceList: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2px auto 0 0',
    paddingLeft: '20px',
    fontSize: '10',
  },
  taskItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: '0',
  },
  listDecoration: {
    fontSize: '15',
    margin: '0'
  },
  taskItem: {
    margin: '0'
  }
})

Font.register({
  family: 'robotoBold',
  src: robotoBold
})

Font.register({
  family: 'robotoRegular',
  src: robotoThin
})


class ResumePreviousExperience extends Component {
  constructor(props) {
    super(props)
    this.convertDate = this.convertDate.bind(this)
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
      <View style={experienceStyles.experienceContainer}>
        <View style={experienceStyles.sectionHeader}>
          <Text style={experienceStyles.sectionHeaderText}>
           Experience
          </Text>
        </View>
        <View style={experienceStyles.sectionUnderline} />
        <View>
          {this.props.previousExperience.map((experience, experienceIndex) => {
            return (
              <View
                style={experienceStyles.experienceDetails}
                key={experienceIndex}
                id={experienceIndex}
              >
                <View style={experienceStyles.experienceHeader}>
                  <View style={experienceStyles.nameAndPosition}>
                    <Text style={experienceStyles.name}>
                      {experience.companyName}
                    </Text>
                    <Text style={experienceStyles.name}> 
                      {'/'} 
                    </Text>
                    <Text style={experienceStyles.position}>
                      {experience.position}
                    </Text>
                  </View>
                  <View style={experienceStyles.startAndEndDate}>
                    <Text style={experienceStyles.date}>
                      <Text>{this.convertDate(experience.startDate)}</Text>
                      <Text> - </Text> 
                      <Text>{this.convertDate(experience.endDate)}</Text>
                    </Text>
                  </View>
                </View>
                <View style={experienceStyles.experienceList}>
                  {experience.jobDescription
                    .split('. ')
                    .map((sentence, sentenceIndex) => {
                      return (
                        <View
                          id={sentenceIndex}
                          key={sentenceIndex}
                          style={experienceStyles.taskItemContainer}
                        >
                          <Text style={experienceStyles.listDecoration}>
                            {'•  '}
                          </Text>
                          <Text style={experienceStyles.taskItem}>
                            {`${sentence}`}
                          </Text>
                        </View>
                      );
                    })}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    )
  }
}

export default ResumePreviousExperience;