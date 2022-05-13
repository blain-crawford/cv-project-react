import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const StyledCvPreview = styled('div', {
  name: 'CvGenerator',
})({
  width: '80%',
  borderRight: '6px solid rgb(255,102,0,.3)',
});

export const StyledNameAndContactInfo = styled('div', {
  name: 'StyledNameAndContactInfo',
})({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StyledName = styled('div', {
  name: 'StyledName',
})({
  color: '#2C041C',
  fontWeight: 'bold',
  marginBottom: '0',
});

export const StyledContactInfo = styled('div', {
  name: 'StyledContactInfo',
})({
  display: 'flex',
  width: '30%',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: '0 auto',
  padding: '1px',
});

export const StyledInfoItem = styled('p', {
  name: 'StyledInfoItem',
})({
  margin: '0 2px',
});

export const StyledLink = styled('a', {
  name: 'StyledLink',
})({
  color: '#2C041C',
  margin: '0 2px',
});

export const StyledSectionHeader = styled('div', {
  name: 'StyledSectionHeader',
})({
  width: '85%',
  margin: '0 auto',
});

export const StyledSectionHeaderText = styled(Typography, {
  name: 'Sty;edSectionHeaderText',
})({
  color: '#2C041C',
});

export const StyledSectionUnderline = styled('div', {
  name: 'StyledHeaderUnderline',
})({
  border: '1px solid rgb(255,102,0,.5)',
  opacity: '.6',
  width: '85%',
  margin: '0 auto',
});

export const StyledSkillsAndToolsSection = styled('div', {
  name: 'StyledSkillsAndToolsSection',
})({
  marginTop: '10px',
  marginBottom: '10px',
});

export const StyledSkillsContainer = styled('div', {
  name: 'StyledSkillsContainer',
})({
  width: '85%',
  margin: '0 auto',
  padding: '2px',
});

export const StyledFrontEndSkills = styled('div', {
  name: 'StyledFrontEndSkills',
})({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5px',
});

export const StyledExperienceContainer = styled('div', {
  name: 'StyledExperienceContainer',
})({
  display: 'flex',
  flexDirection: 'column',
  width: '85%',
  margin: '0 auto',
  padding: '2px',
  gap: '10px',
});

export const StyledExperienceHeader = styled('div', {
  name: 'StyledExperienceHeader',
})({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  borderBottom: '1px solid #2C041C',
});

export const StyledNameAndPosition = styled('div', {
  name: 'StyledNameAndPosition',
})({
  display: 'flex',
  padding: '10px',
  alignItems: 'center',
});

export const StyledStartAndEndDate = styled('div', {
  name: 'StyledStartAndEndDate ',
})({
  display: 'flex',
  padding: '10px',
  alignItems: 'center',
});

export const StyledExperienceList = styled('ul', {
  name: 'StyledExperienceList',
})({
  margin: '5px 0 0 0',
  paddingLeft: '50px',
});

export const StyledEducationContainer = styled('div', {
  name: 'StyledEducationContainer',
})({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '85%',
  margin: '0 auto',
  padding: '0px',
});

export const StyledApplicationContainer = styled('div', {
  name: 'StyledEducationContainer',
})({
  display: 'flex',
  flexDirection: 'column',
  width: '85%',
  margin: '0 auto',
  padding: '2px',
  gap: '0',
});
