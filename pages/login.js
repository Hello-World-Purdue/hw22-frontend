import Link from "next/link";
import React, { useState, useContext } from "react";
import styles from "../styles/Login.module.css";

// Context imports
import AuthContext from "../context/AuthContext";
import AlertContext from "../context/AlertContext";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isChecked, setIsChecked] = useState(false);

	const { login } = useContext(AuthContext);
	const { setAlert } = useContext(AlertContext);

	const handleOnCheck = () => {
		setIsChecked(!isChecked);
	};

	const handleUsername = (event) => {
		setUsername(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	function submitForm(event) {
		event.preventDefault();

		// create a user object

		const user = {
			email: username,
			password: password,
		};

		// TODO: send the user object to the back end
    	login(user);
	}

	return (
		<div className={styles.loginBox}>
			<h4>Login. Enter your username and password.</h4>
			<form onSubmit={submitForm}>
				<label>Username:</label>
				<input
					type="text"
					id="user"
					name="user"
					onChange={handleUsername}
					required
				/>
				<br />
				<label>Password:</label>
				<input
					type="text"
					id="pw"
					name="pw"
					onChange={handlePassword}
					required
				/>
				<br />
				<button type="submit">Submit</button>
				<br />
				<input
					type="checkbox"
					id="remember"
					name="remember"
					checked={isChecked}
					onChange={handleOnCheck}
				/>
				<label>Remember Me</label>
				<br />
				<Link href="/forget-password">Forgot Password?</Link>
				<br />
				<Link href="/register">Create A New Account</Link>
			</form>
		</div>
	);
}
