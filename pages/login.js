import Link from 'next/link'
import './login.css'

export default function Login() {
  return (
    <div className = "loginBox">
      <h6>Login. Enter your username and password.</h6>
      <form>
        <label>
          Username:
        </label>
        <input type="text" id="user" name="user" required></input>
        <br/>
        <label>
          Password:
        </label>
        <input type="text" id="pw" name="pw"></input>
        <br/>
        <input type="submit">Submit</input>
      </form>
    </div>
  )
}