import React, { useContext, useState } from "react";

import styles from "../styles/Home.module.css";
import UserContext from "../context/UserContext";

export const announcementLabel = [
  "Events",
  "Food",
  "Logistics",
  "Sponsor",
  "Judging",
  "Miscellaneous",
];

const AnnouncementsForm: React.FC<{}> = (props) => {
  const [body, setBody] = useState<string>("");
  const [label, setLabel] = useState<string>("Events");
  const { makeAnnouncement } = useContext(UserContext);

  function submitForm(event: React.FormEvent) {
    event.preventDefault();

    const ancmt = {
      body: body,
      title: "Announcement",
      label: label,
    };
    makeAnnouncement(ancmt);
  }

  const bodyHandler = (event: any) => {
    setBody(event.target.value);
  };

  const labelHandler = (event: any) => {
    console.log(label);
    setLabel(event.target.value);
  };

  return (
    <div className={styles.formContainer}> {/* card */}
      <form className={styles.form} onSubmit={submitForm}>
        <div className={styles.formField}>
          <label className={styles.formFieldLabel}>BODY</label>
          <input
            className={styles.formFieldInput}
            onChange={bodyHandler}
            type="text"
            name="username"
            required
          />
        </div>

        <div className={styles.formField}>
          <label className={styles.formFieldLabel}>LABEL</label>
          <select
            className="form-control"
            onChange={labelHandler}
            name="label"
            required
          >
            {}
            {announcementLabel.map((label) => (
              <option value={label} key={label}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.formButton} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AnnouncementsForm;