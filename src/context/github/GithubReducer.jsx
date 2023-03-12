const gitHubReducer = (state, action) => {
	switch (action.type) {
		case "LOADING":
			return { ...state, isLoading: action.payload };
		case "USERS":
			return { ...state, userData: action.payload };
		default:
			break;
	}
};

export default gitHubReducer;
