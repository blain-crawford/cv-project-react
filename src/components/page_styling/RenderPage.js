import React, { Component } from 'react';
import '../../styles/styles.css'
import Header from './Header'
import PdfButton from '../pdf_rendering/PdfButton'

class RenderPage extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default RenderPage;