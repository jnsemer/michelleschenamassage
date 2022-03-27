import React from 'react';
import { makeStyles } from '@mui//styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../components/Theme';
import { Box, Container, Typography } from '@mui/material';

export const ComingSoon = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box width='100%' height='100%' pt={5} sx={{display:'flex', flexGrow:1, flexDirection:'column', backgroundColor:'white', textAlign:'center', margin:'auto', backgroundSize:'cover'}}>
        <Box>
        <Typography variant='body1' color='primary'>Michelle Schena Massage</Typography>
        <Typography variant='body1'color='primary'>Website Coming Soon!</Typography>
        <Typography variant='body1'color='primary'>For inquiries, please email</Typography>
        <Typography variant='body1'color='primary'>m.schena.massage@gmail.com</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}