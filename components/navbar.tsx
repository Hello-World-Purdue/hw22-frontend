import AuthContext from "context/AuthContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

import styles from "../styles/Home.module.css";

export const Navbar = () => {
	const { user, logout } = useContext(AuthContext);
	const { push } = useRouter();

	return (
		<nav className={styles.navbar}>
			<div className={styles.footerNav}>
				<Link href="/schedule">
					<p className={styles.navLink}>Schedule</p>
				</Link>
				<Link href="/faq">
					<p className={styles.navLink}>FAQ</p>
				</Link>
				<Link href="/announcements">
					<p className={styles.navLink}>Announcements</p>
				</Link>
				<Link href="/">
					<div className={styles.navbarLogo}><Image src="/hw_logo.png" height={40} width={40} alt="gradient" /></div>
				</Link>
				<Link href="/about">
					<p className={styles.navLink}>About Us</p>
				</Link>
				<Link href="/sponsors">
					<p className={styles.navLink}>Sponsors</p>
				</Link>
        {/* <Link href="/">
					<p className={styles.navLink}>HelpQ</p>
				</Link> */}
			</div>
			{/* <div className={styles.navbarLogin}>
				{user ? (
					<button
						className={styles.loginButton}
						onClick={() => {
							logout();
							push("/login");
						}}
					>
						LOGOUT
					</button>
				) : (
					<Link href="/login">
						<button className={styles.loginButton}>LOGIN/REGISTER</button>
					</Link>
				)}
			</div> */}
		</nav>
	);
};

export default Navbar;
