import React from "react";
import { Link } from "react-router-dom";

import SocialButtons from "../Global/SocialButtons";
import FormGroup from "../Global/FormGroup";
import NavBar from "../Global/NavBar";
import SubmitButton from "../Global/SubmitButton";
import LineOr from "../Global/LineOr";

import styles from "./styles.module.css";

import SClogo from "../../../assets/sc_logo.png";

const Register = () => {
	const formControls = [
		{ label: "First Name", placeholder: "Jane", className: "half" },
		{ label: "Last Name", placeholder: "Doe", className: "half" },
		{ label: "Email", placeholder: "Jane@gmail.com", className: "full" },
		{ label: "Password", placeholder: "******", className: "full" },
	];

	return (
		<>
			<NavBar />
			<div className={styles.main}>
				<div className={styles.form_container}>
					<div className={styles.left}>
						<div className={styles.top}>
							<h1 className={styles.heading}>
								Create an account
							</h1>
							<div className={styles.subheading}>
								<span className={styles.already}>
									Already have an account?
								</span>
								<Link to="./login">
									<span className={styles.login_link}>
										Log in
									</span>
								</Link>
							</div>
							<SocialButtons className={styles.mb_24} />
							<LineOr className="mt_24" />
						</div>
						<div className={styles.bottom}>
							<div className={styles.form}>
								{formControls.map(
									({ label, placeholder, className }) => (
										<FormGroup
											label={label}
											placeholder={placeholder}
											className={className}
										/>
									)
								)}
							</div>
							<div className={styles.subs_container}>
								<input
									type="checkbox"
									className={styles.checkbox}
								/>
								<span className={styles.subscribe}>
									Subscribe to our monthly newsletter
								</span>
							</div>
							<p className={styles.terms}>
								<span>By clicking below you agree to our </span>{" "}
								<span className={styles.underline}>
									Terms of Service
								</span>{" "}
								<span>and </span>{" "}
								<span className={styles.underline}>
									Privacy Policy
								</span>
							</p>
							<SubmitButton buttonText="Sign up" />
							<div
								className={`${styles.terms} ${styles.center_align}`}
							>
								<span>Already have an account?</span>
								<Link to="./login">
									<span className={styles.underline}>
										Log in
									</span>
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<img
							src={SClogo}
							alt="logo"
							className={styles.sc_logo}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
