import React from "react";
import Herosec from "./hero sec/herosec.jsx";

import About from "./About/about.jsx";
import Project from "./Project/project.jsx";
import { ThemeProvider } from "./hero sec/ThemeContext.jsx";
import Skill from "./Skills/Skill.jsx";
function portfolio() {
	return (
		<div>
			<ThemeProvider>
				<Herosec />
				<About />
				<Project />
				<Skill />
			</ThemeProvider>
		</div>
	);
}

export default portfolio;
