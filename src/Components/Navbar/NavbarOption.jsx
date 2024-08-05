import React from "react";

function NavbarOption(props){
    return(
        <a className="mr-8 md:hover:scale-110 transition-all text-lg font-semibold text-foreground" href={props.href}>{props.text}</a>
    )
}

export default NavbarOption