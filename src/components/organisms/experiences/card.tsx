import styles from "./experiences.module.css";
import { xp } from "./experiences.array";

type experienceCardProps = {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  currentXpTime: string;
  description: string;
};

export default function ExperienceCard({
  id,
  title,
  company,
  startDate,
  endDate,
  currentXpTime,
  description,
}: experienceCardProps) {
  return (
    <div className={styles.xpContainer}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <h4>
          {startDate} - {endDate} ({currentXpTime})
        </h4>
      </div>
      <div className={styles.jobInfo}>
        <h4>{company}</h4>
        <p>{description}</p>
      </div>
      <span className={styles.currentPage}>
        {id} / {xp.length}
      </span>
    </div>
  );
}
