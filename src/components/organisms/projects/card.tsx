import Link from "next/link";
import styles from "./projects.module.css";

export default function ProjectCard() {
  return (
    <div className={styles.card}>
      <h2>Lorem ipsum dolor, sit amet o conse</h2>
      <p>
        Descrição Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio, aliquam laborum dicta enim veritatis magni dolor magnam
      </p>
      <div>
        <h4>visualizar agora</h4>
        <Link href={""}>repositório</Link>
      </div>
    </div>
  );
}
