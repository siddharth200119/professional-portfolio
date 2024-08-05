import React from "react";

function ProjectCard(props){
    const project = props.project
    return(
        <div className="md:w-1/4 w-3/4 mx-6 flex flex-col bg-card rounded-md mb-6 overflow-hidden p-4">
            <img className="rounded-sm" src={project.img}/>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <span>{JSON.stringify(project.tools)}</span>
        </div>
    )
}

export default ProjectCard;