import React from "react";
import { NavBar } from "./Navbar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div id="myApp" className="text-center">
			
			<div className="navBar"><NavBar/></div>
			
			<div className="container">
				<div className="jumbotrom"></div>
				<div className="cards"></div>
			</div>
			
			<div className="footer"></div>
		
		</div>
	);
};

export default Home;
