import React from "react";

import NavBar from "../Global/NavBar";
import FormGroup from "../Global/FormGroup";
import SubmitButton from "../Global/SubmitButton";

import styles from "./styles.module.css";

import SClogo from "../../../assets/sc_logo.png";

const ResetPassword = () => {
	const formControls = [
		{ label: "New Password", placeholder: "********", className: "full" },
		{
			label: "Confirm Password",
			placeholder: "********",
			className: "full",
		},
	];

	return (
		<>
			<NavBar />
			<div className={styles.main}>
				<div className={styles.form_container}>
					<div className={styles.left}>
						<h1 className={styles.heading}>Reset your password</h1>
						<p className={styles.subheading}>
							Create a new strong password, must be at least 8
							characters long
						</p>
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
						<SubmitButton buttonText="Reset Password" />
						<div className={styles.center_align}>
							<span className={styles.back_to_login}>
								Back to login
							</span>
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

export default ResetPassword;
