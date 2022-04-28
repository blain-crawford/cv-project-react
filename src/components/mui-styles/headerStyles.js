import { styled, Theme } from '@mui/system';
import { AppBar } from '@mui/material';

const StyledHeader = styled (AppBar, {
  name: 'StyledHeader',
  slot: 'PageTopper'
}) ({
  backgroundColor: '#2C041C',
  color: 'white',
  padding: '15px',
  postition: 'relative',
  borderBottom: '6px solid #FF6600',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', 
  '.MuiSvgIcon-root': {
    fontSize: '55px',
  },
  boxShadow: '0px 15px 29px 5px rgba(0,0,0,0.46)'
  
})

const HeaderLeft = styled('div', {}) ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20px',
})

const HeaderRight = styled('div', {}) ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})

export { StyledHeader, HeaderLeft, HeaderRight };