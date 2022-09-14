import Image from "next/image";
import React from "react";

import sponsorMap from '../util/sponsors';
import styles from '../styles/Home.module.css';

const Sponsor: React.FC<{ 
    sponsorKey: "aws" | "solana" | "collins" | "delloite"
 }> = (props) => {
    const { sponsorKey } = props;
    const sponsor: any = sponsorMap.get(sponsorKey);

    return (
        <div className={styles.sponsorBox}>
            <div className={styles.sponsorName}>
                {sponsor.name}
            </div>
            <div>
                <Image src={`/${sponsorKey}.png`} height={sponsor.height} width={sponsor.width} alt="gradient" />
            </div>
        </div>
    )
 }

 export default Sponsor;