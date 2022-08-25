import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import React, {useContext, useEffect, useState} from "react";

import {AuthBox} from "../components/AuthBox";
import {Input} from "../components/AuthBox/input";
import {DecoratedButton, DecoratedLink} from "../components/Decorated";
import {GlowText} from "../components/GlowText";
import AlertContext from "../context/AlertContext";
// Context imports
import AuthContext from "../context/AuthContext";
import styles from "../styles/Login.module.css";
import {useAlreadyLoggedInCheck} from "../util/hooks/use-auth-guard";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {push} = useRouter();
  const {login, user} = useContext(AuthContext);
  const {setAlert} = useContext(AlertContext);

  const ready = useAlreadyLoggedInCheck();
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  async function submitForm(event) {
    event.preventDefault();

    // create a user object

    const user = {
      email: username,
      password: password,
    };

    // TODO: send the user object to the back end
    await login(user).catch((e) => {
      setAlert("error", "Could not login", e);
    });
    push("/");
    // setAlert("success", "Login Success", "You are now logged in");
  }
  if (!ready) return null;
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

        <div className="mt-2">
          <DecoratedButton>Submit</DecoratedButton>
        </div>
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
