import { styled } from '@mui/system';
import { Box, TextField } from '@mui/material';

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
  width: '200px',
  height: '200px',
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
  marginLeft: '40px',
  gap: '10px',
  width: '65%',
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
  name: 'StyledContactInfo'
}) ({
  width: '15%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px'
  
})

const StyledContactDiv = styled('div', {
  name: 'StyledContactDiv'
}) ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const StyledContactInput = styled(TextField, {
  name: 'StyledContactInput'
}) ({
  height: '10%',
  width: '80%',
  margin: '0 auto'
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
  StyledContactInput
};
