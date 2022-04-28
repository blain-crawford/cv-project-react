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
  padding: '50px',
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
export {
  PictureHolder,
  StyledGeneralInfo,
  StyledNameAndBio,
  StyledNameInput,
  StyledBioInput,
  StyledCvGenerator,
};
