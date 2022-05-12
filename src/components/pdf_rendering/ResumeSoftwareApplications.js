import React, { Component } from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import robotoBold from '/Users/blaincrawford/Desktop/odinProj/cv-project-react/src/components/pdf_rendering/pdf_fonts/Roboto/Roboto-Bold.ttf'
import robotoItalic from '/Users/blaincrawford/Desktop/odinProj/cv-project-react/src/components/pdf_rendering/pdf_fonts/Roboto/Roboto-Italic.ttf'

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
    fontSize: '11',
    fontFamily: 'robotoBold',
    margin: '5px 3px 0px 3px',
  },
  tools: {
    fontSize: '10',
    margin: '6px 3px 0px 3px',
  },
  description: {
    margin: '0px 3px 0px 3px',
    paddingLeft: '2px',
    fontFamily: 'robotoItalic',
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
    alignItems: 'flex-start',
    margin: '0',
  },
  listDecoration: {
    fontSize: '15',
    margin: '0'
  },
  taskItem: {
    margin: '0'
  },
});

Font.register({
  family:'robotoItalic',
  src: robotoItalic
})

Font.register({
  family: 'robotoBold',
  src: robotoBold
})


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
