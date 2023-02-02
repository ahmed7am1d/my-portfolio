import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-primaryColorDark text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Al-Doori</title>
      </Head>

      <Header />

      {/* Hero */}
      <section className='hero snap-center'>
        <Hero />
      </section>

      {/* About */}

      {/* Experiences */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  )
}
