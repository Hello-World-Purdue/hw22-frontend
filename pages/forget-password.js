import Link from 'next/link'
import React, {useState} from 'react'
import styles from '../styles/Login.module.css'

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();

    const user = {
      email: email
    }

    // TODO: sends the user info to the back end
  }

  return (
    <div className = {styles.loginBox}>
      <h4>Forgotten your password? Please enter your email.</h4>
      <form onSubmit={submitForm}>
        <label>
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmail}
          required

        />
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <Link href="/login">
          <a>Remembered your password?</a>
        </Link>
      </form>
    </div>
  )
}