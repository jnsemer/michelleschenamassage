import React from 'react';
import type { NextPage } from 'next'
import { makeStyles } from '@mui//styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../components/Theme';
import { Box, Container, Typography } from '@mui/material';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Treatments } from '../components/Treatments';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#F3F4EE',
  },
}); 

const Main: NextPage = () => {
  const classes = useStyles(); 
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth='xl' sx={{mt:3}}>
          <About />
          <Typography variant='h5' color='primary'>Treatments</Typography>
          <Treatments />
      </Container>
    </ThemeProvider>
  )
}

export default Main