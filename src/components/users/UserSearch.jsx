import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
	const [search, setSearch] = useState("");
	const { state, dispatcher, searchUsers, clearSearch } =
		useContext(GithubContext);
	const { setAlert } = useContext(AlertContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (search === "") {
			setAlert("Please enter something", "Error");
		} else {
			searchUsers(search);
			setSearch("");
			dispatcher({ type: "LOADING", payload: false });
		}
	};

	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
			<div>
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<div className="relative">
							<input
								type="text"
								className="w-full pr-40 bg-gray-200  input input-lg text-black"
								placeholder="search"
								value={search}
								onChange={(e) => {
									setSearch(e.target.value);
								}}
							/>
							<button
								className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
								type="submit"
							>
								go
							</button>
						</div>
					</div>
				</form>
			</div>
			<div>
				{state.userData.length > 0 && (
					<button className="btn-ghost btn-lg" onClick={clearSearch}>
						Clear
					</button>
				)}
			</div>
		</div>
	);
};

export default UserSearch;
