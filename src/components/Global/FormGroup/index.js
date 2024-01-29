import React from "react";
import styles from "./styles.module.css";

const FormGroup = ({
	label = "",
	placeholder = "",
	type = "",
	className = "",
}) => {
	return (
		<div className={`${styles.form_group} ${styles[className]}`}>
			<label className={styles.label}>{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				className={styles.input}
			></input>
		</div>
	);
};

export default FormGroup;
