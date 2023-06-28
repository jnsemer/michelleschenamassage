import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { Grid, Grow } from '@mui/material';
import { offerings }  from '../data/offerings';

export const Treatments = () => {
  return (
    <Grid container spacing={4} pt={4} id='treatments'>
      {offerings.map((offering, i) => (
          <Grow
          appear
          in
          style={{ transformOrigin: '0 0 0' }}
          {...({ timeout: 1000 *(i+1) } )}
          key={offering.title}
        >
          <Grid item xs={12} md={4} display='flex'>
            <ServiceCard title={offering.title} description={offering.desc} cost={offering.cost} time={offering.time}/>
          </Grid>
        </Grow>
        ))
      }
    </Grid>
  );
}