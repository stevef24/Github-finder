import { createContext, useReducer } from "react";
import axios from "axios";
import gitHubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	const initialState = { userData: [], isLoading: false };
	const [state, dispatcher] = useReducer(gitHubReducer, initialState);

	const searchUsers = async (search) => {
		const params = new URLSearchParams({ q: search });
		const {
			data: { items },
		} = await axios.get(`https://api.github.com/search/users?${params}`);
		console.log(items);
		dispatcher({ type: "USERS", payload: items });
		dispatcher({ type: "LOADING", payload: false });
	};

	const clearSearch = () => {
		dispatcher({ type: "USERS", payload: [] });
	};

	return (
		<GithubContext.Provider
			value={{ state, dispatcher, searchUsers, clearSearch }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
