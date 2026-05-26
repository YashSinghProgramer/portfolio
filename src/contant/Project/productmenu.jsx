import React, {useContext} from 'react'
import { ThemeContext} from "../hero sec/ThemeContext.jsx"
function productmenu({ selectedCategory, setSelectedCategory }) {
  const {themeProject} = useContext(ThemeContext);
  return (
    <div className={themeProject.menu}>
        <ul>
           <li onClick={() => setSelectedCategory('All')}>All</li>
            <li onClick={() => setSelectedCategory('fullstack')}>Full Stack</li>
            <li onClick={() => setSelectedCategory('Frontend')}>Frontend</li>
            <li onClick={() => setSelectedCategory('Minor')}>Minor</li>
        </ul>
    </div>
  )
}

export default productmenu