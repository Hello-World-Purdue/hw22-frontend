import {loginBox} from "./login.module.css";

export default function Login() {
  return (
    <div className={loginBox}>
      <h6>Login. Enter your username and password.</h6>
      <form>
        <label>Username:</label>
        <input type="text" id="user" name="user" required />
        <br />
        <label>Password:</label>
        <input type="text" id="pw" name="pw" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
