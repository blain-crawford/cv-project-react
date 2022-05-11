import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';
import { fontSize } from '@mui/system';

const SoftwareStyles = StyleSheet.create({
  sectionHeader: {
    width: '100%',
    margin: '8px auto 0 auto'
  },
  sectionHeaderText: {
    color: '#2C041C',
    fontSize: '13',
    marginBottom: '8px'
  },
  sectionUnderline: {
    border: '1px solid orange',
    opacity: '.6',
    width: '100%',
    margin: '0 auto'
  },
  softwareContainer: {
    width: '85%',
    margin: '0 auto',
    padding: '2px'
  },
})

class ResumeSoftwareApplications extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={SoftwareStyles.softwareContainer}>
        <View style={SoftwareStyles.sectionHeader}>
          <Text style={SoftwareStyles.sectionHeaderText}>
            Software Applications
          </Text>
        </View>
        <View style={SoftwareStyles.sectionUnderline}></View>
      </View>
    )
  }
}

export default ResumeSoftwareApplications;