import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();
const initialState = null;

export const AlertProvider = ({ children }) => {
	const [state, dispatch] = useReducer(alertReducer, initialState);

	const setAlert = (msg, type) => {
		dispatch({ type: "SET_ALERT", payload: { msg, type } });
		setTimeout(() => {
			dispatch({ type: "REMOVE_ALERT" });
		}, 3000);
	};
	return (
		<AlertContext.Provider value={{ setAlert, alert: state }}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
