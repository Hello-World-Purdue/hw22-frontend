import Link from "next/link";
import React from "react";

// import styles from "../styles/navbarstyle.module.css";

export const Navbar = () => {
  return (
    <nav className="h-14 py-2 mb-4 flex gap-2 text-white px-4 w-full">
      <Link href="/schedule" className="">
        SCHEDULE
      </Link>
      <Link href="/announcements" className="">
        ANNOUNCEMENTS
      </Link>
      <Link href="/faq" className="">
        FAQ&apos;S
      </Link>
      <Link href="/resources" className="">
        RESOURCES
      </Link>
      <Link href="/sponsors" className="">
        SPONSORS
      </Link>
      <Link href="/about" className="">
        ABOUT US
      </Link>
      <Link href="/login" className="">
        LOGIN/REGISTER
      </Link>
    </nav>
  );
};

export default Navbar;
