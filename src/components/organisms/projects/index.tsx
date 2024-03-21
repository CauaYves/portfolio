import ProjectCard from "./card";
import styles from "./projects.module.css";
import { projects } from "./projects.array";
import Link from "next/link";
import UnderConstruction from "./underConstruction";

export default function Projects() {
  function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let hexR = r.toString(16).padStart(2, "0");
    let hexG = g.toString(16).padStart(2, "0");
    let hexB = b.toString(16).padStart(2, "0");

    let hexColor = "#" + hexR + hexG + hexB;

    return hexColor;
  }
  return (
    <div className={styles.projectsWrapper}>
      <h2>Projetos</h2>
      <div className={styles.projects}>
        {projects.map((p) => {
          return (
            <ProjectCard
              key={p.name}
              name={p.name}
              description={p.description}
              href={p.href}
              color={getRandomColor()}
            />
          );
        })}
        <UnderConstruction />
      </div>
      <Link
        href="https://github.com/CauaYves?tab=repositories"
        target="_blank"
        className={styles.repoLink}
      >
        <h4>Repositórios do github</h4>
      </Link>
    </div>
  );
}
