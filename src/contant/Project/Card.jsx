import {useContext} from 'react'
import { ThemeContext } from '../hero sec/ThemeContext.jsx'

const details=[
    {
        img:"",
        name:"Kilogram",
        desc:"A Instagram Clone UI, app using React and CSS.",
        btn1:"https://kilogramcom.vercel.app/",
        btn2:"<Code />",
        staus:"On Testing",
        catagory:"Frontend",
    },
    
]

function Card({ selectedCategory }) {
    
    
 const {themeProject} = useContext(ThemeContext);
// Map chalane se pehle array ko filter kiya
  const filteredDetails = details.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.catagory === selectedCategory;
  });
  return (
    
    <div className={themeProject.Cardcon} >
        <h1>We Are Working On Projects</h1>
   {filteredDetails.map((item,index)=>(

    <div className={themeProject.card} key={index}>

    <img src={item.img} alt='Project Img'/>
<h2>{item.name}<ul><li>{item.staus}</li></ul></h2>
<h4>{item.desc}</h4>
<div className={themeProject.btn}>
    <button className={themeProject.btn1}>{item.btn1}</button>
    <button className={themeProject.btn2}>{item.btn2}</button>
</div>

    </div> ))}
   </div>
  )
}

export default Card