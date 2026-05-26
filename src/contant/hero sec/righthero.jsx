// RightHero.jsx
import React, { useContext } from 'react'; // 1. React aur useContext import kiya
import { ThemeContext } from './ThemeContext.jsx'; // Context import bilkul sahi hai

function RightHero() {
  // 2. Ab bina 'React.' ke direct useContext use karo
  const { theme } = useContext(ThemeContext); 
  
  return (
    <div className={theme.rightherocon}>
      <p>
        As a full-stack developer, I specialize in building complete web applications from scratch. 
        I manage everything from responsive visual design to database management, ensuring every 
        layer of the project is fast and scalable.
      </p>
    </div>
  );
}

export default RightHero;