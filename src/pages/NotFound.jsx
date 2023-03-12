import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const NotFound = () => {
	return (
		<div className="hero">
			<div className="text-center hero-content">
				<div className="max-w-lg">
					<h1 className="text-8xl font-bold mb-8">oops!</h1>
					<p className="text-5xl mb-8">404 page not found </p>
					<NavLink to="/" className="btn  btn-lg">
						<FaHome className="mr-2" />
						Back to home
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
