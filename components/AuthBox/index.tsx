import styles from "../../styles/AuthBox.module.css";

export function AuthBox({children}: {children?: any}) {
  return (
    <div className={styles.loginRoot}>
      <div className={styles.gradientBox}></div>
      <div className={styles.loginBox}>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </div>
  );
}
