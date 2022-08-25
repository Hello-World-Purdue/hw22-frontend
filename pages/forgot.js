import {DecoratedButton, DecoratedLink} from "components/Decorated";
import React, {useContext, useState} from "react";

import {AuthBox} from "../components/AuthBox";
import {Input} from "../components/AuthBox/input";
import {GlowText} from "../components/GlowText";
import AlertContext from "../context/AlertContext";
import AuthContext from "../context/AuthContext";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const {forgot} = useContext(AuthContext);
  const {setAlert} = useContext(AlertContext);
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  async function submitForm(event) {
    event.preventDefault();

    const res = await forgot(email).catch((e) => {
      setAlert("error", "Could not send email", e.message);
      return null;
    });

    if (!res) return;
    setAlert("success", "Check your inbox", res.msg);
    // TODO: sends the user info to the back end
  }

  return (
    <AuthBox>
      <div className="text-white">
        <GlowText>Forgot Password</GlowText>
        <form onSubmit={submitForm}>
          <Input
            id="email"
            value={email}
            onChange={handleEmail}
            required
            labelText="Email:"
          />

          <div className="mt-2">
            <DecoratedButton type="submit">Submit</DecoratedButton>
          </div>
          <div className="text-center mt-2">
            <DecoratedLink href="/login">
              Remembered your password?
            </DecoratedLink>
          </div>
        </form>
      </div>
    </AuthBox>
  );
}
