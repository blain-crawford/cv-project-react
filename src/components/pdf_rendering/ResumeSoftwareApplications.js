import React, { Component } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const SoftwareStyles = StyleSheet.create({
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
  name: {
    fontSize: '12',
    fontWeight: 'extrabold',
    margin: '5px 3px 0px 3px',
  },
  tools: {
    fontSize: '11',
    margin: '6px 3px 0px 3px',
  },
  description: {
    margin: '0px 3px 0px 3px',
    fontStyle: 'italic',
    fontSize: '10',
  },
  softwareContainer: {
    width: '85%',
    margin: '3px auto 0 auto',
  },
  applicationContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '0 auto',
    gap: '0',
  },
  nameAndDescription: {
    padding: '0px',
  },
  taskList: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5px 0 0 0',
    paddingLeft: '20px',
    fontSize: '10',
  },
  taskItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  listDecoration: {
    fontSize: '15',
    marginBottom: '15px'
  },
  taskItem: {
    marginBottom: '5px',
  },
});

class ResumeSoftwareApplications extends Component {
  constructor(props) {
    super(props);
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
        <View style={{ marginTop: '5px' }}>
          {this.props.applicationList.map((application, applicationIndex) => {
            return (
              <View
                style={SoftwareStyles.applicationContainer}
                key={applicationIndex}
                id={applicationIndex}
              >
                <View styled={SoftwareStyles.nameAndDescription}>
                  <Text style={{ margin: '0px 3px 0px 3px' }}>
                    <Text style={SoftwareStyles.name}>
                      {application.applicationName} -{' '}
                    </Text>
                    <Text style={SoftwareStyles.tools}>
                      {application.toolsUsed}
                    </Text>
                  </Text>
                </View>
                <View styled={SoftwareStyles.nameAndDescription}>
                  <Text style={SoftwareStyles.description}>
                    {application.appDescription}
                  </Text>
                </View>
                <View style={SoftwareStyles.taskList}>
                  {application.tasksAccomplished
                    .split('. ')
                    .map((task, taskIndex) => {
                      return (
                        <View
                          id={taskIndex}
                          key={taskIndex}
                          style={SoftwareStyles.taskItemContainer}
                        >
                          <Text style={SoftwareStyles.listDecoration}>
                            {'•  '}
                          </Text>
                          <Text style={SoftwareStyles.taskItem}>
                            {`${task}`}
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
    );
  }
}

export default ResumeSoftwareApplications;
