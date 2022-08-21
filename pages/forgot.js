import {DecoratedButton, DecoratedLink} from "components/Decorated";
import React, {useState} from "react";

import {AuthBox} from "../components/AuthBox";
import {Input} from "../components/AuthBox/input";
import {GlowText} from "../components/GlowText";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  function submitForm(event) {
    event.preventDefault();

    const user = {
      email: email,
    };

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
