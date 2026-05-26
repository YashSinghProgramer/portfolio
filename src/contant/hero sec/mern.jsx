import React from 'react'
import { ThemeContext } from './ThemeContext.jsx';
// import Style from "./hero.module.css"

function Mern() {
  const { theme } = React.useContext(ThemeContext);
  return (
    
    <div className={theme.mern}>
        <span className={theme.s1}>M</span>
        <span className={theme.s2}>E</span>
        <span className={theme.s3}>R</span>
        <span className={theme.s4}>N</span>
        </div>
  )
}

export default Mern;