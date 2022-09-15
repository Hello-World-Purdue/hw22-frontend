import React from "react";
import styles from "../styles/Home.module.css";

const CustomLabel: React.FC<{
  annType:
    | "Events" | "Food"
    | "Judging" | "Logistics"
    | "Sponsor" | "Miscellaneous";
}> = (props) => {

  return (
    <div className={styles.annLabel}>
      {props.annType === "Miscellaneous"
        ? "MISC"
        : props.annType === "Sponsor"
        ? "Partner"
        : props.annType.toUpperCase()}
    </div>
  );
};

export default CustomLabel;