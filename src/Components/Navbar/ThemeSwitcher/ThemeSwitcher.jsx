import React, { useState, useEffect } from "react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function App({ toggleTheme }) {
    const [theme, setTheme] = useState("dark"); // Default theme to "dark"

    useEffect(() => {
        const currentTheme = localStorage.getItem("port_theme");
        if (currentTheme && currentTheme !== theme) {
            setTheme(currentTheme);
            if (currentTheme === "light") {
                toggleTheme();
            }
        }
    }, [theme, toggleTheme]);

    function changeTheme() {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        toggleTheme();
        localStorage.setItem("port_theme", newTheme);
    }

    return (
        <div onClick={changeTheme} className="cursor-pointer text-2xl md:text-3xl">
            {theme === "dark" ? <SunIcon className="text-yellow-300"/> : <MoonIcon />}
        </div>
    );
}
