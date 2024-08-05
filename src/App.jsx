import './App.css';
import React, { useState } from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import {NextUIProvider} from "@nextui-org/react";

function App() {

  const [theme, setTheme] = useState("");

  function toggleTheme(){
    if(theme == ""){
      setTheme("light-theme");
    }else{
      setTheme("");
    }
  }

  return (
    <div className={`App font-mono ${theme} overflow-hidden w-screen`}>
      <LandingPage toggleTheme={toggleTheme}/>
    </div>
  );
}

export default App;
