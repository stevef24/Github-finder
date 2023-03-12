import React from "react";
import { useContext } from "react";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
const UserResults = () => {
	const { state } = useContext(GithubContext);

	return (
		<>
			{!state.isLoading ? (
				<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:-grid-cols-3 md:grid-cols-2">
					{state.userData.map((user) => (
						<UserItem key={user.id} user={user} />
					))}
				</div>
			) : (
				<Spinner isLoading={state.isLoading} />
			)}
		</>
	);
};

export default UserResults;
