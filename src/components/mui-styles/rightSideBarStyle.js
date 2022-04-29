import { styled } from '@mui/system';

const StyledRightSideBar = styled('div', {
  name: 'StyledRightSideBar'
}) ({
  width: '20%',
  height: '100vh',
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderLeft: '6px solid rgb(255,102,0,.3)',
});

export { StyledRightSideBar };