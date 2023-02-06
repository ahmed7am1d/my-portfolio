import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {}

const Skills = (props: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className='sectionHeaderTitle'>Skills</h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm text-center mt-[50px]">Hover over a skill for currency proficiency</h3>
      </motion.div>

      <motion.div className="
    flex relative flex-col text-center justify-center items-center
    md:text-left
    xl:flex-row
    xl:px-10
    xl:space-y-0
    max-w-[2000px]
    min-h-screen
    mx-auto
    h-screen
    "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="grid grid-cols-4 gap-5">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>

      </motion.div>
    </>
  )
}

export default Skills;