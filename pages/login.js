import Head from "next/head";
import Link from "next/link";
import React, {useContext, useState} from "react";

import {AuthBox} from "../components/AuthBox";
import {Input} from "../components/AuthBox/input";
import {DecoratedLink} from "../components/Decorated";
import {GlowText} from "../components/GlowText";
import AlertContext from "../context/AlertContext";
// Context imports
import AuthContext from "../context/AuthContext";
import styles from "../styles/Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useContext(AuthContext);
  const {setAlert} = useContext(AlertContext);

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
    // setAlert("success", "Login Success", "You are now logged in");
  }

  return (
    <AuthBox>
      <form onSubmit={submitForm}>
        <div className="belle">
          <GlowText>Hello World</GlowText>
          <h4 className={`${styles.sub2022} ${styles.glowText}`}>2022</h4>
        </div>
        <div>
          <Input
            labelText="Username:"
            type="text"
            onChange={handleUsername}
            required
            value={username}
            id="user"
          />
        </div>
        <div className="mt-3">
          <Input
            labelText="Password:"
            type="password"
            id="pw"
            onChange={handlePassword}
            value={password}
            required
          />
        </div>

        {/* <button type="submit">Submit</button> */}
        <div className="text-center mt-2">
          <DecoratedLink href="/forgot">Forgot Password?</DecoratedLink>
        </div>
        <div className="text-center mt-2">
          <DecoratedLink href="/register">Create A New Account</DecoratedLink>
        </div>
      </form>
    </AuthBox>
  );
}

export default function () {
  return (
    <>
      <Head>
        <title>Login | Hello World Purdue</title>
      </Head>
      <Login />
    </>
  );
}
