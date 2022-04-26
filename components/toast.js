import React, { useContext } from "react";
import AlertContext from "../context/AlertContext";

const Toast = (props) => {
	const { title, message } = useContext(AlertContext);

	return (
		<div>
			<div>
				{" "}
				{/* title */}
				<div>{/* content */}</div>
				<div>{/* comment */}</div>
				<div>
					{/* buttons */}
					<button onClick={props.closeToast}>OK</button>
				</div>
			</div>
		</div>
	);
};

export default Toast;
