import React from "react";
import Moment from "react-moment";

import styles from "./styles.module.css";
import skinclub from "../../../assets/skinclub.png";

const LiveTime = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left_container}>
				<img src={skinclub} alt="skinclub" className={styles.image} />
			</div>
			<div className={styles.right_container}>
				<span className={styles.date}>
					<Moment format="dddd, MMMM D" />
				</span>
				<span className={styles.time}>
					<Moment format="hh:mm A" />
				</span>
			</div>
		</div>
	);
};

export default LiveTime;
