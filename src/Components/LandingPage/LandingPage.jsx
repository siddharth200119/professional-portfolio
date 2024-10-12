import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import { motion, useAnimation } from 'framer-motion';
import Navbar from "../Navbar/Navbar";
import experience from "../../Data/experience";
import ExperienceCard from "./ExperienceCard";
// import ProjectCard from "./ProjectCard/ProjectCard";
// import projects from "../../Data/projects";

function LandingPage(props){
    const controls = useAnimation();
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const toggleTheme = props.toggleTheme
    useEffect(() => {
        if (isTypingComplete) {
            controls.start({
                backgroundColor: 'transparent',
                top: "auto",
                left: "auto",
                height: 'auto',
                width: 'auto',
                transition: { duration: 1 }
            }).then(() => {
                // Set height and width to auto after the animation completes
                const introStringDiv = document.getElementById('introString');
                if (introStringDiv) {
                    introStringDiv.style.position = 'static';
                    introStringDiv.style.height = 'auto';
                    introStringDiv.style.width = 'auto';
                    introStringDiv.classList.add("md:justify-start")
                    introStringDiv.classList.replace("z-10", "z-1")
                }
            });
        }
    }, [isTypingComplete, controls]);

    const navbarOptions = [
        {
            text: "About",
            href: "#about"
        },
        {
            text: "Experience",
            href: "#experience"
        },
        {
            text: "Projects",
            href: "#projects"
        },
        {
            text: "Skills",
            href: "#skills"
        }
    ]

    return(
        <div className="w-screen">
            <Navbar toggleTheme={toggleTheme} navbarOptions={navbarOptions}/>
            <div id="about" className="flex flex-col md:flex-row w-full max-h-screen min-h-screen bg-background text-foreground px-3 md:px-20 pt-40 md:py-0 md:items-center">
                <div className="md:w-1/2 mb-10 md:px-32">
                    <div className="h-10 flex justify-start md:h-20 items-start w-full">
                        <motion.div
                            id="introString"
                            className={`absolute z-10 bg-background top-0 left-0 md:text-4xl font-bold text-nowrap text-2xl flex justify-center items-center`}
                            initial={{ opacity: 1, height: '100vh', width: '100vw' }}
                            animate={controls}
                        >
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Hello There")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("I am")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Siddharth Ramnani")
                                        .pauseFor(500)
                                        .callFunction(() => {
                                            const typewriterCursor = document.querySelector('.Typewriter__cursor');
                                            if (typewriterCursor) {
                                                typewriterCursor.style.display = 'none';
                                            }
                                            setIsTypingComplete(true);
                                        })
                                        .start()
                                }}
                            />
                        </motion.div>
                    </div>
                    <span className="text-base md:text-xl">I'm a passionate <strong>Software Developer</strong> with a knock for building Web Applications and a keen interest in building SAAS products. Explore my projects, skills, and experiences to see what I can bring to your team or project</span>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                    <div className="md:w-3/5 bg-card rounded-full overflow-hidden">
                        <img className="object-contain" src="/assets/images/intro.png"/>
                    </div>
                </div>
            </div>
            <div id="experience" className="flex flex-col flex-wrap px-3 md:px-20 bg-secondary items-center justify-center">
                <h1 className="text-foreground text-3xl md:text-5xl mt-5 mb-6 font-bold">EXPERIENCE</h1>
                <div className="flex flex-col pb-4">
                    {experience.map((work, i)=>{
                        return(<ExperienceCard key={i} data={work} showLine={i+1 < experience.length}/>);
                    })}
                </div>
            </div>
            {/* <div id="projects" className="flex flex-col flex-wrap px-3 md:px-20 bg-secondary items-center justify-center">
                <h1 className="text-foreground text-3xl md:text-6xl mt-5">MY PROJECTS</h1>
                <div className="flex flex-row flex-wrap mt-10 md:mt-20 justify-center items-center">
                    {projects.map((project, i)=>{
                        return(<ProjectCard key={i} project={project}/>)
                    })}
                </div>
            </div> */}
        </div>
    )
}

export default LandingPage;