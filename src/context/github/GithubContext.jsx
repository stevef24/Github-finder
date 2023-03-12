import { createContext, useReducer } from "react";
import axios from "axios";
import gitHubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	// const [userData, setUserData] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);
	const initialState = { userData: [], isLoading: false };
	const [state, dispatcher] = useReducer(gitHubReducer, initialState);

	const fetchUsers = async () => {
		const response = await axios.get(`https://api.github.com/users`);
		dispatcher({ type: "USERS", payload: response.data });
		dispatcher({ type: "LOADING", payload: false });
	};

	return (
		<GithubContext.Provider value={{ state, dispatcher, fetchUsers }}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
