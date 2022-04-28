import React, { Component } from 'react';
import '../../styles/styles.css';
import Header from './Header';
import RightSideBar from './RightSideBar';
import CvGenerator from './CvGenerator';
import { StyledMainPage } from '../mui-styles/mainPageStyles';

class RenderPage extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>
        <div id="page-header">
          <Header />
        </div>
          <StyledMainPage id="main-page">
            <CvGenerator />
            <RightSideBar />
          </StyledMainPage>
      </div>
    )
  }
}

export default RenderPage;