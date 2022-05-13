import { styled } from '@mui/system';
import { TextField, Button, CardMedia } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ClearIcon from '@mui/icons-material/Clear';

export const StyledCvGenerator = styled('div', {
  name: 'CvGenerator',
})({
  width: '80%',
  borderRight: '6px solid rgb(255,102,0,.3)',
});

export const StyledGeneralInfo = styled('div', {
  name: 'generalInfo',
})({
  paddingLeft: '50px',
  paddingTop: '50px',
  paddingBottom: '10px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '',
});

export const StyledAvatarSection = styled('div', {
  name: 'StyledAvatarSection',
})({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
});

export const StyledAddPhotoInput = styled('input', {
  name: 'StyledAddPhotoInput',
})({
  display: 'none',
});

export const StyledAddPhotoButton = styled(Button, {
  name: 'StyledAddPhotoButton',
})({
  color: '#5b083a',
  backgroundColor: 'rgb(255,102,0, .2)',
  display: 'flex',
  border: '1px solid purple',
  justifyContent: 'center',
  margin: '10px',
  '.MuiSvgIcon-root': {
    margin: '0',
  },
  ':hover': {
    color: 'white',
    border: '#5b083a',
    backgroundColor: 'rgb(91, 8, 58)',
  },
});

export const PictureHolder = styled(CardMedia, {
  name: 'Avatar',
})({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px',
  height: '200px',
  marginBottom: 'auto',
  backgroundColor: 'rgb(200,200,200,.8)',
  borderRadius: '10px',
  '.MuiSvgIcon-root': {
    fontSize: '70px',
    opacity: '.4',
  },
});

export const StyledNameAndBio = styled('div', {
  name: 'NameAndBio',
})({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '20px',
  marginRight: '10px',
  marginBottom: 'auto',
  gap: '10px',
  width: '60%',
});

export const StyledNameInput = styled(TextField, {
  name: 'Name',
})({
  width: '100%',
});

export const StyledBioInput = styled(TextField, {
  name: 'Bio',
})({
  width: '100%',
});

export const StyledContactInfo = styled('div', {
  name: 'StyledContactInfo',
})({
  width: '20%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px',
});

export const StyledContactDiv = styled('div', {
  name: 'StyledContactDiv',
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const StyledContactInput = styled(TextField, {
  name: 'StyledContactInput',
})({
  height: '10%',
  width: '80%',
  margin: '0 auto',
});

export const StyledHeaderLabel = styled('div', {
  name: 'StyledHeaderLabel',
})({
  display: 'flex',
  marginLeft: '50px',
});

export const StyledHeaderUnderline = styled('div', {
  name: 'StyledHeaderUnderline',
})({
  border: '1px solid #5b083a',
  opacity: '.6',
  width: '95%',
});

export const StyledAddButton = styled(Button, {
  name: 'StyledAddButton',
})({
  color: '#5b083a',
  backgroundColor: 'rgb(255,102,0, .2)',
  display: 'flex',
  border: '1px solid purple',
  justifyContent: 'center',
  width: '10%',
  margin: '10px',
  '.MuiSvgIcon-root': {
    margin: '0',
  },
  ':hover': {
    color: 'white',
    border: '#5b083a',
    backgroundColor: 'rgb(91, 8, 58)',
  },
});
export const StyledDeleteButton = styled(Button, {
  name: 'StyledAddButton',
})({
  color: '#5b083a',
  backgroundColor: 'rgb(255,102,0, .2)',
  display: 'flex',
  border: '1px solid purple',
  justifyContent: 'center',
  width: '80%',
  margin: 'auto',
  '.MuiSvgIcon-root': {
    margin: '0',
  },
  ':hover': {
    color: 'white',
    border: '#5b083a',
    backgroundColor: 'rgb(91, 8, 58)',
  },
});

export const StyledSkillInput = styled(TextField, {
  name: 'StyledSkillInput',
})({
  height: '10%',
  width: '50%',
  margin: '0 auto',
});

export const StyledSkillContainer = styled('div', {
  name: 'StyledSkillContainer',
})({
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px',
  width: '95%',
});

export const StyledIndividualSkill = styled('div', {
  name: 'StyledIndividualSkill',
})({
  color: '#5b083a',
  backgroundColor: 'rgb(255,102,0, .2)',
  paddingLeft: '25px',
  paddingRight: '10px',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid purple',
  justifyContent: 'center',
  gap: '20px',
});

export const StyledClearIcon = styled(ClearIcon, {
  name: 'styledClearIcon',
})({
  cursor: 'pointer',
  ':hover': {
    fontSize: '42px',
  },
});

export const StyledInputAndAddButton = styled('div', {
  name: 'StyledInputAndAddButton',
})({
  marginTop: '20px',
});

export const StyledCvForm = styled('div', {
  name: 'formContainer',
})({
  display: 'flex',
  flexDirection: 'row',
  padding: '10px',
  width: '85%',
  margin: '20px auto',
  borderBottom: '2px solid rgb(255,102,0,.3)',
});

export const StyledCvInfoInputs = styled('div', {
  name: 'InfoInput',
})({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  gap: '10px',
});

export const StyledDateAndDeleteContainer = styled('div', {
  name: 'DateAndDeleteContainer',
})({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  margin: '0 5px 0 5px',
});

export const StyledDateInput = styled(DesktopDatePicker, {
  name: 'DateInput',
})({
  margin: 'auto',
});

export const StyledExperienceContainer = styled('div', {
  name: 'StyledExperienceContainer',
})({
  display: 'flex',
  flexDirection: 'column',
  color: '#5b083a',
  paddingLeft: '50px',
  paddingTop: '50px',
});

export const StyledExperienceHeader = styled('div', {
  name: 'StyledExperienceHeader',
})({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '.MuiSvgIcon-root': {
    fontSize: '40px',
    marginRight: '10px',
  },
});
