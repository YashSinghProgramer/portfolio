import React, {useContext} from 'react'
import { ThemeContext } from '../hero sec/ThemeContext.jsx';
import logo from "./aboutlogo.png"
function Aboutnav() {
  const { themeAbout } = useContext(ThemeContext);

  return (
    <div className={themeAbout.nav}>
<img src={logo} alt="" />
<ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    
    <li><a href="#project">Project</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#contact">Contact</a></li>
    
   
</ul>
    </div>
  )
}

export default Aboutnav;