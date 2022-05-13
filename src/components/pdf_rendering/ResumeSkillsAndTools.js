import React, { Component } from 'react';
import { Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';
import robotoBold from '../pdf_rendering/pdf_fonts/Roboto/Roboto-Bold.ttf';

const skillsAndToolsStyles = StyleSheet.create({
  sectionHeader: {
    width: '100%',
    margin: '0 auto',
  },
  sectionHeaderText: {
    color: '#2C041C',
    fontSize: '13',
    marginBottom: '8px',
  },
  sectionUnderline: {
    border: '1px solid orange',
    opacity: '.6',
    width: '100%',
    margin: '0 auto',
  },
  skillsAndTools: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  skillsContainer: {
    width: '85%',
    margin: '0 auto',
    padding: '2px',
  },
  frontEndSkills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '2px',
  },
});

Font.register({
  family: 'robotoBold',
  src: robotoBold,
});

class ResumeSkillsAndTools extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={skillsAndToolsStyles.skillsContainer}>
        <View style={skillsAndToolsStyles.sectionHeader}>
          <Text style={skillsAndToolsStyles.sectionHeaderText}>
            Technical Skills
          </Text>
        </View>
        <View style={skillsAndToolsStyles.sectionUnderline} />
        <View style={skillsAndToolsStyles.frontEndSkills}>
          <Text
            style={{
              fontSize: '11',
              fontFamily: 'robotoBold',
              margin: '5px 3px 0px 3px',
            }}
          >
            Front end:{' '}
          </Text>
          <Text style={{ fontSize: '10', margin: '6px 3px 0px 3px' }}>
            {this.props.skills.map((skill, skillIndex) => {
              return (
                <div id={skillIndex} key={skillIndex}>
                  <p>{skill}</p>
                </div>
              );
            })}
          </Text>
        </View>
        <View style={skillsAndToolsStyles.frontEndSkills}>
          <Text
            style={{
              fontSize: '11',
              fontFamily: 'robotoBold',
              margin: '5px 3px 0px 3px',
            }}
          >
            Developer Tools:{' '}
          </Text>
          <Text style={{ fontSize: '10', margin: '6px 3px 0px 3px' }}>
            {this.props.developerTools.map((tool, toolIndex) => {
              return (
                <div id={toolIndex} key={toolIndex}>
                  <p>{tool}</p>
                </div>
              );
            })}
          </Text>
        </View>
      </View>
    );
  }
}

export default ResumeSkillsAndTools;
