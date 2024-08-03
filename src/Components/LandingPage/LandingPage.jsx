import React, { useState } from "react";
import Typewriter from 'typewriter-effect';

function LandingPage(props){
    const [introOpacity, setintroOpacity] = useState("opacity-100")
    return(
        <>
            <div id="about" className="flex flex-col w-screen h-screen bg-black text-white">
                <div>
                    <div id="introString" className={`absolute z-10 h-screen w-screen bg-black text-2xl flex justify-center items-center transition-opacity ${introOpacity} delay-1000`}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hello There")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("I'm Siddharth Ramnani")
                                    .callFunction(()=>{
                                        const typewriterCursor = document.querySelector('.Typewriter__cursor');
                                        if(typewriterCursor){
                                            typewriterCursor.style.display = 'none';
                                        }
                                        setintroOpacity("opacity-0")
                                    })  
                                    .start()
                            }}
                        />
                    </div>
                    <span>I'm Siddharth Ramnani, a passionate <strong>Software Developer</strong> with a knock for building Web Applications and a keen interest in building SAAS products. Explore my projects, skills, and experiences to see what I can bring to your team or project</span>
                </div>
            </div>
        </>
    )
}

export default LandingPage;