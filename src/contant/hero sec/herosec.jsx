// Herosec.jsx
import React, { useContext } from 'react'; // 1. useContext import kiya
import Nav from "./nav.jsx"; 
import Robot from "./robot.jsx";
import LeftHero from "./lefthero.jsx";
import Righthero from "./righthero.jsx";
import Mern from "./mern.jsx";
import { ThemeProvider, ThemeContext } from "./ThemeContext.jsx"; // 2. ThemeContext bhi import kiya

// Ek chota helper component banaya taaki context ka use kar sakein
function HeroContent() {
  // 3. Ab hum static Style use nahi karenge, balki context wala dynamic theme use karenge
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme.herocon} id='home'> {/* Ab yeh toggle hone par badlega! */}
      <Nav />
      <div className={theme.herossmallcon}>
        <LeftHero />
        <Righthero />
      </div>
      <Mern />
      <Robot />
    </div>
  );
}



export default HeroContent;