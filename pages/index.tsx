import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import ProfilePic from '../public/Images/profilePicture.jpg'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { GetStaticProps } from 'next'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover the portfolio of experienced software engineer, Ahmed Hamid Taha Al-Doori. Specializing in developing innovative and efficient software solutions, Al-Doori's portfolio showcases a range of diverse projects that demonstrate his expertise and passion for coding, Al-Doori's work showcases his technical skills and ability to create solutions that meet clients' needs. Explore the portfolio now at al-doori.ml and see how Al-Doori can help bring your software vision to life."
        />
        <meta name="author" content="Ahmed Hamid Al-Doori" />
        <meta name="keywords" content="Software engineer, Web developer, ReactJS, NextJS " />
        {/* For LinkedIn */}
        <meta property='og:description' content="Discover the portfolio of experienced software engineer, Ahmed Hamid Taha Al-Doori. Specializing in developing innovative and efficient software solutions, Al-Doori's portfolio showcases a range of diverse projects that demonstrate his expertise and passion for coding, Al-Doori's work showcases his technical skills and ability to create solutions that meet clients' needs. Explore the portfolio now at al-doori.ml and see how Al-Doori can help bring your software vision to life." />
        
      </Head>
      <div className='bg-primaryColorDark text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
      scroll-smooth
     scrollbar-thumb-primaryColorBlue scrollbar'>
        <Head>
          <title>Al-Doori</title>
        </Head>

        <Header socials={socials} />

        <section id='hero'>
          <Hero pageInfo={pageInfo} />
        </section>

        <section id='about' className='mt-[150px]'>
          <About pageInfo={pageInfo} />
        </section>

        <section id='experience' className='mt-[150 px]  snap-none'>
          <WorkExperience experiences={experiences} />
        </section>

        <section id='skills' className='mt-[150px] snap-none'>
          <Skills skills={skills} />
        </section>

        <section id='projects' className='mt-[150px] snap-none'>
          <Projects projects={projects} />
        </section>

        <section id='contact' className='mt-[150px] snap-none'>
          <ContactMe pageInfo={pageInfo} />
        </section>

        {/* Back to home */}
        <Link href='#hero'>
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <Image src={ProfilePic} alt='Profile picture' className='h-10 w-10 rounded-full
             filter grayscale hover:grayscale-0' />
            </div>
          </footer>
        </Link>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // NEXT.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};

export default Home;