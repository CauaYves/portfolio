import ProjectCard from "./card";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projectsWrapper}>
      <div className={styles.projects}>
        <h2>Projetos</h2>
        <ProjectCard />
      </div>
    </div>
  );
}
