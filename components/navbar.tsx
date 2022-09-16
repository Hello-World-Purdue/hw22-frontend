import AuthContext from "context/AuthContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

import styles from "../styles/Home.module.css";

export const Navbar = () => {
	const { user, logout } = useContext(AuthContext);
	const { push } = useRouter();
	const [active, setActive] = useState(false);

	/*
	return (
		<>
			<nav>
				<div className="sm:hidden flex items-center justify-end py-2">
					<button onClick={() => setActive(!active)}>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="white"
							height="8rem"
							width="8rem"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
				<div
					className={`sm:flex z-50 h-full bg-black bg-opacity-70 sm:bg-transparent absolute sm:relative sm:h-14 py-2 mb-4
          transition sm:flex-row flex-col items-center gap-2 text-white px-4 w-full ${
						active ? "flex" : "hidden"
					}`}
				>
					<Link href="/schedule" className="">
						Schedule
					</Link>
					<Link href="/faq" className="">
						FAQ
					</Link>
					<Link href="/announcements" className="">
						Announcements
					</Link>
					<Link href="/" className="">
						<Image src="/hw_logo.png" height={50} width={40} alt="gradient" />
					</Link>
					<Link href="/about" className="">
						About Us
					</Link>
					<Link href="/sponsors" className="">
						Sponsors
					</Link>
					{user ? (
						<button
							onClick={() => {
								logout();
								push("/login");
							}}
						>
							LOGOUT
						</button>
					) : (
						<Link href="/login" className="">
							LOGIN/REGISTER
						</Link>
					)}
				</div>
			</nav>
			<nav className="hidden "></nav>
		</>
	);
  */

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
			<div className={styles.navbarLogin}>
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
			</div>
		</nav>
	);
};

export default Navbar;
