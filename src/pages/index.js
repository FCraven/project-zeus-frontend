import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Button from '@material-ui/core/Button'



export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>Frank Craven ReMAX Realtor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
      <h1>Holla from the index home page</h1>
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </main>

    </div>
  )
}