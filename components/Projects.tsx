import { motion } from "framer-motion";
import Image from "next/image";
import mockup from '../public/Images/443-4437837_responsive-images-laptop-tablet-smartphone-png.png'
type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h3 className="sectionHeaderTitle">Projects</h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="h-screen relative
                flex flex-col text-left items-center justify-evenly
                md:flex-row
                max-w-full
                mx-auto
                z-0">
                <div className="relative w-full flex  overflow-y-hidden overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thumb-primaryColorGold scrollbar-thin">
                    {projects.map((project, i) => (
                        <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
                          p-2 md:p-[11rem] xl:p-44
                         h-screen
                        ">
                            <motion.div>
                                <Image src={mockup} alt="mockup" className="xl:w-[800px]" />
                            </motion.div>
                            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                <h4 className=" sm:text-2xl md:text-4xl font-semibold text-center " >
                                    <span className="underline decoration-primaryColorGold/50">Case Study {i + 1} of 5: {" "}
                                    </span>
                                    Google clone
                                </h4>
                                <p className="md:text-lg  text-center md:text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quaerat quibusdam. Assumenda sapiente dolorem, laboriosam tempore, architecto itaque eveniet corrupti, cupiditate voluptate molestias ducimus dolore eum id deleniti eaque at.</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full absolute top-[30%] bg-primaryColorGold/10 left-0 h-[500px] -skew-y-12" />
            </motion.div>
        </>
    )
}

export default Projects;