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
  applicationContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    margin: '0 auto',
    padding: '2px',
    gap: '0',
  },
  nameAndDescription: {
    padding: '0px'
  },
  taskList: {

  }
})

class ResumeSoftwareApplications extends Component {
  constructor(props) {
    super(props)
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
      <View style={SoftwareStyles.softwareContainer}>
        <View style={SoftwareStyles.sectionHeader}>
          <Text style={SoftwareStyles.sectionHeaderText}>
            Software Applications
          </Text>
        </View>
        <View style={SoftwareStyles.sectionUnderline}></View>
        <View style={{ marginTop: '10px' }}>
        {this.props.applicationList.map((application, applicationIndex) => {
            return (
              <View style={SoftwareStyles.applicationContainer}
                key={applicationIndex}
                id={applicationIndex}
              >
                <View styled={SoftwareStyles.nameAndDescription}>
                  <Text style={{ margin: '0px 3px 0px 3px' }}>
                    <Text style={{ fontWeight: 'bold' }}>
                      {application.applicationName} -{' '}
                    </Text>
                    {application.toolsUsed}
                  </Text>
                </View>
                <View styled={SoftwareStyles.nameAndDescription}>
                  <Text style={{ margin: '0px 3px 0px 3px', fontStyle: 'italic' }}>
                    {application.appDescription}
                  </Text>
                </View>
                <View style={SoftwareStyles.taskList}>
                  {application.tasksAccomplished
                    .split(', ')
                    .map((task, taskIndex) => {
                      return (
                        <Text id={taskIndex} key={taskIndex}>
                          {task}
                        </Text>
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

export default ResumeSoftwareApplications;