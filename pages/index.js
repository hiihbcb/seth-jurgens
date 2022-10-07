import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { useEffect, useState } from 'react';

export default function Home({ page }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((currentImageIndex) => {
          if (currentImageIndex === page.data.background.length - 1) {
            return 0
          } else {
            return currentImageIndex + 1
          }
        })
      }, page.data.seconds * 1000)
      return () => clearInterval(intervalId);
  }, [])

  const getBackgroundStyle = (index) => {
    if (index === currentImageIndex) {
      return styles.display
    } else if (index === currentImageIndex - 1 || (currentImageIndex === 0 && index === page.data.background.length - 1)) {
      return styles.old
    } else {
      return styles.hide
    }
  }

  return (
    <div>
      <Head>
        <title>{page.data.seo_title}</title>
        <meta name="description" content={page.data.seo_description} />
        <link rel="icon" href="/sj.ico" />
        <meta name="image" content={page.data.portrait.url} />
      </Head>

      <main className={styles.main} >
        {page.data.background.map((background, index) => (
          <div key={index} className={getBackgroundStyle(index)} style={{backgroundImage: `url(${background.image.url})` }} aria-label={background.image.alt}>
          </div>
        ))}
        <header className={styles.header}>
          <span className={styles.image}>
            <Image
              src={page.data.portrait.url}
              alt={page.data.portrait.alt}
              layout='fill'
            />
          </span>
          <span className={styles.text}>
            <p>{page.data.name}</p>
            <p>{page.data.username}</p>
          </span>
        </header>

        <div className={styles.content}>
          {page.data.links.map((link, index) => (
            <a key={index} className={styles.link} style={{color: link.gradient}} href={link.url.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={link.image.url}
                alt={link.image.alt}
                layout='fill'
              />
            </a>
          ))}
        </div>

        <footer className={styles.footer}>
          <p>Image by {page.data.background[currentImageIndex].author}</p>
        </footer>
      </main>
    </div>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('homepage')

  return {
    props: {
      page,
    },
  }
}
