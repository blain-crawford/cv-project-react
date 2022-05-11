import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';
import { render } from 'react-dom';

const generalInfoStyles = StyleSheet.create({
  nameAndContactInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  name: {
    color: '#2C041C',
    fontWeight: 'bold',
    fontSize: '25',
    textDecoration: 'none',
    marginTop: '30px',
    marginBottom: '8px'
  },
  styledContactInfo: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '11',
    width: '70%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0 auto',
    padding: '1px'
  },
  infoItem: {
    margin: '0 2px'
  },
  infoLink: {
    color: '#2C041C',
    margin: '0 2px',
    textDecoration: 'none'
  }
})

class ResumeGeneralInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={generalInfoStyles.nameAndContactInfo}>
        <Link 
        style={generalInfoStyles.name} 
        src={this.props.contactInfo.linkedIn}
        >
            {this.props.name}
        </Link>
        <View style={generalInfoStyles.styledContactInfo}>
          <Text styled={generalInfoStyles.infoItem}>
            {`${this.props.contactInfo.location} | `}
          </Text>
          <Text styled={generalInfoStyles.infoItem}>
            {` ${this.props.contactInfo.phoneNumber} |`} 
          </Text>
          <Text styled={generalInfoStyles.infoItem}>
            {` ${this.props.contactInfo.email} `}
          </Text>
        </View>
        <View style={generalInfoStyles.styledContactInfo}>
          <Link 
            style={generalInfoStyles.infoLink}
            href={`https://${this.props.contactInfo.gitHub}`}
            target='_blank'
            >
              {` ${this.props.contactInfo.gitHub} |`}
          </Link>
          <Link 
          style={generalInfoStyles.infoLink}
          src={this.props.contactInfo.linkedIn}
          href={`https://${this.props.contactInfo.linkedIn}`}
          target='_blank'
          >
            {`${this.props.contactInfo.linkedIn}`}
          </Link>
        </View>
           
        
      </View>
    )
  }
}

export default ResumeGeneralInfo;