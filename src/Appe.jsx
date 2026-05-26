import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx'; // Context import kiya

const Appe = () => {
  // useContext se theme aur toggleTheme function nikal liya
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
    <div className={theme.divchn}>
      {/* Direct toggleTheme function ko onClick par chala diya */}
      <button className={theme.btn} onClick={toggleTheme}>
        Click Me
      </button>
     
    </div>
     <div className={theme.divchn2}></div>
      </>
  );
};

export default Appe;