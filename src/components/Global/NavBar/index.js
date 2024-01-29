import React from "react";
import styles from "./styles.module.css";
import skinclub from "../../../assets/skinclub.png";

const NavBar = () => {
	return (
		<div className={styles.container}>
			<img src={skinclub} alt="skinclub" className={styles.image} />
		</div>
	);
};

export default NavBar;
