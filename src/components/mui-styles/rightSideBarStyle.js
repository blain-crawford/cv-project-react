import { styled } from '@mui/system';
import { Switch } from '@mui/material';
import { orange, purple } from '@mui/material/colors';

const StyledRightSideBar = styled('div', {
  name: 'StyledRightSideBar',
})({
  width: '20%',
  height: '100vh',
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledRightSideHeader = styled('div', {
  name: 'StyledRightSideHeader',
})({
  border: '1px solid black',
  width: '90%',
  textAlign: 'center',
  padding: '5px',
  borderRadius: '10px',
});

const PreviewSwitch = styled(Switch, {
  name: 'PreviewSwitch',
})({
  switchBase: {
    color: orange,
    '&$checked': {
      color: purple,
    },
  },
});

export { StyledRightSideBar, StyledRightSideHeader, PreviewSwitch };
