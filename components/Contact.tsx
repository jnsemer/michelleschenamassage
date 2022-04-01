
import React from 'react';
import { Box, Fade, Link, Stack, Typography } from '@mui/material';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';

const redpointText = ['Redpoint Physical Therapy', '187 Summer Street, Ste. 3', 'Kingston, MA 02364'] 
const crossFitText = ['CrossFit 1620', '10 Cedarhill Park Drive','Cedarville, MA 02360']
const Redpoint = () => (
  <Box display='flex' flexDirection="column" justifyContent="center">
    <LocationOnTwoToneIcon sx={{color:"#fff", marginLeft:'auto', marginRight:'auto'}} fontSize="large" />
    {redpointText.map(text => (
        <Typography color='white' sx={{textAlign:'center'}}>
          {text}
        </Typography>
    ))}
    <Link variant='body1' href="https://www.redpointpt.com/" color="#fff" sx={{textAlign:'center'}}>
        redpointpt.com
    </Link>
  </Box>
);

const CrossFit = () => (
  <Box display='flex' flexDirection="column" justifyContent="center">
    <LocationOnTwoToneIcon sx={{color:"#fff", marginLeft:'auto', marginRight:'auto'}} fontSize="large" />
    {crossFitText.map(text => (
        <Typography color='white' sx={{textAlign:'center'}}>
          {text}
        </Typography>
    ))}
    <Link variant='body1' href="https://crossfit1620.com/" color="#fff" sx={{textAlign:'center'}}>
      crossfit1620.com
    </Link>
  </Box>
);

export const Contact = () => {
  return (
    <Fade appear in timeout={1000} >
      <Box justifyContent='center' display='flex' mt={5} mb={5}>
        <Box p={2} 
        sx={{
          display: 'flex', 
          justifyContent:'center',
          flexDirection: {xs:'column', md: 'row'},
          backgroundColor: '#C42D2D',
          borderRadius:2, 
          boxShadow: 4
          }}>
            <Box maxWidth='md' justifyContent='space-between' p={3} mt={{xs: 2, md:0}} id="contact">
              <Typography color='white' sx={{textAlign:'center'}}>
                m.schena.massage@gmail.com
              </Typography>
              <Typography color='white' gutterBottom sx={{textAlign:'center'}}>
                508-789-1033
              </Typography>
              <Stack spacing={5} direction={{xs:'column', md:'row'}}>
                <Redpoint />
                <CrossFit />
              </Stack>
            </Box>
        </Box>
      </Box>
    </Fade>
  )
}