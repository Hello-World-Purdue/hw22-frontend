import Link from "next/link";
import {useRouter} from "next/router";
import React, {useContext, useEffect, useState} from "react";

import {AuthBox} from "../components/AuthBox";
import {Input} from "../components/AuthBox/input";
import {DecoratedButton, DecoratedLink} from "../components/Decorated";
import {GlowText} from "../components/GlowText";
import AlertContext from "../context/AlertContext";
import AuthContext from "../context/AuthContext";
import {useAlreadyLoggedInCheck} from "../util/hooks/use-auth-guard";

export default function Register() {
  const {push} = useRouter();
  // states

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordWarning, setPasswordWarning] = useState("");
  const [diffPasswords, setDiffPasswords] = useState(false);
  const {setAlert} = useContext(AlertContext);
  const {signup, reset} = useContext(AuthContext);
  const ready = useAlreadyLoggedInCheck();
  // event handlers

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  async function submitForm(event: any) {
    event.preventDefault();

    if (password === confirmPassword) {
      // create a new user and send to the back end

      const newUser = {
        password: password,
        passwordConfirm: confirmPassword,
      };
      const token = new URLSearchParams(location.search).get("token");
      if (!token)
        return setAlert(
          "error",
          "No token provided",
          "Please check your email"
        );
      await reset({
        password,
        passwordConfirm: confirmPassword,
        token,
      }).catch((e) => {
        setAlert("error", "Could not reset password", e);
      });
      push("/login");
    } else {
      // create an error message (inconsistent password) and displays it

      setDiffPasswords(true);
      setPasswordWarning("Passwords do not match!");
    }

    return;
  }

  if (!ready) return null;
  return (
    <AuthBox>
      <div className="text-white sm:w-[400px]">
        <GlowText>Reset Password</GlowText>
        <div className="mt-5">
          {diffPasswords && <div>{passwordWarning}</div>}
        </div>
        <form onSubmit={submitForm}>
          <div>
            <Input
              labelText="New Password:"
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
        </form>
      </div>
    </AuthBox>
  );
}
