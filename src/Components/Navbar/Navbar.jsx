import React, {useState} from "react";
import NavbarOption from "./NavbarOption";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

function Navbar(props){
    const [open, setOpen] = useState(false);
    const toggleTheme = props.toggleTheme;

    return(
        <div className="flex flex-col">
            <div className="flex flex-row justify-between md:px-20 px-3 h-12 md:h-16 items-center flex-wrap bg-background fixed w-screen z-10">
                <button className="text-foreground w-10 h-10 relative focus:outline-none md:hidden" onClick={() => setOpen(!open)}>
                    <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`} ></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`} ></span>
                    </div>
                </button>
                <div className="self-center flex-row justify-between content-center flex-nowrap h-fit hidden md:flex">
                    {props.navbarOptions.map(option => <NavbarOption key={option.href} text={option.text} href={option.href}/>)}
                </div>
                <div>
                <ThemeSwitcher toggleTheme={toggleTheme}/>
                </div>
            </div>
            <div className={`fixed bg-background md:px-20 px-3 mt-12 flex md:hidden flex-col w-full ${open? 'max-h-96' : 'max-h-0'} overflow-hidden transition-max-height duration-500 ease-in-out z-10`}>
                {props.navbarOptions.map(option => <NavbarOption key={option.href} text={option.text} href={option.href}/>)}
            </div>
        </div>
    )
}

export default Navbar;