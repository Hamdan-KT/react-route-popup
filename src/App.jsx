import React from "react";
import {
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Contact from "./Contact";
import About from "./About";
import NotFound from "./NotFound";
import Modal from "./Model";

const App = () => {
	const location = useLocation();
	const previousLocation = location.state?.previousLocation;

	return (
		<div className="app">
			<Routes location={previousLocation || location}>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/contact/" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			{previousLocation && (
				<Routes>
					<Route path="/modal/:id" element={<Modal />} />
				</Routes>
			)}
		</div>
	);
};

export default App;
