//import { CONTACT } from "../constants"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { motion } from "framer-motion";

const Contact = () => {
    return(
       <div id="contact" className="border-t border-stone-900 pb-20">
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 1, y: -100}} transition={{duration: 0.5}} className="my-10 text-center text-4xl">Social Media</motion.h2>
        <div className="text-center tracking-tighter">
            <div className="m-8 flex items-center justify-center gap-4 text-3xl">
                <motion.a whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} href="https://www.linkedin.com/in/felipe-victor/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin></FaLinkedin>
                </motion.a>
                <motion.a whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}} href="https://github.com/felipevvictor" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub></FaGithub>
                </motion.a>
                <motion.a whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} href="mailto:felipe.victor875@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <MdEmail></MdEmail>
                </motion.a>
            </div>
        </div>
       </div>
    )
}

export default Contact