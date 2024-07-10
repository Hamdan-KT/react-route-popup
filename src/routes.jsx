import React from "react";
import Home from "./Home";
import Layout from "./Layout";
import Contact from "./Contact";
import About from "./About";
import NotFound from "./NotFound";
import Modal from "./Modal";
import Post from "./Post";

export const mainRoutes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "contact", element: <Contact /> },
			{ path: "about", element: <About /> },
			{ path: "*", element: <NotFound /> },
			{
				path: "modal/:id",
				element: <Post />,
			},
		],
	},
];

export const modalRoutes = [
	{
		path: "modal/:id",
		element: <Modal />,
	},
];
