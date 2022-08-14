import React from "react";

import styles from "../styles/modal.module.css";

const Toast = (props) => {
  // const { title, message } = useContext(AlertContext);
  const {title, message, comment, closeToast, type, action} = props;

  const handleAction = () => {
    action();
    closeToast();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <strong>{title}</strong>
        </div>
        <div className={styles.modalBody}>
          <p>{message}</p>
        </div>
        <div>
          <small>{comment}</small>
        </div>
        {type == "confirm" ? (
          <div className={styles.modalFooter}>
            <div>
              <button onClick={closeToast}>NO</button>
            </div>
            <div>
              <button onClick={handleAction}>YES</button>
            </div>
          </div>
        ) : (
          <div className={styles.modalFooter}>
            <button onClick={closeToast}>OK</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toast;
