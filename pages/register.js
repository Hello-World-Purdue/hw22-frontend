import Link from 'next/link'
import styles from '../styles/Login.module.css'

export default function Register() {

  return (
    <div className = {styles.loginBox}>
      <h4>Sign up! Enter your name, email and password.</h4>
      <form>
        <label>
          Name:
        </label>
        <input type="text" id="name" name="name" required/>
        <label>
          Email:
        </label>
        <input type="text" id="email" name="email" required/>
        <br/>
        <label>
          Password:
        </label>
        <input type="text" id="pw" name="pw"/>
        <br/>
        <label>
          Confirm Password:
        </label>
        <input type="text" id="repeat_pw" name="repeat_pw"/>
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