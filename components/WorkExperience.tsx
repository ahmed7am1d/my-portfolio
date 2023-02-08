import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
type Props = {}

const WorkExperience = (props: Props) => {
    return (

        <div>
            <h3 className='sectionHeaderTitle mt-[100px] md:my-[20px]'>Experience</h3>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="h-auto flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
                <div className='w-full
                 flex space-x-5 
                 overflow-x-scroll overflow-y-hidden 
                 p-10 
                 snap-x snap-mandatory
                 sm:snap-center
                 sm:snap-mandatory scrollbar-thumb-primaryColorGold scrollbar-thin'>
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </div>
            </motion.div>
        </div>
    )
}

export default WorkExperience;