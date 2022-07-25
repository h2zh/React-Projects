import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Mainboard from '../components/Mainboard'
import unsplash from './api/unsplash'

export default function Home() {
  const onSearchSubmit = (term) => {
    
  }

  return (
    <div>
      <Header />
      <Mainboard />
    </div>
  )
}
