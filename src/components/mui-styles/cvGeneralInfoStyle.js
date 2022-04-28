import { styled } from '@mui/system';
import { Box } from '@mui/material'

const GeneralInfo = styled('div', {
  name: "generalInfo"
})({
  padding: '50px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '',
  border: '1px solid black'
})

const PictureHolder = styled( Box, {
  name: 'Avatar'
}) ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '250px',
  width: '250px',
  backgroundColor: 'rgb(200,200,200,.8)',
  borderRadius: '10px',
  '.MuiSvgIcon-root': {
    fontSize: '100px',
    opacity: '.4'
  }
});

export { PictureHolder, GeneralInfo }