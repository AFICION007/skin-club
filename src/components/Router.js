import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import ForgotPassword from "./Forms/ForgotPassword";
import ResetPassword from "./Forms/ResetPassword";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Register />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/forgot-password" element={<ForgotPassword/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
