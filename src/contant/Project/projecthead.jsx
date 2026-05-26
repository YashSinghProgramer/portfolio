import { ThemeContext} from "../hero sec/ThemeContext.jsx"
import { useContext } from "react"
function projecthead() {
  const { themeProject } = useContext(ThemeContext);
  return (
    <div className={themeProject.projecthead}>PROJECTS</div>
  )
}

export default projecthead