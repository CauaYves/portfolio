import styles from "./cv.module.css";

export default function Cv() {
  return (
    <div className={styles.cvWrapper}>
      <div className={styles.cv}>
        <embed src="CV_Cauã_Yves_BR.pdf" type="application/pdf" />
      </div>
    </div>
  );
}
