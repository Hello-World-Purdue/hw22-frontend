import Image from "next/image";
import React from "react";

import sponsorMap from "../util/sponsors";
import styles from "../styles/Home.module.css";

const LandingSponsor: React.FC<{
	sponsorKey: "aws" | "solana" | "collins" | "delloite";
}> = (props) => {
	const { sponsorKey } = props;
	const sponsor: any = sponsorMap.get(sponsorKey);

	return (
		<div className={styles.sponsorArea}>
			<div className={styles.sponsorBox}>
				<div>
					<Image
						src={`/${sponsorKey}.png`}
						height={1.5 * sponsor.height}
						width={2 * sponsor.width}
						alt="gradient"
					/>
				</div>
			</div>
			<div className={styles.sponsorNameLanding}>{sponsor.name}</div>
		</div>
	);
};

export default LandingSponsor;
