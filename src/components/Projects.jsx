import {PROJECTS} from "../constants"
import { motion } from "framer-motion";



const Projects = () =>{
    return (
        <div id="projects" className="pb-4">
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}} className="my-20 text-center text-4xl">Some Projects</motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className="w-full lg:w-1/4">
                            <img src={project.image} width={250} height={250} alt={project.title} className="mb-6 rounded"/>
                        </motion.div>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className="w-full ml-2 max-w-xl lg:w-3/4">
                            <a href={project.link}><motion.h3 className="mb-2 font-semibold text-2xl">{project.title}</motion.h3></a>
                            <motion.p className="mb-4 text-stone-400">{project.description}</motion.p>
                            {project.technologies.map((tech, index) => (
                                <motion.span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>{tech}</motion.span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects