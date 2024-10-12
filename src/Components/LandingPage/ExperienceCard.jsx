import React from "react";

function ExperienceCard(props){
    const data = props.data;
    const showLine = props.showLine;

    return(
        <div className="flex flex-row mb-2">
            <div className="flex flex-col items-center justify-center mr-2">
                <span className="min-h-3 min-w-3 bg-accent rounded-full"></span>
                <span className={`flex-grow w-1 mt-0.5 min-h-5 bg-accent`}></span>
            </div>
            <div className={`flex flex-col bg-card py-3 px-2 rounded-md mt-1 w-72 md:w-96 ${showLine?'mb-2':""} shadow-xl`}>
                <div className="text-secondary-foreground text-sm mb-1">{data.timestamps}</div>
                <div className="text-foreground text-sm md:text-lg font-semibold mb-1">{data.role}<span className="text-xs"> - {data.company}</span></div>
                {data.desc.map((item, i)=>{
                    return(<div key={i} className="text-muted-foreground text-sm mb-1">{item}</div>);
                })}
            </div>
        </div>
    )
}

export default ExperienceCard;