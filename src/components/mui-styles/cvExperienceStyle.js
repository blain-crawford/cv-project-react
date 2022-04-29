import { styled } from '@mui/system';


const StyledExperienceContainer = styled('div', {
  name: 'StyledExperienceContainer'
}) ({
  display: 'flex',
  flexDirection: 'column',
  color: '#5b083a',
  paddingLeft: '50px',
  paddingTop: '50px'
})

const StyledExperienceHeader = styled('div', {
  name: 'StyledExperienceHeader'
}) ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '.MuiSvgIcon-root': {
    fontSize: '40px',
    marginRight: '10px'
  }
})

export {
  StyledExperienceContainer,
  StyledExperienceHeader
}