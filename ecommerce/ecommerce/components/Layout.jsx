import React, { Children } from 'react'
import Head from 'next/head' // same thing as head in html. provide meta data about the website
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ( {children} ) => {
  return (
    <div className='layout'>
      <Head>
        <title>Demo Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout