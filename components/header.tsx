import React from "react";

import styles from '../styles/Home.module.css';

const Header: React.FC<{
    title: string,
    page: string
}> = (props) => {
    const { title, page } = props;

    let headerClass = styles.header;

    switch (page) {
        case 'faq':
            headerClass = styles.faqHeader;
            break;
        case 'sponsors':
            headerClass = styles.sponsorsHeader;
            break;
        case 'announcements':
            headerClass = styles.annHeader;
            break;
    }

    return (
        <div className={headerClass}>
            <h2 className={styles.headerTitle}>{title}</h2>
        </div>
    )
}

export default Header;