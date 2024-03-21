import Image from "next/image";
import styles from "./aboutMe.module.css";
import { calculateXp } from "@/utils/calculateXp";
import Button from "@/components/atoms/button";
import networks from "./socialNetworks";

export default function AboutMe() {
  return (
    <div className={styles.aboutMeWrapper}>
      <div className={styles.aboutMe}>
        <div className={styles.imageWrapper}>
          <Image
            alt="Cauã Yves"
            src="/me.jpg"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className={styles.description}>
          <span className={styles.promotedText}>Sobre mim</span>
          <h2>Cauã Yves</h2>
          <h4>Full Stack Developer</h4>
          <p>
            Meu nome é Cauã Yves, sou desenvolvedor full stack com{" "}
            <span className={styles.promotedText}>
              {calculateXp()} anos de experiência
            </span>{" "}
            em desenvolvimento web, atualmente trabalho na Erudir Tech,
            desenvolvendo projetos de cultura para o município onde moro,
            desenvolvo meus projetos pensando em resolver problemas de forma
            escalável e seguindo os conceitos de{" "}
            <span className={styles.promotedText}>
              <a href="https://12factor.net/" target="_blank">
                twelve factor app
              </a>
            </span>{" "}
            de forma que o código seja limpo e de fácil compreensão.
          </p>
          {networks.map((net) => {
            return (
              <Button
                key={net.id}
                name={net.name}
                href={net.href}
                img={net.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
