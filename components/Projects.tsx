/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative
                flex flex-col text-left items-center justify-evenly
                md:flex-row
                max-w-full
                mx-auto
                h-full
                z-0">
                <div className="w-full h-full relative flex overflow-y-hidden overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thumb-primaryColorBlue scrollbar-thin">
                    {projects?.map((project, i) => (
                        <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
                       ">
                            <h3 className="sectionHeaderTitle">Projects</h3>
                            {/* Project Image */}
                            <motion.div className="w-fit h-fit" >
                                <Image src={urlFor(project?.image).url()} alt="mockup" className="w-[400px] lg:w-[500px] md:w-[600px] sm:w-[500px]" width='3000' height='2000' />
                            </motion.div>
                            {/* DIV [CaseStudy + techs + summary] */}
                            <div className="space-y-10 px-6 md:px-14 max-w-6xl ">
                                <h4 className=" sm:text-2xl md:text-4xl font-semibold text-center " >
                                    <span className="underline decoration-primaryColorBlue/50">Case Study {i + 1} of {projects?.length}: {" "}
                                    </span>
                                    {project?.title}
                                </h4>
                                <div className="flex items-center justify-center space-x-1">
                                    {project?.technologies?.map((tech) => (
                                        <img
                                            className="h-10 w-10"
                                            key={tech?._id}
                                            alt="Technology"
                                            src={urlFor(tech?.image).url()}
                                        />
                                    ))}
                                </div>
                                <p className="md:text-lg  text-center md:text-left">{project?.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full absolute top-[30%] bg-primaryColorBlue/10 left-0 h-[500px] -skew-y-12" />
            </motion.div>
        </>
    )
}

export default Projects;