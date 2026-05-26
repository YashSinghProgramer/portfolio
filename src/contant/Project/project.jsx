
import Projecthead from "./projecthead.jsx"
import Card from "./Card.jsx"
import Productmenu from "./productmenu.jsx"
import {useContext} from "react"
import { ThemeContext} from "../hero sec/ThemeContext.jsx"
import React, { useState } from 'react';
function project() {
  const { themeProject } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <div className={themeProject.project} id="project" >
        <Projecthead />
        <Productmenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Card selectedCategory={selectedCategory} />
    </div>
  )
}

export default project