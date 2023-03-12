import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ isLoading }) => {
	return (
		<div className="flex justify-center">
			<ClipLoader
				color="#b3863f"
				loading={isLoading}
				size={150}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Spinner;
