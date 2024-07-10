import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { mainRoutes, modalRoutes } from "./routes";

const App = () => {
	const location = useLocation();
	const previousLocation = location.state?.previousLocation;

	const element = useRoutes(mainRoutes, previousLocation || location);
	const modalElement = useRoutes(modalRoutes, location);

	return (
		<div className="app">
			{element}
			{previousLocation && modalElement}
		</div>
	);
};

export default App;
