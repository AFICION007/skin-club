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
								Welcome to Skin Club
							</h1>
							<div className={styles.subheading}>
								<span className={styles.already}>
									Don&apos;t have an account?
								</span>
								<Link to="/">
									<span className={styles.login_link}>
										Sign up
									</span>
								</Link>
							</div>
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
							<div className={styles.forgot}>
								<span className={styles.forgot_underline}>
									Forgot your password
								</span>
							</div>
							<div className={styles.subs_container}>
								<input
									type="checkbox"
									className={styles.checkbox}
								/>
								<span className={styles.subscribe}>
									Remember me
								</span>
							</div>
							<SubmitButton buttonText="Log in" />
							<div
								className={`${styles.terms} ${styles.center_align}`}
							>
								<span>Don&apos;t have an account?</span>
								<Link to="/">
									<span className={styles.underline}>
										Sign up
									</span>
								</Link>
							</div>
						</div>
						<div className={styles.bottom}>
							<LineOr className="login" />
							<SocialButtons className="login" />
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
