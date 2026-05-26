import Herosec from "./contant/hero sec/herosec.jsx"
import Appe from "./test.jsx";
import About from "./contant/About/about.jsx";
import Project from "./contant/Project/project.jsx";
import { ThemeProvider } from "./contant/hero sec/ThemeContext.jsx";
import Skill from "./contant/Skills/Skill.jsx";
import './App.css'
function App() {
  return <div >
    
    <ThemeProvider>
      <Herosec />
      <About />
      <Project />
      <Skill />
    </ThemeProvider>
       
  </div>
 
  
}

export default App;