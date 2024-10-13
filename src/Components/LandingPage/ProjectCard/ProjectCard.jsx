import React from "react";

function ProjectCard(props){
    const project = props.project
    return(
        <div className="md:w-1/4 w-3/4 md:mx-6 flex flex-col border-1 border-border rounded-md shadow-lg mb-6 overflow-hidden p-4 hover:scale-105 transition-all">
            <div className="flex flex-row justify-between">
                <h4 className="text-lg text-foreground font-bold inline-block">{project.title}</h4>
                <a className="text-link cursor-pointer" href={project.live_demo} target="_blank">{project.live_demo != ""?"Here":""}</a>
            </div>
            <p className="text-foreground mb-3">{project.desc}</p>
            <img className="rounded-lg mb-3 h-72 shadow-md object-cover" src={project.img}/>
            <div className="text-foreground text-sm">
                <span className="text-base font-medium">Tools: </span>
                {project.tools.map((tool, i)=>{
                    return <span key={i}>{tool}<span className={`${i+1 < project.tools.length?"":"hidden"}`}>,</span> </span>
                })}
            </div>
        </div>
    )
}

export default ProjectCard;