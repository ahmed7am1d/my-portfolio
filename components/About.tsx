import Image from 'next/image';
import profilPicAbout from '../public/Images/profilePicAbout.jpg';
import { motion } from 'framer-motion';
type Props = {}

const About = (props: Props) => {
    return (

        <>
            <h3 className='sectionHeaderTitle'>About</h3>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className='flex flex-col relative  h-screen text-center md:text-left md:flex-row
                       max-w-7xl px-10 justify-evenly mx-auto items-center'>

                <motion.div
                    className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                    md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] '
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    viewport={{ once: true }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 1.2 }}
                >

                    <Image src={profilPicAbout} alt='About profile picture'
                        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                    />
                </motion.div>
                <div className='space-y-10 px-0 md:px-10'>
                    <h4 className="text-4xl font-semibold">Here is <span className='underline decoration-primaryColorGold/50' >little</span> background</h4>
                    <p className='text-base' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem at quod quia. Quam minus, repellendus delectus ipsum praesentium, numquam id quae asperiores provident adipisci quas beatae. Ea vero explicabo neque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad odio aspernatur illum eveniet, provident qui unde a officiis aut saepe maiores voluptatum, blanditiis nesciunt debitis quidem ex culpa, porro eligendi.</p>
                </div>
            </motion.div>
        </>
    )
}

export default About