import React from "react";
import Style from "./error.module.css";
import { Link } from "react-router-dom";
function error() {
	return (
		<div className={Style.errorcon}>
			<h1>404</h1>
			<img
				src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
				alt="404 image"
			/>
			<div className={Style.textoferror}>
				<h2>Look like you're lost</h2>
				<p>Now you are in the end of Internet</p>

				<Link to={"/"}>
					<button className={Style.homebtn}>Go to Home</button>
				</Link>
			</div>
		</div>
	);
}

export default error;
