import React from 'react';
import { Box, Fade, Link, Typography } from '@mui/material';
import { about1, about2 } from '../data/about';
import Image from 'next/image';

const servingText1 = "Michelle acts as the resident massage therapist at "
const servingText3 = " with the ability to to rejuvenate the body, help prevent injury, and relieve chronic pain. She believes massage is an integral part of health and longevity."

const AboutBlurb = () => {
  return (
    <>
    <Typography variant="h5" color='white' sx={{textAlign:'center', mb:3}}>About Michelle</Typography>
    <Typography color='white' mb={3} sx={{textAlign:'center'}}>
      {about1}
    </Typography>
    <Typography color='white' mb={3} sx={{textAlign:'center'}}>
      {about2}
    </Typography>
    <Typography variant='body1' color='white' sx={{textAlign:'center'}}>
      {servingText1}  
      <Link variant='body1' href="https://www.redpointpt.com/" color="#fff">
        Redpoint Physical Therapy
      </Link>
    </Typography>
    </>
  )
}

export const About = () => {
  return (
    <Fade appear in timeout={1000} >
      <Box justifyContent='center' display='flex' mt={5} mb={5} ml={{xs:1, md:0}} id='about'>
        <Box p={2} 
        sx={{
          display: 'flex', 
          flexDirection: {xs:'column', md: 'row'},
          backgroundColor: '#C42D2D',
          borderRadius:2, 
          minHeight:300,
          boxShadow: 4
          }}>
            <Image
              src="/michelleavatar.png"
              alt="Michelle Schena"
              width={300}
              height={300}
            />
            <Box maxWidth='sm' mt={{xs: 2, md:0}} ml={{xs:0, md:10}}>
              <AboutBlurb /> 
            </Box>
        </Box>
      </Box>
    </Fade>
  )
}