import React, { useContext, useEffect, useState } from "react";
import { w3cwebsocket as WebSocket } from "websocket";

import { CreateAnnouncementsButton } from "../components/AnnouncementForm";
import AnnouncementLabel from "../components/AnnouncementLabel";

import UserContext from "../context/UserContext";
import AuthContext from "../context/AuthContext";

import styles from "../styles/Home.module.css";
import Header from "components/header";

interface Announcement {
	label:
		| "Events"
		| "Food"
		| "Judging"
		| "Logistics"
		| "Sponsor"
		| "Miscellaneous";
	body: string;
	updatedAt: string;
}

const list: Announcement[] = [];

function Announcements() {
	const { getAnnouncements } = useContext(UserContext);
	const { isAuthenticated, user, logout } = useContext(AuthContext);
	const [annList, setAnnList] = useState<Announcement[]>(list);
	const [ws, setWs] = useState<any>();

	const setupWS = () => {
		const url =
			process.env.NODE_ENV === "production"
				? "wss://helloworldpurdue-api.herokuapp.com"
				: "ws://localhost:5000";
		const ws = new WebSocket(url, "echo-protocol");

		ws.onopen = function () {
			console.log("WebSocket Client Connected");
		};

		ws.onerror = function (error: any) {
			console.log("Connection Error: " + error.toString());
		};

		ws.onmessage = function (message: any) {
			// console.log("Received: '" + message.data + "'");
			// console.log("received: %s", message);
			const msg = JSON.parse(message.data + "");
			// console.log(annList);
			setAnnList([...annList, msg]);
		};

		ws.onclose = function () {
			console.log("echo-protocol Connection Closed");
			setTimeout(setupWS, 2900);
		};

		setWs(ws);
	};

	useEffect(() => {
		getAnnouncements().then((data: any) => {
			// console.log(d.announcements);
			setAnnList([...annList, ...data.announcements]);
		});
		setupWS();
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (ws) {
			ws.onmessage = function (message: any) {
				// console.log("Received: '" + message.data + "'");
				// console.log("received: %s", message);
				const msg = JSON.parse(message.data + "");
				// console.log(annList);
				setAnnList([...annList, msg]);
			};
		}
	}, [annList, ws]);

	return (
		<div className="">
			<Header title="Announcements" />
			{isAuthenticated && (user?.role === "ADMIN" || user?.role === "EXEC") && (
				<CreateAnnouncementsButton />
			)}

			{annList && annList.length > 0 ? (
				<div className="">
					{annList
						.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
						.map((announcement) => {
							return (
								<div
									key={announcement.updatedAt}
									className={styles.announcement}
								>
									<div className="row" style={{ width: "100%" }}>
										<div className="col">
											<AnnouncementLabel annType={announcement.label} />
										</div>
										<div className="w-100"></div>
										<div className="col announcements-time">
											{new Date(announcement.updatedAt).toLocaleString(
												"en-US",
												{
													weekday: "short", // long, short, narrow
													day: "numeric", // numeric, 2-digit
													year: "numeric", // numeric, 2-digit
													month: "short", // numeric, 2-digit, long, short, narrow
													hour: "numeric", // numeric, 2-digit
													minute: "numeric", // numeric, 2-digit
												}
											)}
										</div>
									</div>
									<div className={`${styles.annMessage} text-break`}>
										{announcement.body}
									</div>
								</div>
							);
						})}
				</div>
			) : (
				<div style={{ textAlign: "center", marginBottom: "10vh" }}>
					<h4 style={{ fontFamily: "backissues" }}>NO ANNOUNCEMENTS YET.</h4>
				</div>
			)}
		</div>
	);
}

export default Announcements;
