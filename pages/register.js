import Link from 'next/link'
import styles from '../styles/Login.module.css'

export default function Register() {

  return (
    <div className = {styles.loginBox}>
      <h4>Sign up! Enter your username and password.</h4>
      <form>
        <label>
          New Username:
        </label>
        <input type="text" id="user" name="user" required/>
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