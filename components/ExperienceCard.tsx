import { motion } from 'framer-motion';
import Image from 'next/image';
import blogicImage from '../public/Images/blogicImage.jpg'
import { SocialIcon } from 'react-social-icons';

type Props = {}

const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        sm:w-fit
        md:w-1/2 
        xl:w-1/2
        w-full
      bg-[#292929]
        p-5
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 sm:snap-start '>

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Image className='w-24 h-24 rounded-full xl:w-[140px] xl:h-[140px] object-cover object-center'
                    src={blogicImage}
                    alt='blogic selfie'
                />
            </motion.div>
            <div className='px-0 md:px-5 '>
                <h4 className='text-2xl font-light'>Software Engineer</h4>
                <p className='font-bold text-xl mt-1' ><span className=' text-orange-700'>b</span>logic</p>
                <div className='flex space-x-2 my-2'>
                    <SocialIcon url="https://twitter.com/aldooriDEV" fgColor="gray" bgColor="transparent" className='h-10 w-10 ' />
                    <SocialIcon url="https://twitter.com/aldooriDEV" fgColor="gray" bgColor="transparent" className='h-10 w-10 ' />
                    <SocialIcon url="https://twitter.com/aldooriDEV" fgColor="gray" bgColor="transparent" className='h-10 w-10 ' />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>
                <ul className='list-disc space-y-4 m-5  text-sm'>
                    <li>First month there was as internship. In the first month I built E-Shop using ASP.NET MVC.</li>
                    <li>Then I worked with developing and maintaining ASP.NET Core APIs solutions.</li>
                    <li>It was such great experience as it was my first job in my field.</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard;