import AuthContext from "context/AuthContext";
import {useRouter} from "next/router";
import {FormEvent, useContext} from "react";

// var __log = console.log;
export default function Reset() {
  const {query, isReady} = useRouter();
  const {token} = query;
  const {reset} = useContext(AuthContext);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (!isReady) return;
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    reset({
      password: formData.get("pass"),
      passwordConfirm: formData.get("conf-pass"),
      token,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={token} type="hidden" />
      <div>
        <input name="pass" type="password" placeholder="New Password" />
      </div>
      <div>
        <input
          name="conf-pass"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <button disabled={!isReady} type="submit">
        Submit
      </button>
    </form>
  );
}
