import React from "react";
import { Pasarela } from "./Pasarela";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div id="myApp" className="text-center">
			<div className="navBar"></div>
			{/* 1. navbar */}
			<div className="container">
			{/* 2. body: dentro del div classs container
				2.1. Jumbotron
				2.2. Cards */}
			</div>
			<div className="footer"></div>
			{/* 3.footer */}
		</div>
	);
};

export default Home;
