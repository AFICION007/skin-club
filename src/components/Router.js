import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import ResetPassword from "./Forms/ResetPassword";
import PageNotFound from "./PageNotFound";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
