import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function About() {
	return (
		<div>
			<div className={styles.aboutHeader}>
				<h2 className={styles.aboutTitle}>About Us</h2>
			</div>
			<div className={styles.aboutPage}>
				<div className={styles.sectionContainer}>
					<div className={styles.aboutText}>
						Hello World is the first and largest ever freshman-only hackathon
						nationwide. After huge successes over the past six years, we are
						excited to be back for a seventh time this fall. On September 17,
						over 300 freshmen from Purdue will come together to learn new
						technologies and build something amazing. We want to make this a
						memorable experience and would love for you to be a part of it!
					</div>
					<div className={styles.sectionEnd}>
						<div></div>
						<Image
							src="/design_black.png"
							height={50}
							width={180}
							alt="gradient"
						/>
						<div></div>
					</div>
				</div>
				<div className={styles.sectionContainer}>
					<div className={styles.sectionHeader}>
						How is Hello World Different?
					</div>
					<div className={styles.aboutText}>
						We are driven by a vision to foster a community at Purdue that
						encourages learning, collaborating, and developing. Our mission is
						to expose freshmen and first-time hackers to hacker culture in a
						beginner-friendly environment. Our commitment to inclusion is
						reflected in our numbers.{" "}
						<strong>
							More than 35% of our participants last year were female, over 95%
							were first-time hackers, and more than 200 participants submitted
							their innovative projects.
						</strong>
					</div>
					<div className={styles.aboutText}>
						A trademark of Hello World is our mentors who work alongside
						students, motivating them to overcome challenges and encouraging
						them to embrace new technologies. Every year, our mentors connect
						with all our participants and leave an impression that carries
						beyond a career-fair or a tech talk. These lasting impressions
						inspire participants to return as mentors.
					</div>
					<div className={styles.sectionEnd}>
						<div></div>
						<Image
							src="/design_black.png"
							height={50}
							width={180}
							alt="gradient"
						/>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
}
