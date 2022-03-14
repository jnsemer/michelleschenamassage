import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michelle Schena Massage</title>
        <meta name="Michelle Schena Massage, Licensed Massage Therapist" content="Massage Therapist" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.comingSoon}>
        <h1>Michelle Schena Massage <br /> Website Coming Soon! <br/> For inquiries, please email <br/> m.schena.massage@gmail.com </h1>
      </div>
    </div>
  )
}

export default Home
