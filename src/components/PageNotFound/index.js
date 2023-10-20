import React from "react";

import SubmitButton from "../Forms/Global/SubmitButton";
import NavBar from "../Forms/Global/NavBar";

import "./styles.css";

import topRight from "../../assets/notFound/top-right.svg";
import bottomRight from "../../assets/notFound/bottom-right.svg";
import topLeft from "../../assets/notFound/top-left.svg";
import bottomLeft from "../../assets/notFound/bottom-left.svg";

const PageNotFound = () => {
	return (
		<>
			<NavBar />
			<div className="main">
				<div className="container">
					<h1 className="heading">404</h1>
					<h2 className="subheading">Page Not Found</h2>
					<span className="text">
						We&apos;re sorry, the page you requested could not be
						found
					</span>
					<div className="button_container">
						<SubmitButton
							buttonText="Let's Go Back To Home Page"
							className="page_not_found"
						/>
					</div>
				</div>
			</div>
			<div class="images">
				<img src={topRight} className="top_right" />
				<img src={bottomRight} className="bottom_right" />
				<img src={topLeft} className="top_left" />
				<img src={bottomLeft} className="bottom_left" />
			</div>
		</>
	);
};

export default PageNotFound;
