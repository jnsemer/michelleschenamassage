import Head from 'next/head'
import React from 'react';
import type { NextPage } from 'next'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../components/Theme';
import { Container, Typography } from '@mui/material';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Treatments } from '../components/Treatments';
import { Contact } from '../components/Contact'; 


const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Michelle Schena Massage</title>
        <meta name="Michelle Schena Massage, Licensed Massage Therapist" content="Massage Therapist" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
      </Head>
    <Header />
    <Container maxWidth='xl' sx={{mt:3}}>
        <About />
        <Typography variant='h5' color='primary'>Treatments</Typography>
        <Treatments />
        <Typography variant='h5' mt={5}color='primary'>Contact</Typography>
        <Contact />
    </Container>
    </ThemeProvider>
  )
}

export default Home
