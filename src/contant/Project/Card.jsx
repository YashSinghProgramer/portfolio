import { useContext } from "react";
import { ThemeContext } from "../hero sec/ThemeContext.jsx";
import kilogramlogo from "./kilogram.png";
const details = [
	{
		img: kilogramlogo,
		name: "Kilogram",
		desc: "A Instagram Clone UI, app using HTML/CSS, React, Express.JS, MongoDB.",
		Link: "https://kilogramcom.vercel.app/",
		Codelink: "https://github.com/YashSinghProgramer/Kilogram.com",
		btn1: "Visit",
		btn2: "<Code />",
		staus: "Done",
		catagory: "fullstack",
	},
	{
		img: Hireus,
		name: "HireUs",
		desc: "A Interview Practice app using HTML/CSS, React, Express.JS, Gemini API.",
		Link: "https://hire-us-omega.vercel.app/",
		Codelink: "https://github.com/YashSinghProgramer/HireUs",
		btn1: "Visit",
		btn2: "<Code />",
		staus: "On Testing",
		catagory: "fullstack",
	},
];

function Card({ selectedCategory }) {
	const { themeProject } = useContext(ThemeContext);
	// Map chalane se pehle array ko filter kiya
	const filteredDetails = details.filter((item) => {
		if (selectedCategory === "All") return true;
		return item.catagory === selectedCategory;
	});
	return (
		<div className={themeProject.Cardcon}>
			{/* <h1>We Are Working On Projects</h1> */}
			{filteredDetails.map((item, index) => (
				<div className={themeProject.card} key={index}>
					<img src={item.img} alt="Project Img" />
					<h2>
						{item.name}
						<ul>
							<li>{item.staus}</li>
						</ul>
					</h2>
					<h4>{item.desc}</h4>
					<div className={themeProject.btn}>
						<a href={item.Link} target="_blank" rel="noopener noreferrer">
							<button className={themeProject.btn1}>{item.btn1}</button>
						</a>
						<a href={item.Codelink} target="_blank">
							<button className={themeProject.btn2}>{item.btn2}</button>
						</a>
					</div>
				</div>
			))}
		</div>
	);
}

export default Card;
