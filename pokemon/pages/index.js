import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const id = Math.floor(Math.random() * 100);

  return (
    <div className={styles.container}>
      <Head>
        <title>My fortunate pokemon</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Find my fortunate <a href={`/posts/${id}`}>pokemon</a> <br />:D
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>Howard Zhong</p>
      </footer>
    </div>
  )
}
