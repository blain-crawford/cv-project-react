import React, { Component } from 'react';
import '../../styles/styles.css';
import Header from './Header';
import RightSideBar from './RightSideBar';
import CvGenerator from './CvGenerator';
import { StyledMainPage } from '../mui-styles/mainPageStyles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

class RenderPage extends Component {
  constructor(props) {
    super(props)

    //functionality for Avatar
    this.setAvatarImage = this.setAvatarImage.bind(this);
    this.setImagePlaceHolder = this.setImagePlaceHolder.bind(this);

    
    //functionality for name and bio
    this.setName = this.setName.bind(this);
    this.setBio = this.setBio.bind(this);

    
    //functionality for changing between generate cv and view cv
    this.changeMode = this.changeMode.bind(this)
   
    this.state = {
      mode: 'generate',
      avatarImage: '',
      imagePlaceHolder: <CameraAltIcon />,
      nameAndBio: {
        name: '',
        bio: '',
      },
      contactInfo: {
        location: '',
        phoneNumber: '',
        email: '',
        linkedIn: '',
        gitHub: '',
      },
      previousExperience: [],
      previousEducation: [],
      skillToAdd: '',
      skills: [],
    }
  }

  //declaring Avatar functions
  setAvatarImage = ({ target }) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      this.setState({ avatarImage: e.target.result });
    };
    this.setImagePlaceHolder();
  };

  setImagePlaceHolder() {
    const newImagePlaceHolder = <></>;
    this.setState({ imagePlaceHolder: newImagePlaceHolder });
  }
  
  //declaring name and bio functions
  setName(name) {
    let newName = { ...this.state.nameAndBio };
    newName.name = name;
    this.setState({ nameAndBio: newName });
  }

  setBio(bio) {
    let newBio = { ...this.state.nameAndBio };
    newBio.bio = bio;
    this.setState({ nameAndBio: newBio });
  }
  
  //declaring view switching functions
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
              <CvGenerator 
                //passing to avatar component
                avatarAlt={this.state.nameAndBio}
                imageSrc={this.state.avatarImage}
                setAvatarImage={this.setAvatarImage}
                imagePlaceHolder={this.state.imagePlaceHolder}

                //passing to name and bio component
                setName={this.setName} 
                setBio={this.setBio} 
              />
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