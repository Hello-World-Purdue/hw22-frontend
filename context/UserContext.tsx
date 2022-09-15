import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import AuthContext from "./AuthContext";
import { Announcement, Application, User } from "./types";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://helloworldpurdue-api.herokuapp.com"
    : "http://localhost:5000";

// axios.defaults.baseURL = "http://localhost:5000";

const initialState: {
	application: Application | null;
	user: User | null;
} = {
	application: null,
	user: null,
	// allUsers: null,
};

const UserContext = React.createContext({
	...initialState,
	makeAnnouncement: (ancmnt: Announcement) => {},
	getAnnouncements: (): any => {},
	getUser: (id: string) => {},
	getUserApp: (id: string) => {},
	getAuthApp: () => {},
	updateProfile: (id: string, formData: any) => {},
	apply: (id: string, appData: any) => {},
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
				return Promise.reject(err.response);
			}
			return Promise.reject(err.message);
		}
	};

	const makeAnnouncement = async (ancmnt: Announcement) => {
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

	return (
		<UserContext.Provider
			value={{
				user: state.user,
				application: state.application,
				// allUsers: state.allUsers,
				getUser,
				getUserApp,
				getAuthApp,
				updateProfile,
				apply,
				getAnnouncements,
				makeAnnouncement,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContext;
