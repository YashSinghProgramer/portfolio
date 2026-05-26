import React from 'react'

import Aboutnav from './aboutnav'
import AboutHead from './abouthead'
import { useContext } from 'react'
import { ThemeContext } from '../hero sec/ThemeContext.jsx'


function About() {
  const { themeAbout } = useContext(ThemeContext);


  return (
    <>
   
    <div className={themeAbout.aboutcon} id='about'>
     <Aboutnav />
     <AboutHead />
    </div>
    </>
  )
}


export default About;