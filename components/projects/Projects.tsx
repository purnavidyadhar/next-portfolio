import { project } from "@/types/main";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";

interface Props {
    projectsData: project[]
}

const Projects = ({ projectsData }: Props) => {

    const [projects, setProjects] = useState([...projectsData].reverse() as project[])
    const [viewAll, setViewAll] = useState(false)

    return (
        <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen">
            <h2 className="text-4xl text-center">Projects</h2>

            <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto flex flex-wrap justify-center gap-4 md:gap-10 mt-10">
                {projects.slice(0, viewAll ? projects.length : 6).map((p: project, i: number) => (
                    <div key={i} className="w-full md:w-[calc(50%-20px)] xl:w-[calc(33.33%-27px)] max-w-sm">
                        <ProjectCard {...p} />
                    </div>
                ))}
            </div>

            {projects.length > 6
                &&
                <ViewAll scrollTo='projects' title={viewAll ? 'Okay, I got it' : 'View All'} handleClick={() => setViewAll(!viewAll)} />
            }
        </SectionWrapper>
    )
}

export default Projects

type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export const ViewAll = ({ handleClick, title, scrollTo }: { handleClick: MouseEventHandler, title: string, scrollTo: string }) => {
    return (
        <>
            <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
            <div className="text-center -translate-y-24">
                {title === 'View All' ?
                    <button onClick={handleClick} className={`bg-violet-600 text-white px-4 ${title === 'View All' ? 'animate-bounce' : 'animate-none'} py-1.5 rounded-md hover:shadow-xl transition-all`}>
                        {title}
                    </button>
                    :
                    <Link
                        to={scrollTo}
                        className={`bg-violet-600 text-white px-4 ${title === 'View All' ? 'animate-bounce' : 'animate-none'} cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
                        offset={-60}
                        smooth={true}
                        duration={500}
                        // @ts-ignore
                        onClick={() => handleClick()}
                    >{title}</Link>
                }
            </div>
        </>
    )
}