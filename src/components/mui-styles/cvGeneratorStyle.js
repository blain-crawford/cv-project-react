import { styled } from '@mui/system';
import { Box, TextField, Button, CardMedia } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ClearIcon from '@mui/icons-material/Clear';

const StyledCvGenerator = styled('div', {
  name: 'CvGenerator',
})({
  width: '80%',
  borderRight: '6px solid rgb(255,102,0,.3)',
});

const StyledGeneralInfo = styled('div', {
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

const PictureHolder = styled(CardMedia, {
  name: 'Avatar',
})({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '150px',
  height: '150px',
  marginBottom: 'auto',
  backgroundColor: 'rgb(200,200,200,.8)',
  borderRadius: '10px',
  '.MuiSvgIcon-root': {
    fontSize: '70px',
    opacity: '.4',
  },
});

const StyledNameAndBio = styled('div', {
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

const StyledNameInput = styled(TextField, {
  name: 'Name',
})({
  width: '100%',
});

const StyledBioInput = styled(TextField, {
  name: 'Bio',
})({
  width: '100%',
});

const StyledContactInfo = styled('div', {
  name: 'StyledContactInfo',
})({
  width: '20%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px',
});

const StyledContactDiv = styled('div', {
  name: 'StyledContactDiv',
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StyledContactInput = styled(TextField, {
  name: 'StyledContactInput',
})({
  height: '10%',
  width: '80%',
  margin: '0 auto',
});

const StyledHeaderLabel = styled('div', {
  name: 'StyledHeaderLabel',
})({
  display: 'flex',
  marginLeft: '50px',
});

const StyledHeaderUnderline = styled('div', {
  name: 'StyledHeaderUnderline',
})({
  border: '1px solid #5b083a',
  opacity: '.6',
  width: '95%',
});

const StyledAddButton = styled(Button, {
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
const StyledDeleteButton = styled(Button, {
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

const StyledSkillInput = styled(TextField, {
  name: 'StyledSkillInput',
})({
  height: '10%',
  width: '50%',
  margin: '0 auto',
});

const StyledSkillContainer = styled('div', {
  name: 'StyledSkillContainer'
}) ({
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px',
  width: '95%'
})

const StyledIndividualSkill = styled('div', {
  name:'StyledIndividualSkill'
}) ({
  color: '#5b083a',
  backgroundColor: 'rgb(255,102,0, .2)',
  paddingLeft: '25px',
  paddingRight: '10px',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid purple',
  justifyContent: 'center',
  gap: '20px'
})

const StyledClearIcon = styled(ClearIcon, {
  name:'styledClearIcon'
}) ({
  cursor: 'pointer',
  ':hover': {
    fontSize: '42px'
  },
})

const StyledInputAndAddButton = styled('div', {
  name: 'StyledInputAndAddButton',
})({
  marginTop: '20px',
});

const StyledCvForm = styled('div', {
  name: 'formContainer'
})({
  display: 'flex',
  flexDirection: 'row',
  padding: '10px',
  width: '85%',
  margin: '20px auto',
  borderBottom: '2px solid rgb(255,102,0,.3)'
})

const StyledCvInfoInputs = styled('div',{
  name: 'InfoInput'
}) ({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  gap: '10px'
})

const StyledDateAndDeleteContainer = styled('div', {
  name:'DateAndDeleteContainer'
}) ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  margin: '0 5px 0 5px'
})

const StyledDateInput = styled(DesktopDatePicker, {
  name: 'DateInput'
}) ({
  margin: 'auto'
})


export {
  PictureHolder,
  StyledGeneralInfo,
  StyledNameAndBio,
  StyledNameInput,
  StyledBioInput,
  StyledCvGenerator,
  StyledContactInfo,
  StyledContactDiv,
  StyledContactInput,
  StyledHeaderLabel,
  StyledHeaderUnderline,
  StyledAddButton,
  StyledDeleteButton,
  StyledSkillInput,
  StyledSkillContainer,
  StyledIndividualSkill,
  StyledClearIcon,
  StyledInputAndAddButton,
  StyledCvForm,
  StyledCvInfoInputs,
  StyledDateAndDeleteContainer,
  StyledDateInput
};
