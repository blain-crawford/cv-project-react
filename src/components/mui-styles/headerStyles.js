import { styled } from '@mui/system';
import { AppBar } from '@mui/material';

const headerStyles = {
  container: {
    padding: 2,
    postition: 'relative',
    borderBottom: '6px solid blue',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px'
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    fontSize: '50px',
    mr: '30px'
  }
}

const StyledHeader = styled (AppBar) ({
  padding: '16px',
  postition: 'relative',
  borderBottom: '6px solid blue',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px'
})

export { StyledHeader, headerStyles };