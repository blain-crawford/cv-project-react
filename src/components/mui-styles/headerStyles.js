import { styled } from '@mui/system';

export const StyledHeader = styled('div', {
  name: 'StyledHeader',
  slot: 'PageTopper',
})({
  backgroundColor: '#2C041C',
  color: 'white',
  padding: '15px',
  postition: 'relative',
  outline: '6px solid rgb(255,102,0,.5)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  '.MuiSvgIcon-root': {
    fontSize: '55px',
  },
  boxShadow: '0px 15px 29px 5px rgba(0,0,0,0.46)',
});

export const HeaderLeft = styled(
  'div',
  {},
)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20px',
});

export const HeaderRight = styled(
  'div',
  {},
)({
  display: 'flex',
  width: '20%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
