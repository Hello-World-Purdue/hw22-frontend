import React from "react";
import styles from '../styles/navbarstyle.module.css'
import Link  from "next/link";


export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            
            <div className={styles.topnav}>
                <Link href="/">SCHEDULE</Link>
                <Link href="/">ANNOUNCEMENTS</Link>
                <Link href="/">FAQ'S</Link>

            

                <Link href="/">RESOURCES</Link>
                <Link href="/">SPONSORS</Link>
                <Link href="/">ABOUT US</Link>
                
                <div className= {styles.button}>
                    // href should be the login page, currently there is an example link
                    <a href="https://www.w3docs.com/learn-html/html-button-tag.html">LOGIN/REGISTER</a>
                </div>
               
            </div>

        </nav>
        
    );
};

export default Navbar;
