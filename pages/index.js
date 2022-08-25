import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <div className="gradientBox"></div>
      <div className={styles.container}>Home</div>
    </>
  );
}

export default Home;
