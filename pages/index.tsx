import { Container, makeStyles } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComingSoon } from '../components/ComingSoon'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <Container disableGutters maxWidth='xl' sx={{ justifyContent:'center',
      backgroundColor:"#C42D2D", display:'flex', height:'100vh', width:'100%', margin:'auto'}}>
      <Head>
        <title>Michelle Schena Massage</title>
        <meta name="Michelle Schena Massage, Licensed Massage Therapist" content="Massage Therapist" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
      </Head>
      <ComingSoon />
    </Container>
  )
}

export default Home
