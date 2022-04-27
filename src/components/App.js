import React, { Component } from 'react';
import RenderPage from '../components/page_styling/RenderPage';
import '../styles/styles.css';

class App extends Component {
  constructor() {
    super()
  }
  render () {
    return (
      <>
        <RenderPage />
      </>
    );
  }
};

export default App;
