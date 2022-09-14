import Image from "next/image";
import React from "react";

import Sponsor from '../components/Sponsor';
import styles from "../styles/Home.module.css";

export default function Sponsors() {
	return (
		<div className={styles.sponsorGrid}>
			<div className={styles.sponsorLogo}>
				<Image src="/hw_logo.png" height={110} width={110} alt="gradient" />
			</div>
			<div className={styles.sponsorColumn}>
                <Sponsor sponsorKey="aws" />
                <Sponsor sponsorKey="solana" />
            </div>
			<div className={styles.sponsorColumn}>
                <Sponsor sponsorKey="collins" />
                <Sponsor sponsorKey="delloite" />
            </div>
		</div>
	);
}
