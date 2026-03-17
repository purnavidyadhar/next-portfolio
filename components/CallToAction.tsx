import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { BiLinkExternal } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import SectionWrapper from "./SectionWrapper"

const CallToAction = () => {

    return (
        <SectionWrapper id='cta' className="xl:max-w-6xl my-24 lg:mx-10 xl:mx-auto mx-4 relative overflow-hidden flex flex-col items-center bg-gradient-to-r from-violet-700 to-purple-700 text-white rounded-2xl p-6 md:p-8 lg:px-12 lg:py-16 z-10 text-center">
            <div className="flex flex-col items-center max-w-2xl">
                <h2 className="text-2xl lg:text-4xl font-extrabold">Building <span className="text-yellow-400">Efficient</span> Solutions</h2>
                <h3 className="md:text-base lg:text-xl font-medium mt-1.5 text-gray-200">Focused on <span className="text-yellow-400">Web Development</span> & <span className="text-yellow-400">DSA</span></h3>
                <p className="text-sm md:text-base mt-2.5 md:mt-6">I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let&apos;s build something amazing together.</p>
                <div className="flex items-center gap-4 my-8">
                    <Link href="#contact" className="py-2.5 px-6 bg-white text-black font-semibold rounded-lg w-fit flex items-center gap-2 hover:shadow-xl transition-shadow cursor-pointer">
                        Get In Touch
                    </Link>
                    <Link href="https://github.com/purnavidyadhar" target="_blank" className="py-2.5 px-6 bg-violet-800 font-semibold rounded-lg w-fit flex items-center gap-2 hover:bg-violet-900 transition-all">
                        <FaGithub />
                        Follow on GitHub
                    </Link>
                </div>
            </div>
        </SectionWrapper >
    )
}

export default CallToAction