/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        sm:w-fit
        md:w-1/2 
        xl:w-1/2
        w-full
      bg-[#0B0C10]
        p-5
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 sm:snap-start '>

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Image className='w-24 h-24 rounded-lg p-2 xl:w-[140px] xl:h-[140px] object-contain object-center bg-primaryColorDark/50'
                    src={urlFor(experience?.companyImage).url()}
                    alt='Company image'
                    height='400'
                    width='400'
                />
            </motion.div>
            <div className='px-0 md:px-5 '>
                <h4 className='text-2xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-xl mt-2' >{experience?.company}</p>
                <div className='flex flex-wrap space-x-2 my-2 mt-3'>
                    {experience?.technologies?.map((tech) => (
                        <img
                            className='h-10 w-10 rounded-full'
                            key={tech?._id}
                            src={urlFor(tech?.image).url()}
                            alt={tech?.title}
                        />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>{new Date(experience?.dateStarted).toDateString()} - {experience?.dateEnded ? new Date(experience?.dateEnded).toDateString() : "Present"}</p>
                <ul className='list-disc space-y-4 m-5  text-sm'>
                    {experience?.points?.map((point,i) => (
                        <li key={i}>{point}</li>
                    ))}

                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard;