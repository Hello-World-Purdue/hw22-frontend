import Link from 'next/link'
import React, {useState} from 'react'
import styles from '../styles/Login.module.css'

export default function Register() {
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordWarning, setPasswordWarning] = useState("");
  const [diffPasswords, setDiffPasswords] = useState(false);

  // event handlers
  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();

    if (password === confirmPassword) {
      // create a new user and send to the back end

      const user = {
        name: name,
        email: email,
        password: password
      }

      // TODO: check if the user details are saved in the object

      // TODO: send the user info to the backend

    }
    else {
      // create an error message (inconsistent password) and displays it
      console.log(diffPasswords)

      setDiffPasswords(true);
      setPasswordWarning("Passwords do not match!");

    }

    return;
  }

  return (
    <div className = {styles.loginBox}>
      <h4>Sign up! Enter your name, email and password.</h4>
      <br/>

      {diffPasswords && (
        <div>{passwordWarning}</div>
      )}

      <form onSubmit={submitForm}>
        <label>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleName}
          required
        />
        <br/>
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
        <label>
          Password:
        </label>
        <input
          type="text"
          id="pw"
          name="pw"
          value={password}
          onChange={handlePassword}
          required
        />
        <br/>
        <label>
          Confirm Password:
        </label>
        <input
          type="text"
          id="repeat_pw"
          name="repeat_pw"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          required
        />
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <Link href="/login">
          <a>Already Have An Account?</a>
        </Link>
      </form>
    </div>
  )
}