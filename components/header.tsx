import React from "react";

import styles from '../styles/Home.module.css';

const Header: React.FC<{
    title: string
}> = (props) => {
    const { title } = props;

    return (
        <div className={styles.header}>
            <h2 className={styles.headerTitle}>{title}</h2>
        </div>
    )
}

export default Header;