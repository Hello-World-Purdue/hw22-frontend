import axios from "axios";
import React, {useEffect, useState} from "react";

import {User} from "./types";

axios.defaults.baseURL =
  process.env.NODE_ENV == "production"
    ? "https://helloworldpurdue-api.herokuapp.com"
    : "http://localhost:5000";

const initialState: {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
} = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const AuthContext = React.createContext({
  ...initialState,
  login: async (user: User) => {},
  logout: async () => {},
  signup: async (user: User) => {},
  forgot: async (email: string) => {},
  reset: async (formData: any) => {},
  update: async (user: User) => {},
  rsvp: async (id: string) => Promise.resolve(),
});

export const AuthContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let userdatastring: string | null = "";
    let userData = null;

    // console.log("page reloaded");
    if (typeof window !== "undefined") {
      userdatastring = localStorage.getItem("userdata");
    }

    if (userdatastring) {
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

  const loginHandler = async (user: User) => {
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
    } catch (err: any) {
      if (err.response) {
        throw err.response.data.error;
      }
      throw err.message;
    }
  };

  const logoutHandler = async () => {
    localStorage.removeItem("userdata");
    setState({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  };

  const signupHandler = async (user: User) => {
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
    } catch (err: any) {
      if (err.response) {
        throw err.response.data.error;
      }
      throw err.message;
    }
  };

  const forgotHandler = async (email: string) => {
    const requestBody = {
      email,
    };

    try {
      return (
        await axios.post("/api/auth/forgot", requestBody, {
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).data;
    } catch (err: any) {
      if (err.response) {
        throw err.response.data.error;
      }
      throw err.message;
    }
  };

  const updateUser = async (user: User) => {
    setState({
      ...state,
      user,
    });
  };

  const resetHandler = async (formData: any) => {
    try {
      await axios.post("/api/auth/reset", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err: any) {
      if (err.response) {
        throw err.response.data.error;
      }
      throw err.message;
    }
  };

  const rsvp = async (id: string) => {
    try {
      const res = await axios.post(
        `/api/users/${id}/rsvp`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      let userData = res.data.user;
      let local = JSON.parse(localStorage.getItem("userdata") ?? "{}");
      local.user = userData;
      localStorage.setItem("userdata", JSON.stringify(local));

      setState({
        ...state,
        user: userData,
      });
      return res.data.user.rsvp;
    } catch (err: any) {
      if (err.response) {
        throw err.response.data.error;
      }
      throw err.message;
    }
  };

  return (
    <AuthContext.Provider
      value={{
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
