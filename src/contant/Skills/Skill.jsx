import React from 'react'
import SkillHeader from './skillhearder';
import Skillheadline from './skillheadline';
import Skillscard from './Skillscard';
import { ThemeContext } from '../hero sec/ThemeContext';
function Skill() {
    const {themeSkill} = React.useContext(ThemeContext);
  return (
    <div className={themeSkill.skillCon} id="skills">
            <SkillHeader/>
            <Skillheadline/>
            <Skillscard/>
    </div>
  )
}

export default Skill;