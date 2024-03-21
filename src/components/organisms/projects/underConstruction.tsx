import styles from "./projects.module.css";

export default function UnderConstruction() {
  return (
    <div className={`${styles.card} ${styles.underConstruction}`}>
      <h2>Em construção</h2>
      <p>Esse projeto está em desenvolvimento, futuramente ele estará aqui.</p>
    </div>
  );
}
