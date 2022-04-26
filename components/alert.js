import React, { useEffect, useState, useContext } from "react";
import AlertContext from "../context/AlertContext";
import Toast from "./toast";

const Alert = () => {
	const ctx = useContext(AlertContext);
	const [showToast, setShowToast] = useState(false);

	useEffect(() => {
		if (ctx.message && ctx.message.length() > 0) {
			setShowToast(true);
		}
	}, [ctx]);

    const handleClose = () => {
        ctx.clearAlert();
        setShowToast(false);
    }

	return <div>{showToast && <Toast  closeToast={handleClose} />}</div>;
};

export default Alert;
