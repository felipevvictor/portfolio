import { BiLogoTypescript } from "react-icons/bi";
import { RiAngularjsFill, RiBootstrapFill, RiCss3Fill, RiDatabase2Fill, RiHtml5Fill, RiJavascriptFill, RiReactjsLine, RiTailwindCssFill, RiWordpressFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Technologies = () => {
    return (
        <div id="technologies" className="pb-24">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }} 
                initial={{ opacity: 0, y: -100 }} 
                transition={{ duration: 1.5 }} 
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }} 
                initial={{ opacity: 0, x: -100 }} 
                transition={{ duration: 1.5 }} 
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {[
                    { icon: <RiHtml5Fill className="text-7xl text-orange-400" />, duration: 2.5 },
                    { icon: <RiCss3Fill className="text-7xl text-white" />, duration: 3 },
                    { icon: <RiBootstrapFill className="text-7xl text-purple-600" />, duration: 5 },
                    { icon: <RiTailwindCssFill className="text-7xl text-blue-400" />, duration: 1.5 },
                    { icon: <RiJavascriptFill className="text-7xl text-yellow-300" />, duration: 3 },
                    { icon: <BiLogoTypescript className="text-7xl text-blue-600" />, duration: 3.5 },
                    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 4.5 },
                    { icon: <RiWordpressFill className="text-7xl text-blue-500" />, duration: 6 },
                    { icon: <RiAngularjsFill className="text-7xl text-red-600" />, duration: 4 },
                    { icon: <RiDatabase2Fill className="text-7xl text-gray-400" />, duration: 5 },
                ].map(({ icon, duration }, index) => (
                    <motion.div key={index} initial="initial" animate="animate" variants={iconVariants(duration)} className="p-4">
                        {icon}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Technologies;
