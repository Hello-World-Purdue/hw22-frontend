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
          <label>BODY</label>
          <input
            onChange={bodyHandler}
            type="text"
            name="username"
            required
          />
        </div>

        <div className={styles.formField}>
          <label>LABEL</label>
          <br></br>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export const CreateAnnouncementsButton = () => (
  <>
    <div className="" style={{ position: "relative" }}>
      <button
        type="button"
        className="create-ancmnt-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Announcement
      </button>
    </div>

    <div className="modal" id="exampleModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <AnnouncementsForm />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AnnouncementsForm;