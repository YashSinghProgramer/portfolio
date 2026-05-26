import React from 'react'
import { ThemeContext } from '../hero sec/ThemeContext';
function skillheadline() {
    const {themeSkill} = React.useContext(ThemeContext);
  return (
   <div className={themeSkill.skillheadlinecon}>
     <div className={themeSkill.skillheadline}>
      I am from India and currently living in Haryana. I am doing BCA and  I will graduate soon. I am a Full Stack Developer and I have expore myself in<span> MERN Stack</span> . I am a quick learner and I am always eager to learn new technologies. I am also a good team player and I am always willing to help my teammates.
      </div>
      </div>
  )
}

export default skillheadline