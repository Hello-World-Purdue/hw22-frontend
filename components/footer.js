import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerLogo}>
				<div
					style={{
						marginLeft: "5px",
						marginRight: "5px",
					}}
				>
					<Image src="/design.png" height={50} width={120} alt="gradient" />
				</div>
				<div
					style={{
						marginLeft: "5px",
						marginRight: "5px",
					}}
				>
					<Image src="/hw_logo.png" height={50} width={40} alt="gradient" />
				</div>
				<div
					style={{
						marginLeft: "5px",
						marginRight: "5px",
					}}
				>
					<Image src="/design.png" height={50} width={120} alt="gradient" />
				</div>
			</div>
			<div className={styles.footerNav}>
				<Link href="/">
					<p className={styles.footerLink}>HOME</p>
				</Link>
				<Link href="/schedule">
					<p className={styles.footerLink}>SCHEDULE</p>
				</Link>
				<Link href="/announcements" className="footerLink">
					<p className={styles.footerLink}>ANNOUNCEMENTS</p>
				</Link>
				<Link href="/faq" className="footerLink">
					<p className={styles.footerLink}>FAQ&apos;S</p>
				</Link>
				<Link href="/sponsors" className="footerLink">
					<p className={styles.footerLink}>SPONSORS</p>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
