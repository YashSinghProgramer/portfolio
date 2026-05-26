import React, { createContext, useState, useEffect } from 'react';
import heroLight from './hero.module.css';
import heroDark from './herodark.module.css';
import aboutLight from '../About/about.module.css';
import aboutDark from '../About/aboutdark.module.css';
import projectLight from '../Project/project.module.css';
import projectDark from '../Project/projectdark.module.css';
import skillDark from '../Skills/skilldark.module.css';
import skillLight from '../Skills/skill.module.css';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1. Pehle check karenge ki localStorage me pehle se koi theme save hai ya nahi
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('appTheme');
    return savedTheme === 'dark'; // Agar 'dark' save hai toh true, nahi toh false
  });

  const [currentCSS, setCSS] = useState(heroLight);
  const [currentThemeAbout, setThemeAbout] = useState(aboutLight);
  const [currentThemeProject, setThemeProject] = useState(projectLight);
  const [currentThemeSkill, setThemeSkill] = useState(skillLight);

  // 2. useEffect ka use karke CSS ko sync rakhenge aur localStorage me save karenge
  useEffect(() => {
    if (isDarkMode) {
      setCSS(heroDark);
      setThemeAbout(aboutDark);
      setThemeProject(projectDark);
      setThemeSkill(skillDark);
      localStorage.setItem('appTheme', 'dark'); // LocalStorage me dark save kiya
    } else {
      setCSS(heroLight);
      setThemeAbout(aboutLight);
      setThemeProject(projectLight);
      setThemeSkill(skillLight);
      localStorage.setItem('appTheme', 'light'); // LocalStorage me light save kiya
    }
  }, [isDarkMode]); // Jab bhi isDarkMode badlega, yeh chalega

  // 3. Toggle function ab ekdum simple ho gaya, bas boolean badlo
  function toggleTheme() {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <ThemeContext.Provider value={{ theme: currentCSS, toggleTheme, themeAbout: currentThemeAbout, themeProject: currentThemeProject, themeSkill: currentThemeSkill }}>
      {children}
    </ThemeContext.Provider>
  );
};