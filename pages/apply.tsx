import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import ApplicationForm from "../components/ApplicationForm";

import AlertContext from "../context/AlertContext";
import UserContext from "../context/UserContext";

import styles from "../styles/Home.module.css";
import AuthContext from "../context/AuthContext";

function Apply() {
  const { apply, user } = useContext(UserContext);
  const { setAlert } = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  const submitAnswers = async (userData: FormData) => {
    try {
      await apply(user ? user._id : "", userData);
      setAlert("success", "Application Success", "Thank you for applying!");
      router.push("/profile");
    } catch (err: any) {
      // console.log(err)
      setAlert("error", "Application Error", err.message);
    }
  };

  return (
    <div className={styles.formPage}>
      <ApplicationForm sendAnswers={submitAnswers} />
    </div>
  );
}

export default Apply;