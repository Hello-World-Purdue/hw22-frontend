import Link from "next/link";
import React from "react";

import styles from "../styles/navbarstyle.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.topnav}>
        <Link href="/" className={styles.navOne}>
          SCHEDULE
        </Link>
        <Link href="/" className={styles.navOne}>
          ANNOUNCEMENTS
        </Link>
        <Link href="/" className={styles.navOne}>
          FAQ&apos;S
        </Link>
        <Link href="/" className={styles.navOne}>
          RESOURCES
        </Link>
        <Link href="/" className={styles.navOne}>
          SPONSORS
        </Link>
        <Link href="/" className={styles.navOne}>
          ABOUT US
        </Link>
        <Link href="/" className={styles.navOne}>
          LOGIN/REGISTER
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
