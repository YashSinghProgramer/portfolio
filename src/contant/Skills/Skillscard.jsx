import React from "react";
import { ThemeContext } from "../hero sec/ThemeContext";
const skillData = [
	{
		name: "HTML",
		logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
		totalProjects: "01",
	},
	{
		name: "CSS",
		logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
		totalProjects: "01",
	},
	{
		name: "JavaScript",
		logo: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
		totalProjects: "01",
	},
	{
		name: "React",
		logo: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
		totalProjects: "02",
	},
	{
		name: "Express.js",
		logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
		totalProjects: "01",
	},
	{
		name: "Mongo DataBase",
		logo: "https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000",
		totalProjects: "01",
	},
	// {
	//     name:"React",
	//     logo:"https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
	//     totalProjects:"01"
	// },
	// {
	//     name:"React",
	//     logo:"https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
	//     totalProjects:"01"
	// },
	// {
	//     name:"React",
	//     logo:"https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
	//     totalProjects:"01"
	// },
	{
		name: "Github",
		logo: "https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000",
		totalProjects: "00",
	},
];
function Skillscard() {
	const { themeSkill } = React.useContext(ThemeContext);

	return (
		<div className={themeSkill.skillsCardCon}>
			{skillData.map((skill, index) => (
				<div key={index}>
					<div className={themeSkill.skillCard}>
						<div className={themeSkill.skilllogo}>
							<img src={skill.logo} alt={skill.name} />
						</div>
						<div className={themeSkill.skilltextCon}>
							<div className={themeSkill.skillname}>{skill.name}</div>
							<div className={themeSkill.skillproject}>
								Total Projects: {skill.totalProjects}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Skillscard;
