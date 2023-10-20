import React from "react";
import { social_buttons } from "../constants";
import styles from "./styles.module.css";

const SocialButtons = ({ className }) => {
	return (
		<div className={`${styles.social_buttons} ${styles[className]}`}>
			{social_buttons.map(({ logo_src, social_media }) => (
				<button type="button" className={styles.social_button}>
					<div className={styles.button_content}>
						<img src={logo_src} className={styles.icon} />
						<span className={styles.social_text}>
							Continue with {social_media}
						</span>
					</div>
				</button>
			))}
		</div>
	);
};

export default SocialButtons;
