import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Forms/SetupForms/Login";
import Register from "./components/Forms/SetupForms/Register";
import ForgotPassword from "./components/Forms/SetupForms/ForgotPassword";
import ResetPassword from "./components/Forms/SetupForms/ResetPassword";
import PageNotFound from "./components/PageNotFound";
import LiveTime from "./components/Global/Time";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/time" element={<LiveTime />} />
				<Route path="/" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
