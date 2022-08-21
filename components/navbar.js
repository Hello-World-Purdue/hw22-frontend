import Link from "next/link";
import React from "react";

import styles from "../styles/navbarstyle.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.topnav}>
        <Link href="/schedule" className={styles.navOne}>
          SCHEDULE
        </Link>
        <Link href="/announcements" className={styles.navOne}>
          ANNOUNCEMENTS
        </Link>
        <Link href="/faq" className={styles.navOne}>
          FAQ&apos;S
        </Link>
        <Link href="/resources" className={styles.navOne}>
          RESOURCES
        </Link>
        <Link href="/sponsors" className={styles.navOne}>
          SPONSORS
        </Link>
        <Link href="/about" className={styles.navOne}>
          ABOUT US
        </Link>
        <Link href="/login" className={styles.navOne}>
          LOGIN/REGISTER
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
