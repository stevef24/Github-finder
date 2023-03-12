import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";
const Navbar = ({ title }) => {
	return (
		<nav className="navbar mb-12 shadow-lg">
			<div className="container mx-auto">
				<div className="flex-none px-2 mx-2">
					<FaGithub className="inline pr-2 text-3xl" />
					<NavLink to="/" className="text-lg font-bold align-middle">
						{title}
					</NavLink>
				</div>
				<div className="flex-1 px-2 mx-2">
					<div className="flex justify-end">
						<NavLink to="/" className="btn btn-ghost btn-sm">
							Home
						</NavLink>
						<NavLink to="/about" className="btn btn-ghost btn-sm">
							About
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.defaultProps = { title: "Github Finder" };
Navbar.propTypes = { title: propTypes.string };

export default Navbar;
