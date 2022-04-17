import Link from 'next/link'
import styles from '../styles/Login.module.css'

export default function () {
  return (
    <div className = {styles.loginBox}>
      <h4>Forgotten your password? Please enter your email.</h4>
      <form>
        <label>
          Email:
        </label>
        <input type="text" id="email" name="email" required/>
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