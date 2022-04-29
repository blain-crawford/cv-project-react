import React, { Component } from 'react';
import '../../styles/styles.css';
import Header from './Header';
import RightSideBar from './RightSideBar';
import CvGenerator from './CvGenerator';
import { StyledMainPage } from '../mui-styles/mainPageStyles';

class RenderPage extends Component {
  constructor(props) {
    super(props)
    this.state = {mode: 'generate'}
    this.changeMode = this.changeMode.bind(this)
  }
  
  changeMode () {
    if(this.state.mode === 'generate') {
      this.setState({mode: 'preview'})
    } else {
      this.setState({mode: 'generate'})
    }
    console.log(this.state)
  };

  render() {
      if(this.state.mode === 'generate') {
      return (
        <div>
          <div id="page-header">
            <Header />
          </div>
            <StyledMainPage id="main-page">
              <CvGenerator />
              <RightSideBar 
                changeMode={this.changeMode}
                mode={this.state.mode}
              />
            </StyledMainPage>
        </div>
      )
    } else if(this.state.mode === 'preview') {
      return (
        <div>
          <div id="page-header">
            <Header />
          </div>
            <StyledMainPage id="main-page">
              <RightSideBar 
                changeMode={this.changeMode}
                mode={this.state.mode}
              />
            </StyledMainPage>
        </div>
      )
    }
  }
}

export default RenderPage;