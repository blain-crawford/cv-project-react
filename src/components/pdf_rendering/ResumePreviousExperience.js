import React, { Component } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const experienceStyles = StyleSheet.create({
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
      <View>
        <View style={SoftwareStyles.sectionHeader}>
          <Text style={SoftwareStyles.sectionHeaderText}>
           Experience
          </Text>
        </View>
        <View style={SoftwareStyles.sectionUnderline}></View>
      </View>
    )
  }
}