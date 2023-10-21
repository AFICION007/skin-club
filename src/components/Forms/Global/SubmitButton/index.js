import React from "react";
import styles from "./styles.module.css";

const SubmitButton = ({
	buttonText = "",
	handleClick = () => {},
	className = "",
}) => {
	return (
		<button
			onClick={handleClick}
			className={`${styles.submit_button} ${styles[className]}`}
		>
			{buttonText}
		</button>
	);
};

export default SubmitButton;
