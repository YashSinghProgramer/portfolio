import React from 'react'
import { ThemeContext } from '../hero sec/ThemeContext';
function skillhearder() {
    const {themeSkill} = React.useContext(ThemeContext);
  return (
    <div className={themeSkill.skillheadcon}>
        <div className={themeSkill.skillhead}>
      SKILLS
      </div>
      
    </div>
  )
}

export default skillhearder