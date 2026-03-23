'use client';
import { data } from "@/types/main";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Socials from "@/components/Socials";
import Experiences from "@/components/experiences/Experiences";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Header from "./Header"
import Certifications from "@/components/certifications/Certifications";
import LeetCode from "@/components/leetcode/LeetCode";
import Footer from "./Footer";

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from "react";

interface Props {
    data: data,
}

const HomePage = ({ data }: Props) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <ThemeProvider attribute='class' defaultTheme='dark'>
            <Header logo={data.main.name} />
            <Hero mainData={data.main} />
            <Socials socials={data.socials} />
            <About aboutData={data.about} name={data.main.name} />
            <Skills skillData={data.skills} />
            {data.leetcode && <LeetCode leetcodeData={data.leetcode} />}
            <Certifications certificationData={data.certifications} />
            <Projects projectsData={data.projects} />
            <Experiences experienceData={data.experiences} educationData={data.educations} />
            <Contact />
            <CallToAction />
            <Footer socials={data.socials} name={data.main.name} />
        </ThemeProvider>
    )
}

export default HomePage