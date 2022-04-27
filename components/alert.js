import React, { useEffect, useState, useContext } from "react";
import AlertContext from "../context/AlertContext";
import Toast from "./toast";

const Alert = () => {
	const ctx = useContext(AlertContext);
	const [showToast, setShowToast] = useState(false);

	useEffect(() => {
		if (ctx.message) {
			setShowToast(true);
		}
	}, [ctx]);

	const handleClose = () => {
		ctx.clearAlert();
		setShowToast(false);
	};

	const { title, message, type } = ctx;

	return (
		<div>
			{showToast && (
				<Toast
					title={title}
					message={message}
					comment={type === "error" ? "Please try again" : null}
					closeToast={handleClose}
				/>
			)}
		</div>
	);
};

export default Alert;
