import React from "react";
import styles from "./styles.module.css";

const LineOr = ({ className }) => {
	return (
		<div className={`${styles.or} ${styles[className]}`}>
			<div className={styles.hr} />
			<span className={styles.or_text}>Or</span>
			<div className={styles.hr} />
		</div>
	);
};

export default LineOr;
