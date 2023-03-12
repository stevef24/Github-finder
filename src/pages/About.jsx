import React from "react";

const About = () => {
	return (
		<>
			<h1 className="text-6xl mb-4">Github Finder</h1>
			<p className="mb-4 text-2xl font-light">
				A React app to search GitHub profiles and see profile details. This app
				was created to familiarise my self with useReducer and useContext hooks
				in react as well using tailwind css and Daisy UI libaries.
				<br />
				<a href=""> Link to my github: </a>
				<strong>
					<a href="https://github.com/stevef24"> Stavf24</a>
				</strong>
				.
			</p>

			<p className="text-lg text-gray-400">
				styled with: Tailwind CSS and Daisey UI
			</p>
		</>
	);
};

export default About;
