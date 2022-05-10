import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import AuthContext from "./AuthContext";
import { Application, User } from "./types";

// axios.defaults.baseURL =
//   process.env.NODE_ENV === "production"
//     ? "https://helloworldpurdue-api.herokuapp.com"
//     : "http://localhost:5000";

axios.defaults.baseURL = "http://localhost:5000";

const initialState: {
	application: Application | null;
	user: User | null;
	currentUser: User | null;
	acceptedUsers: User[];
	rejectedUsers: User[];
	waitlistedUsers: User[];
} = {
	application: null,
	user: null,
	currentUser: null,
	acceptedUsers: [],
	rejectedUsers: [],
	waitlistedUsers: [],
	// allUsers: null,
};

const UserContext = React.createContext({
	...initialState,
	makeAnnouncement: (ancmnt: string) => {},
	getAnnouncements: () => {},
	getUsers: () => {},
	getUser: (id: string) => {},
	getUserApp: (id: string) => {},
	getAuthApp: () => {},
	updateProfile: (id: string, formData: any) => {},
	apply: (id: string, appData: any) => {},
	setCurrentUser: (user: User) => {},
	acceptUser: () => {},
	acceptUsers: () => {},
	rejectUser: () => {},
	rejectUsers: () => {},
	waitlistUser: () => {},
	waitlistUsers: () => {},
});

export const UserContextProvider = (props: React.PropsWithChildren<{}>) => {
	const authContext = useContext(AuthContext);

	const [state, setState] = useState(initialState);

	useEffect(() => {
		setState({
			...state,
			user: authContext.user,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authContext?.user]);

	// Get all users
	const getUsers = async () => {
		try {
			console.log("TOKEN", authContext.token);
			const res = await axios.get(`/api/users/`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${authContext.token}`,
				},
			});

			console.log("res.data", res.data);
			return Promise.resolve(res.data);
		} catch (err: any) {
			if (err.response) {
				return Promise.reject(err.response.data.error);
			}
			return Promise.reject(err.message);
		}
	};

	// Get the user by id
	const getUser = async (id: string) => {
		try {
			const res = await axios.get(`/api/users/${id}`);

			setState({
				...state,
				user: res.data,
			});
		} catch (err: any) {
			if (err.response) {
				throw err.response.data.error;
			}
			throw err.message;
		}
	};

	// Get application (user id)
	const getUserApp = async (id: string) => {
		try {
			const res = await axios.get(`/api/users/${id}/application`);

			setState({
				...state,
				application: res.data,
			});
		} catch (err: any) {
			if (err.response) {
				throw err.response.data.error;
			}
			throw err.message;
		}
	};

	const getAnnouncements = async () => {
		try {
			const res = await axios.get(`/api/announcement/`);
			return Promise.resolve(res.data);
		} catch (err: any) {
			if (err.response) {
				throw err.response.data.error;
			}
			throw err.message;
		}
	};

	const makeAnnouncement = async (ancmnt: string) => {
		try {
			const res = await axios.post("/api/announcement", ancmnt, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${authContext.token}`,
				},
			});

			return Promise.resolve(res);
		} catch (err: any) {
			if (err.response) {
				throw err.response.data.error;
			}
			throw err.message;
		}
	};

	// Get application (authorized user)
	const getAuthApp = async () => {
		try {
			const res = await axios.get("/api/users/application");

			setState({
				...state,
				application: res.data,
			});
		} catch (err: any) {
			if (err.response) {
				return Promise.reject(err.response.data.error);
			}
			return Promise.reject(err.message);
		}
	};

	// Edit profile
	const updateProfile = async (id: string, formData: any) => {
		try {
			const res = await axios.put(`/api/users/${id}`, formData, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${authContext.token}`,
				},
			});

			authContext.update(res.data.user);

			setState({
				...state,
				user: res.data.user,
			});
		} catch (err: any) {
			if (err.response) {
				throw err.response.data.error;
			}
			throw err.message;
		}
	};

	// Apply for hackathon
	const apply = async (id: string, appData: any) => {
		try {
			//appending as form data
			let data = new FormData();
			for (let key of Object.keys(appData)) {
				data.append(`${key}`, appData[key]);
			}

			const res = await axios.post(`/api/users/${id}/apply`, data, {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${authContext.token}`,
				},
			});

			setState({
				...state,
				application: res.data.app,
			});
		} catch (err: any) {
			if (err.response) {
				throw err.response.data.error;
			}
			throw err.message;
		}
	};

	// Used for accepting, rejecting, waitlisting
	const setCurrentUser = (user: User) => {
		setState({
			...state,
			currentUser: user,
		});
	};

	// Add user to accepted list
	const acceptUser = () => {
		if (!state.currentUser) return;

		let idx = state.acceptedUsers.findIndex(
			(usr) => usr?._id === state.currentUser?._id
		);

		if (idx !== -1) return;

		setState({
			...state,
			acceptedUsers: [...state.acceptedUsers, state.currentUser],
			rejectedUsers: state.rejectedUsers.filter(
				(usr) => usr?._id !== state.currentUser?._id
			),
			waitlistedUsers: state.waitlistedUsers.filter(
				(usr) => usr?._id !== state.currentUser?._id
			),
			currentUser: null,
		});
	};

	// Mass accept all users in accepted list
	const acceptUsers = async () => {
		try {
			let data = state.acceptedUsers;
			const res = await axios.post("/api/users/accept", data, {
				headers: {
					Authorization: `Bearer ${authContext.token}`,
				},
			});

			console.log(res.data);

			setState({
				...state,
				acceptedUsers: [],
			});
		} catch (err: any) {
			if (err.response) {
				throw err.response.data.error;
			}
			throw err.message;
		}
	};

	// Add current user to rejected list
	const rejectUser = () => {
		if (!state.currentUser) return;

		let idx = state.rejectedUsers.findIndex(
			(usr) => usr?._id === state.currentUser?._id
		);

		if (idx !== -1) return;

		setState({
			...state,
			rejectedUsers: [...state.rejectedUsers, state.currentUser],
			acceptedUsers: state.acceptedUsers.filter(
				(usr) => usr?._id !== state.currentUser?._id
			),
			waitlistedUsers: state.waitlistedUsers.filter(
				(usr) => usr?._id !== state.currentUser?._id
			),
			currentUser: null,
		});
	};

	// Mass reject users in rejected list
	const rejectUsers = async () => {
		try {
			let data = state.rejectedUsers;
			const res = await axios.post("/api/users/reject", data, {
				headers: {
					Authorization: `Bearer ${authContext.token}`,
				},
			});

			console.log(res.data);

			setState({
				...state,
				rejectedUsers: [],
			});
		} catch (err: any) {
			if (err.response) {
				throw err.response.data.error;
			}
			throw err.message;
		}
	};

	// Add current user to waitlist
	const waitlistUser = () => {
		if (!state.currentUser) return;

		let idx = state.waitlistedUsers.findIndex(
			(usr) => usr?._id === state.currentUser?._id
		);

		if (idx !== -1) return;

		setState({
			...state,
			waitlistedUsers: [...state.waitlistedUsers, state.currentUser],
			acceptedUsers: state.acceptedUsers.filter(
				(usr) => usr?._id !== state.currentUser?._id
			),
			rejectedUsers: state.rejectedUsers.filter(
				(usr) => usr?._id !== state.currentUser?._id
			),
			currentUser: null,
		});
	};

	// Mass add users to waitlist
	const waitlistUsers = async () => {
		try {
			let data = state.waitlistedUsers;
			const res = await axios.post("/api/users/waitlist", data, {
				headers: {
					Authorization: `Bearer ${authContext.token}`,
				},
			});

			setState({
				...state,
				waitlistedUsers: [],
			});
		} catch (err: any) {
			if (err.response) {
				throw err.response.data.error;
			}
			throw err.message;
		}
	};

	return (
		<UserContext.Provider
			value={{
				user: state.user,
				application: state.application,
				currentUser: state.currentUser,
				acceptedUsers: state.acceptedUsers,
				rejectedUsers: state.rejectedUsers,
				waitlistedUsers: state.waitlistedUsers,
				// allUsers: state.allUsers,
				getUsers,
				getUser,
				getUserApp,
				getAuthApp,
				updateProfile,
				apply,
				getAnnouncements,
				makeAnnouncement,
				setCurrentUser,
				acceptUser,
				acceptUsers,
				rejectUser,
				rejectUsers,
				waitlistUser,
				waitlistUsers,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContext;
