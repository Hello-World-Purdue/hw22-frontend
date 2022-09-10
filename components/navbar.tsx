import AuthContext from "context/AuthContext";
import Link from "next/link";
import {useRouter} from "next/router";
import React, {useContext, useState} from "react";

// import styles from "../styles/navbarstyle.module.css";

export const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  const {push} = useRouter();
  const [active, setActive] = useState(false);
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
};

export default Navbar;
