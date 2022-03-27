import React from 'react';
import { Typography, Box } from '@mui/material'; 

export const Logo = (props:any) => {
  // DO WE WANT THIS TO BE BIGGER
  return (
    <Box justifyContent='flex-start' flexDirection='column' maxWidth={300} {...props}>
      <Typography variant='h4' textAlign='center' color='primary'>Michelle Schena</Typography>
      <Typography variant='body2' textAlign='center' color='primary'>THERAPUTIC MASSAGE & BODY WORK</Typography>
    </Box>
  );
}