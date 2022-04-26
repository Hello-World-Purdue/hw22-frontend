import React, { useContext } from "react";
import styles from '../styles/modal.module.css';

const Toast = (props) => {
	// const { title, message } = useContext(AlertContext);
	const { title, message, comment, closeToast } = props;

	return (
		<div style={styles.modal}>
			<div>
				<strong>{title}</strong>
				<div>{message}</div>
				<div><small>{comment}</small></div>
				<div>
					<button onClick={closeToast}>OK</button>
				</div>
			</div>
		</div>
	);
};

export default Toast;
