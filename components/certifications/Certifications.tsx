import { certification } from "@/types/main"
import Image from "next/image"
import SectionWrapper from "../SectionWrapper"
import { motion } from "framer-motion"

interface Props {
    certificationData: certification[]
}

const Certifications = ({ certificationData }: Props) => {
    return (
        <SectionWrapper id="certifications" className="lg:min-h-screen py-20">
            <h2 className="text-4xl text-center mb-12">Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-4/5 mx-auto px-4 lg:px-0">
                {certificationData.map((c, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="flex items-center gap-5 bg-white dark:bg-grey-800 p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-violet-600/20 group"
                    >
                        <div className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 relative rounded-xl overflow-hidden bg-white p-2 border border-gray-100 dark:border-grey-700">
                             <Image 
                                src={c.image} 
                                alt={c.issuer} 
                                fill 
                                className="object-contain p-2" 
                                sizes="(max-width: 768px) 56px, 80px"
                             />
                        </div>
                        
                        <div className="flex flex-col justify-center">
                            <h3 className="text-base md:text-lg font-bold leading-tight group-hover:text-violet-600 transition-colors">
                                {c.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider font-semibold text-[10px] md:text-xs">
                                {c.issuer}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                {c.date}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}

export default Certifications
