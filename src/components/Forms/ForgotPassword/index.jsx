import NavBar from "../Global/NavBar";
import FormGroup from "../Global/FormGroup";
import SubmitButton from "../Global/SubmitButton";

import styles from "./styles.module.css";

import SClogo from "../../../assets/sc_logo.png";

const ForgotPassword = () => {
	const formControls = [
		{ label: "Email", placeholder: "Jane@gmail.com", className: "full" },
		
	];

	return (
		<>
			<NavBar />
			<div className={styles.main}>
				<div className={styles.form_container}>
					<div className={styles.left}>
						<h1 className={styles.heading}>Forgot your password?</h1>
						<p className={styles.subheading}>
							No worries, enter your email below to get instructions
                            to reset your password
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
								I remember my password
							</span>
						</div>
					</div>
					<div className={styles.right}>
						<img
							src={SClogo}
							alt="logo"
							className={styles.SClogo}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;