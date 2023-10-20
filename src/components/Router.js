import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Forms/Login";
import Register from "./Forms/Register";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
