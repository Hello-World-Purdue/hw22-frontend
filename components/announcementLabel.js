import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/announcments.module.css";

const CustomLabel = (props) => {
    const labelClasses = [styles.label];
    switch (props.announcementType) {
        case "Events":
            labelClasses.push(styles.events);
            break;
        case "Food":
            labelClasses.push(styles.food);
            break;
        case "Logistics":
            labelClasses.push(styles.logistics);
            break;
        case "Sponsor":
            labelClasses.push(styles.sponsor);
            break;
        case "Judging":
            labelClasses.push(styles.judging);
            break;
        case "Miscellaneous":
            labelClasses.push(styles.miscellaneous);
            break;
    }

    return (React.createElement("div", { className: labelClasses.join(" ") }, props.announcementType === "Miscellaneous"
        ? "MISC"
        : props.announcmentType === "Sponsor"
            ? "Partner"
            : props.announcementType.toUpperCase()));
};

export default CustomLabel;