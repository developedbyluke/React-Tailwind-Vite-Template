import React from "react";
import App from "./App.jsx";
import "./styles/main.scss";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<App />} />
		</>
	)
);

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
