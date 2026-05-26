// nav.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx'; // 1. Yeh import karna zaroorat tha


function Nav() {
  // Context se dono cheezein sahi se nikal li
  const { theme, toggleTheme } = useContext(ThemeContext);
 
  return (
    <div className={theme.navcn}>
      <div className={theme.nav}>
        <div className={theme.logo}>{"<Yash />"}</div>
        
        <ul>
          <li><a href="#home" className={theme.homebtn}>HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#project">PROJECT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="#resume">RESUME</a></li>
          

        </ul>

        <div className={theme.tongle}>
          {/* 2. theme.toggleTheme ki jagah sirf toggleTheme aayega */}
          <div className={theme.circle} onClick={toggleTheme}></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;