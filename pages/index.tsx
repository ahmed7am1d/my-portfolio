import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-primaryColorDark text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 scroll-smooth 
     scrollbar-thumb-primaryColorGold scrollbar-thin'>
      <Head>
        <title>Al-Doori</title>
      </Head>

      <Header />

      <section id='hero'>
        <Hero />
      </section>

      <section id='about' className='pt-[100px]'>
        <About />
      </section>

      <section id='experience' className='pt-[100 px]  snap-none'>
        <WorkExperience />
      </section>

      <section id='skills' className='pt-[100px] snap-none'>
        <Skills />
      </section>


      <section id='projects' className='pt-[100px] snap-none'>
        <Projects/>
      </section>
      {/* Contact me */}
    </div>
  )
}
