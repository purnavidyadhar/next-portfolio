import { project } from "@/types/main"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaVideo } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const Project = ({ name, image, category, techstack, links, description }: project) => {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });
    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-2 bg-white dark:bg-grey-800 rounded-lg p-4 group transition-shadow hover:shadow-xl">

            <div className="relative overflow-hidden rounded-lg bg-violet-50">
                <Image alt={name} width={1000} height={1000} className="max-w-full h-48 max-h-full object-cover object-top rounded-lg transition-transform duration-300 group-hover:scale-110" src={image} />
                <div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-80 w-full h-full rounded-lg flex flex-col items-center gap-3 justify-center px-4 text-center">
                    {description && <p className="text-white text-[10px] md:text-xs leading-relaxed font-medium">{description}</p>}
                    <div className="flex items-center gap-4">
                        {links.visit.trim() &&
                            <Link href={links.visit} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95">
                                <BiLinkExternal size={18} />
                            </Link>
                        }
                        {links.code.trim() &&
                            <Link href={links.code} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95">
                                <FaGithub size={18} />
                            </Link>
                        }
                        {links.video.trim() &&
                            <Link href={links.video} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95">
                                <FaVideo size={18} />
                            </Link>
                        }
                    </div>
                </div>
            </div>

            <div className="my-2 flex flex-col gap-3">
                <h3 className="text-xl font-medium">{name}</h3>
                <p className="text-sm text-gray-400"> <span className="font-medium">Tech Stack:</span> {techstack}</p>
            </div>

        </motion.div>
    )
}

export default Project