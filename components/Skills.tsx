import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from '@/typings'

type Props = {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className='sectionHeaderTitle'>Skills</h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm text-center mt-[50px]">Hover over a skill for current proficiency</h3>
      </motion.div>

      <motion.div className="
        flex relative flex-col text-center justify-center items-center
        md:text-left
        xl:flex-row
        xl:px-10
        xl:space-y-0
        max-w-[2000px]
        mx-auto
        mt-[90px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-4 gap-5">
          {skills?.slice(0, skills?.length / 2).map((skill) => (
            <Skill key={skill?._id} skill={skill} />
          ))}
          {skills?.slice(skills?.length / 2, skills?.length).map((skill) => (
            <Skill key={skill?._id} skill={skill} directionLeft />
          ))}
        </div>


      </motion.div>
    </>
  )
}

export default Skills;