import React, {useContext, useEffect, useState} from "react";

import AlertContext from "../context/AlertContext";
import Toast from "./toast";

const Alert = () => {
  const ctx = useContext(AlertContext);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (ctx.message) {
      setShowToast(true);
    }
  }, [ctx]);

  const handleClose = () => {
    ctx.clearAlert();
    setShowToast(false);
  };

  const {title, message, type, action} = ctx;

  return (
    <div data-alert-root>
      {showToast && (
        <Toast
          title={title}
          message={message}
          comment={type === "error" ? "Please try again" : null}
          closeToast={handleClose}
          type={type}
          action={action}
        />
      )}
    </div>
  );
};

export default Alert;
