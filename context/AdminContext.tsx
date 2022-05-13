import axios from "axios";
import React, { useContext, useState } from "react";

import AuthContext from "./AuthContext";
import { User } from "./types";

const initialState: {
	currentUser: User | null;
	acceptedUsers: User[];
	rejectedUsers: User[];
	waitlistedUsers: User[];
} = {
	currentUser: null,
	acceptedUsers: [],
	rejectedUsers: [],
	waitlistedUsers: [],
};

const AdminContext = React.createContext({
	...initialState,
	setCurrentUser: (user: User) => {},
	acceptUser: () => {},
	acceptUsers: () => {},
	rejectUser: () => {},
	rejectUsers: () => {},
	waitlistUser: () => {},
	waitlistUsers: () => {},
});

export const AdminContextProvider = (props: React.PropsWithChildren<{}>) => {
	const authContext = useContext(AuthContext);
	const [state, setState] = useState(initialState);

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
		<AdminContext.Provider
			value={{
				currentUser: state.currentUser,
				acceptedUsers: state.acceptedUsers,
				rejectedUsers: state.rejectedUsers,
				waitlistedUsers: state.waitlistedUsers,
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
		</AdminContext.Provider>
	);
};

export default AdminContext;