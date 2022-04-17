import Link from 'next/link'
import React, {useState} from 'react'
import styles from '../styles/Login.module.css'

export default function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }


  return (
    <div className = {styles.loginBox}>
      <h4>Login. Enter your username and password.</h4>
      <form>
        <label>
          Username:
        </label>
        <input type="text" id="user" name="user" required/>
        <br/>
        <label>
          Password:
        </label>
        <input type="text" id="pw" name="pw" required/>
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <input
          type="checkbox"
          id="remember"
          name="remember"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <label>Remember Me</label>
        <br/>
        <Link href="/forget-password">
        Forgot Password?
        </Link>
        <br/>
        <Link href="/register">
          Create A New Account
        </Link>
      </form>
    </div>
  )
}