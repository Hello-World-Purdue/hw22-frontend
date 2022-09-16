import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import LandingSponsor from '../components/LandingSponsor';
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.homePage}>
			<div className={styles.landingHeader}>
				<div className={styles.landingTitle}>
					<div>Hello World</div>
					<div>2022</div>
				</div>
			</div>
			<div className={styles.detailsSection}>
				<div className={styles.hackTime}>September</div>
				<div className={styles.hackTime}>17th-18th</div>
				<div className={styles.sectionEnd}>
					<Image
						src="/landing-gradient.png"
						height={10}
						width={720}
						alt="gradient"
					/>
					<div></div>
				</div>
				<div className={styles.meetUsThereSection}>
					<div className={styles.meetUsThere}>Meet us there:</div>
					<button className={styles.scheduleButton}>
						<Link href="/schedule">View Schedule</Link>
					</button>
				</div>
				<div className={styles.sectionEnd}>
					<div></div>
					<Image
						src="/design_black.png"
						height={80}
						width={240}
						alt="gradient"
					/>
					<div></div>
				</div>
			</div>
			<div className={styles.sponsorSection}>
				<div className={styles.sponsorSectionHeading}>Sponsors</div>
				<div className={styles.sectionEnd}>
					<Image
						src="/landing-gradient.png"
						height={10}
						width={720}
						alt="gradient"
					/>
					<div></div>
				</div>
				<div className={styles.sponsorGrid}>
					<div className={styles.sponsorColumn}>
						<LandingSponsor sponsorKey="aws" />
						<LandingSponsor sponsorKey="solana" />
					</div>
					<div className={styles.sponsorColumn}>
						<LandingSponsor sponsorKey="collins" />
						<LandingSponsor sponsorKey="delloite" />
					</div>
				</div>
				<div className={styles.sectionEnd}>
					<div></div>
				<button className={styles.sponsorButton}>
						<Link href="/sponsors">Learn More</Link>
					</button>
					<div></div>
				</div>
				<div className={styles.sectionEnd}>
					<div></div>
					<Image
						src="/design_black.png"
						height={80}
						width={240}
						alt="gradient"
					/>
					<div></div>
				</div>
			</div>
		</div>
	);
}
