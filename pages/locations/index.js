import Head from 'next/head';
import styles from '../../styles/Locations.module.css'
import axios from 'axios'
import Link from 'next/link'

function Locations( { data } ) {
  console.log('DATA FROM SERVER ---> ', data)

  const locationMap = data.map((el,index) => {
    return (
      <li key={index}>
        <Link href={`/locations/${el}`}>
          {el}
        </Link>
       </li>
    )
  })

  return (
    <div className={''}>
      <Head>
        <title>Locations</title>
        <meta name="description" content="A list of locations available in Westchester, NY" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className={''}>
       This is the locationspage
       <ul>
         {locationMap}
       </ul>
     </main>
    </div>
  )
}

export async function getServerSideProps() {
  const { data }= await axios.get('https://projectzeusbackend.herokuapp.com/api/locations')
  return { props: { data } }
}

export default Locations;
