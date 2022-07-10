import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/authContext";
import axios from "axios";

axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
        ? "https://helloworldpurdue-api.herokuapp.com"
        : "";

const initialState = {
    application: null,
    user: null,
    // allUsers: null,
};

const UserContext = React.createContext(Object.assign(Object.assign({}, initialState), { makeAnnouncement: (ancmnt) => { }, getAnnouncements: () => { }, getUsers: () => { }, getUser: (id) => { }, getUserApp: (id) => { }, getAuthApp: () => { }, updateProfile: (id, formData) => { }, apply: (id, appData) => { } }));

export const UserContextProvider = (props) => {
    const authContext = useContext(AuthContext);
    const [state, setState] = useState(initialState);
    useEffect(() => {
        setState(Object.assign(Object.assign({}, state), { user: authContext.user }));
    }, [authContext]);
    
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
            return Promise.resolve(res.data);
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    // Get the user by id
    const getUser = async (id) => {
        try {
            const res = await axios.get(`/api/users/${id}`);
            setState(Object.assign(Object.assign({}, state), { user: res.data }));
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    // Get application (user id)
    const getUserApp = async (id) => {
        try {
            const res = await axios.get(`/api/users/${id}/application`);
            setState(Object.assign(Object.assign({}, state), { application: res.data }));
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    // Get application (user id)
    const getAnnouncements = async () => {
        try {
            const res = await axios.get(`/api/announcement/`);
            return Promise.resolve(res.data);
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    const newAnnouncementHandler = async (ancmnt) => {
        try {
            const res = await axios.post("/api/announcement", ancmnt, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authContext.token}`,
                },
            });
            return Promise.resolve(res);
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    // Get application (authorized user)
    const getAuthApp = async () => {
        try {
            const res = await axios.get("/api/users/application");
            setState(Object.assign(Object.assign({}, state), { application: res.data }));
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    // Edit profile
    const updateProfile = async (id, formData) => {
        try {
            const res = await axios.put(`/api/users/${id}`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authContext.token}`,
                },
            });
            authContext.update(res.data.user);
            setState(Object.assign(Object.assign({}, state), { user: res.data.user }));
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    // Apply for hackathon
    const apply = async (id, appData) => {
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
            setState(Object.assign(Object.assign({}, state), { application: res.data.app }));
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    return (React.createElement(UserContext.Provider, { value: {
            getAnnouncements: getAnnouncements,
            makeAnnouncement: newAnnouncementHandler,
            user: state.user,
            application: state.application,
            // allUsers: state.allUsers,
            getUsers,
            getUser,
            getUserApp,
            getAuthApp,
            updateProfile,
            apply,
        } }, props.children));
};

export default UserContext;
