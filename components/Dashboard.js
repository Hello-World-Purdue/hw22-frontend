import React, { useContext, useEffect, useState } from "react";

import AdminContext from "../context/AdminContext";
import AlertContext from "../context/AlertContext";

import UserInfo from "./userInfo";

import styles from "../styles/dashboard.module.css";

const Dashboard = () => {
	const [users, setUsers] = useState([]);

	const adminContext = useContext(AdminContext);
	const alertContext = useContext(AlertContext);

	useEffect(() => {
		adminContext.getUsers()
			.then((data) => {
				console.log("data", data);
				setUsers(data.users);
			})
			.catch((err) => {
				console.log(err.message);
			});
		// eslint-disable-next-line
	}, []);

	const setCurrentUser = (userId) => {
		const curUser = users.filter((user) => user.id === userId)[0];
		console.log(curUser);
		adminContext.setCurrentUser(curUser);
	};

	const handleAccept = (id, name) => {
		setCurrentUser(id);
		alertContext.setAlert(
			"confirm",
			"Accept User",
			`Accept ${name} to Hello World 2022?`,
			adminContext.acceptUser
		);
	};

	const handleReject = (id, name) => {
		setCurrentUser(id);
		alertContext.setAlert(
			"confirm",
			"Reject User",
			`Reject ${name} from Hello World 2022?`,
			adminContext.rejectUser
		);
	};

	const handleWaitlist = (id, name) => {
		setCurrentUser(id);
		alertContext.setAlert(
			"confirm",
			"Waitlist User",
			`Add ${name} to Hello World's waitlist?`,
			adminContext.waitlistUser
		);
	};

	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th className={styles.headerCell}>Name</th>
						<th className={styles.headerCell}>Email</th>
						<th className={styles.headerCell}>RSVP</th>
						<th className={styles.headerCell}>Checked In</th>
						<th className={styles.headerCell}>Accept</th>
						<th className={styles.headerCell}>Reject</th>
						<th className={styles.headerCell}>Waitlist</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user._id} className={styles.tableRow}>
							<UserInfo
								user={user}
								accept={handleAccept}
								reject={handleReject}
								waitlist={handleWaitlist}
							/>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
