import { styled } from '@mui/system';
import { Switch } from '@mui/material';
import { orange, purple } from '@mui/material/colors';

export const StyledRightSideBar = styled('div', {
  name: 'StyledRightSideBar',
})({
  width: '20%',
  height: '100vh',
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StyledRightSideHeader = styled('div', {
  name: 'StyledRightSideHeader',
})({
  width: '90%',
  textAlign: 'center',
  padding: '5px',
  borderRadius: '10px',
  backgroundColor: '#5b083a',
  color: 'white',
  border: '2px solid orange',
  justifyContent: 'center',
  marginTop: '50px',
});

export const PreviewSwitch = styled(Switch, {
  name: 'PreviewSwitch',
})({
  switchBase: {
    color: orange,
    '&$checked': {
      color: purple,
    },
  },
});

export const StyledInstructions = styled('div', {

}) ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '90%',
  textAlign: 'center',
  padding: '5px',
  borderRadius: '10px',
  color: '#5b083a',
  backgroundColor: 'rgb(255,102,0, .2)',
  border: '1px solid purple',
  justifyContent: 'center',
  margin: '20px auto',
})
