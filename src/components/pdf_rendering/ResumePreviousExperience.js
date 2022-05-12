import React, { Component } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

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
})

class ResumePreviousExperience extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={experienceStyles.experienceContainer}>
        <View style={experienceStyles.sectionHeader}>
          <Text style={experienceStyles.sectionHeaderText}>
           Experience
          </Text>
        </View>
        <View style={experienceStyles.sectionUnderline}></View>
      </View>
    )
  }
}

export default ResumePreviousExperience;