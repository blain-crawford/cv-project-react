import { styled } from '@mui/system';
import { TextField, Button, CardMedia } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ClearIcon from '@mui/icons-material/Clear';


const StyledCvPreview = styled('div', {
  name: 'CvGenerator',
})({
  width: '80%',
  borderRight: '6px solid rgb(255,102,0,.3)',
});

export { StyledCvPreview }