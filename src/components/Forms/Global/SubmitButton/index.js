import React from "react";
import styles from "./styles.module.css";

const SubmitButton = ({ buttonText }) => {
	return <button className={styles.submit_button}>{buttonText}</button>;
};

export default SubmitButton;
