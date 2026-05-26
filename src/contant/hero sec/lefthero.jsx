// lefthero.jsx
import React, { useContext } from 'react'; // 1. React aur useContext import kiya
import { ThemeContext } from './ThemeContext.jsx';

// 2. 'l' ko Capital 'L' kar diya component ke naam me
function LeftHero() {
  const { theme } = useContext(ThemeContext); // Ab direct useContext use kar sakte ho
  
  return (
    <>
    <div className={theme.leftherocon}>
      <h1>HI THERE !</h1>
      <h2>I'M <span>YASH RAJPUT</span></h2>
    </div>
    
    </>
  );
}

export default LeftHero; // Export me bhi Capital L