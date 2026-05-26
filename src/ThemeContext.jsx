import React, { createContext, useState } from 'react';
import Temp from './Appe.module.css';
import Temp2 from './Appe2.module.css';

// 1. Context create kiya
export const ThemeContext = createContext();

// 2. Provider Component banaya
export const ThemeProvider = ({ children }) => {
  let [tongel, tongch] = useState(0);
  let [currentCSS, setCSS] = useState(Temp);

  function toggleTheme() {
    if (tongel === 0) {
      tongch(1);
      setCSS(Temp2);
    } else {
      tongch(0);
      setCSS(Temp);
    }
  }

  return (
    // Jo bhi data bhejni hai, use value={{...}} me daal diya
    <ThemeContext.Provider value={{ theme: currentCSS, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};