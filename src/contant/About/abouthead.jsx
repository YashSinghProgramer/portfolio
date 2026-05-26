// import Style from "./aboutdark.module.css";
import React, { useContext } from 'react';

import { ThemeContext } from '../hero sec/ThemeContext.jsx';
function AboutHead() {
  const { themeAbout } = useContext(ThemeContext);

  return (
    <div className={themeAbout.logo}>
      <h1>ABOUT ME</h1>
      <h2>
        I'm <span> Yash Rajput </span> Full Stack Developer / MERN Stack
        Developer
      </h2>
      <div className={themeAbout.para}>
        <h3>
          Currently, I am deep-diving into the world of
          <span> Full-Stack Development</span>, focusing on building
          high-performance web applications using <span >React</span>,
          <span>Vite</span>, and <span>Node.js</span>. My current projects revolve around merging
          traditional web interfaces with immersive<span>3D experiences</span>  using tools
          like Spline to create more engaging user journeys. Looking toward the
          future, I aim to specialize in interactive architecture and advanced
         <span>UI/UX</span>  technologies. My goal is to bridge the gap between creative
          design and complex engineering, eventually leading projects that
          redefine how users interact with the digital world through AI and 3D
          integration.
        </h3>
       <h3>
        <h2>Education:</h2>
        <ul>
          <li>BCA, KLP College, Rewari</li>
          <li> 12th (CBSE) Vivekanand Sr. Sec. School, Dharuhera</li>
          <li> 10th (CBSE) Vivekanand Sr. Sec. School, Dharuhera</li>
          </ul>
          </h3> 
          </div>
    </div>
  );
}
<span></span>;
export default AboutHead;
