import React from "react";
import styles from "./styles.module.css";

const SubmitButton = ({ buttonText, className }) => {
	return (
		<button className={`${styles.submit_button} ${styles[className]}`}>
			{buttonText}
		</button>
	);
};

export default SubmitButton;
