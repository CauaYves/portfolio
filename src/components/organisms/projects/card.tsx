import Link from "next/link";
import styles from "./projects.module.css";

type ProjectCardProps = {
  name: string;
  description: string;
  href: string;
  color: string;
};

export default function ProjectCard({
  name,
  description,
  href,
  color,
}: ProjectCardProps) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: color + "1f",
        borderColor: color,
        boxShadow: "2px 5px 10px" + color + "25",
      }}
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <Link href={href} target="_blank">
          <h4>visualizar agora</h4>
        </Link>
        <Link href={`https://github.com/CauaYves/${name}`} target="_blank">
          repositório
        </Link>
      </div>
    </div>
  );
}
