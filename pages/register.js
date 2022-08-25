import Link from "next/link";
import {useRouter} from "next/router";
import React, {useContext, useState} from "react";

import {AuthBox} from "../components/AuthBox";
import {Input} from "../components/AuthBox/input";
import {DecoratedButton, DecoratedLink} from "../components/Decorated";
import {GlowText} from "../components/GlowText";
import AlertContext from "../context/AlertContext";
import AuthContext from "../context/AuthContext";
import styles from "../styles/Login.module.css";

export default function Register() {
  const {push} = useRouter();
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordWarning, setPasswordWarning] = useState("");
  const [diffPasswords, setDiffPasswords] = useState(false);
  const {setAlert} = useContext(AlertContext);
  const {signup} = useContext(AuthContext);

  // event handlers
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  async function submitForm(event) {
    event.preventDefault();

    if (password === confirmPassword) {
      // create a new user and send to the back end

      const newUser = {
        name: name,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
      };

      await signup(newUser).catch((e) => {
        setAlert("error", "Could not login", e);
      });
      push("/");
    } else {
      // create an error message (inconsistent password) and displays it

      setDiffPasswords(true);
      setPasswordWarning("Passwords do not match!");
    }

    return;
  }

  return (
    <AuthBox>
      <div className="text-white sm:w-[400px]">
        <GlowText>Sign Up</GlowText>
        <div className="mt-5">
          {diffPasswords && <div>{passwordWarning}</div>}
        </div>
        <form onSubmit={submitForm}>
          <div>
            <Input
              labelText="Name:"
              id="name"
              value={name}
              onChange={handleName}
              required
            />
          </div>
          <div>
            <Input
              labelText="Email:"
              id="email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div>
            <Input
              labelText="Password:"
              id="pw"
              type="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <div>
            <Input
              labelText="Confirm Password:"
              id="repeat_pw"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              required
            />
          </div>
          <div className="mt-2">
            <DecoratedButton>Submit</DecoratedButton>
          </div>
          <div className="mt-2 text-center">
            <DecoratedLink href="/login">
              Already Have an Account?
            </DecoratedLink>
          </div>
        </form>
      </div>
    </AuthBox>
  );
}
