import React from 'react';
import { Avatar, Box, Fade, Grid, Grow, Stack, Typography } from '@mui/material';
import { about } from '../data/about';
import Image from 'next/image';

const AboutBlurb = () => {
  return (
    <>
    <Typography variant='h5' color='white' sx={{textAlign:'center', mb:3}}>About Michelle</Typography>
    <Typography variant='h6' color='white' sx={{textAlign:'center'}}>
      {about}
    </Typography>
    </>
  )
}

export const About = () => {
  return (
    <Fade appear in timeout={1000} >
      <Box justifyContent='flex-start' display='flex' mt={5} mb={5} ml={{xs:1, md:0}}>
        <Box p={6} 
        sx={{
          display: 'flex', 
          flexDirection: {xs:'column', md: 'row'},
          backgroundColor: '#C42D2D',
          borderRadius:4, 
          minHeight:300
          }}>
            <Image
              src="/michelleavatar.png"
              alt="Michelle Schena"
              width={300}
              height={300}
            />
            <Box maxWidth='md' mt={{xs: 2, md:0}} ml={{xs:0, md:10}}>
              <AboutBlurb /> 
            </Box>
        </Box>
      </Box>
    </Fade>
  )
}