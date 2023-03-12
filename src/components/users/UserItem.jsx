import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
	return (
		<div className="card shadow-md compact side bg-base-200">
			<div className="flex-row items-center space-x-4 card-body">
				<div>
					<div className="avatar shadow w-14 h-14 ">
						<img className="rounded-full" src={avatar_url} alt="Profile" />
					</div>
				</div>
				<div>
					<h2 className="card-title">{login}</h2>
					<Link
						className="text-base-content text-opacity-40"
						to={`/users/${login}`}
					>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: propTypes.object.isRequired,
};

export default UserItem;
