import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL =
    process.env.NODE_ENV == "production"
        ? "https://helloworldpurdue-api.herokuapp.com"
        : "";

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const AuthContext = React.createContext(Object.assign(Object.assign({}, initialState), { login: (user) => { }, logout: () => { }, signup: (user) => { }, forgot: (email) => { }, reset: (formData) => { }, update: (user) => { }, rsvp: (id) => {
        return Promise.resolve();
    } }));

export const AuthContextProvider = (props) => {
    let userdatastring = "";
    let userData = null;

    const [state, setState] = useState(initialState);
    useEffect(() => {
        // console.log("page reloaded");
        if (typeof window !== "undefined") {
            userdatastring = localStorage.getItem("userdata");
        }
        if (userdatastring !== "") {
            userData = JSON.parse(userdatastring);
        }
        // console.log("userData", userData);
        setState({
            isAuthenticated: userData ? true : false,
            user: userData ? userData.user : null,
            token: userData ? userData.token : null,
        });
        // console.log("state set");
    }, []);

    const loginHandler = async (user) => {
        try {
            const res = await axios.post("/api/auth/login", user, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            localStorage.setItem("userdata", JSON.stringify(res.data));
            setState({
                isAuthenticated: true,
                user: res.data.user,
                token: res.data.token,
            });
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    const logoutHandler = () => {
        localStorage.removeItem("userdata");
        setState({
            isAuthenticated: false,
            user: null,
            token: null,
        });
    };

    const signupHandler = async (user) => {
        try {
            const res = await axios.post("/api/auth/signup", user, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            localStorage.setItem("userdata", JSON.stringify(res.data));
            setState({
                isAuthenticated: true,
                user: res.data.user,
                token: res.data.token,
            });
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    const forgotHandler = async (email) => {
        const requestBody = {
            email,
        };
        try {
            await axios.post("/api/auth/forgot", requestBody, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    const updateUser = (user) => {
        setState(Object.assign(Object.assign({}, state), { user: user }));
    };

    const resetHandler = async (formData) => {
        try {
            await axios.post("/api/auth/reset", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };

    const rsvp = async (id) => {
        try {
            const res = await axios.post(`/api/users/${id}/rsvp`, {}, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${state.token}`,
                },
            });
            let userData = res.data.user;
            let local = JSON.parse(localStorage.getItem("userdata"));
            local.user = userData;
            localStorage.setItem("userdata", JSON.stringify(local));
            setState(Object.assign(Object.assign({}, state), { user: userData }));
            return Promise.resolve(res.data.user.rsvp);
        }
        catch (err) {
            if (err.response) {
                return Promise.reject(err.response.data.error);
            }
            return Promise.reject(err.message);
        }
    };
    
    return (React.createElement(AuthContext.Provider, { value: {
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            token: state.token,
            login: loginHandler,
            logout: logoutHandler,
            signup: signupHandler,
            forgot: forgotHandler,
            reset: resetHandler,
            update: updateUser,
            rsvp,
        } }, props.children));
};

export default AuthContext;
