import { styled } from '@mui/system';
import { Box, TextField, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const StyledCvGenerator = styled('div', {
  name: 'CvGenerator',
})({
  width: '80%',
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

const PictureHolder = styled(Box, {
  name: 'Avatar',
})({
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

const StyledSkillInput = styled(TextField, {
  name: 'StyledSkillInput',
})({
  height: '10%',
  width: '50%',
  margin: '0 auto',
});

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
  marginTop: '20px',
  padding: '10px',
  border: '1px solid black'
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
  gap: '30px'
})

const StyledDateInput = styled(AdapterDateFns, {
  name: 'DateInput'
}) ({

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
  StyledSkillInput,
  StyledInputAndAddButton,
  StyledCvForm,
  StyledCvInfoInputs,
  StyledDateAndDeleteContainer,
  StyledDateInput
};
