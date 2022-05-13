import React from "react";
import styles from '../styles/dashboard.module.css';

const UserInfo = (props) => {
    const { id, name, email, rsvp, checkedIn } = props.user;
    
    const handleAccept = () => {
        props.accept(id, name);
    }

    const handleReject = () => {
        props.reject(id, name);
    }

    const handleWaitlist = () => {
        props.waitlist(id, name);
    }

	return <>
        <td>{name}</td>
        <td>{email}</td>
        <td>{rsvp === true ? "True" : "False"}</td>
        <td>{checkedIn === true ? "True" : "False"}</td>
        <td>
            <button className={styles.tableBtn} onClick={handleAccept}>Accept</button>
        </td>
        <td>
            <button className={styles.tableBtn} onClick={handleReject}>Reject</button>
        </td>
        <td>
            <button className={styles.tableBtn} onClick={handleWaitlist}>Waitlist</button>
        </td>
    </>;
};

export default UserInfo;
