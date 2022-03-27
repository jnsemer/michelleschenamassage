import React from 'react';
import { Card, CardContent, CardHeader, Chip, Typography, Box, CardActions, Button, Stack, Link } from '@mui/material'; 
import { makeStyles } from '@mui/styles';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';

interface CardProps {
  title: string; 
  description: string; 
  cost: number; 
  time: string;
}

const useStyles = makeStyles({
  container: {
    backgroundColor: '#F3F4EE',
  },
}); 

export const ServiceCard = (props: CardProps) => {
  const {title, description, cost, time} = props; 
  const classes = useStyles();
  return (
    <Card raised sx={{display:'flex', flexDirection:'column'}}>
      <CardHeader title={title}/>
      <CardContent sx={{ flexGrow:1}}>
        <Typography gutterBottom>
            {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ml:1, mb:1, alignItems:'flex-start', flexDirection:'column'}}>
        <Stack direction='row' spacing={2} width='100%' pb={2}>
          <Chip label={time}  color="secondary"  variant="outlined" icon={<AccessTimeTwoToneIcon />} />
          <Chip label={`\$${cost}`} color="secondary" variant="outlined" icon={<CreditCardTwoToneIcon />} />
        </Stack>
        <Link href="mailto:m.schena.massage@gmail.com" sx={{marginBottom: 2}} ><Button variant='contained'>email to book</Button></Link>
      </CardActions>
    </Card>
  )
}