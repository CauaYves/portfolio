"use client";
import styles from "./technologies.module.css";
import TextShpere from "./sphere";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Technologies() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.techWrapper}>
      <div className={styles.tech}>
        <div className={styles.description}>
          <h2 data-aos="fade-right">Tecnologias</h2>
          <p data-aos="fade-right">
            Tenho grande conhecimento com a linguagem Javascript e frameworks
            dela, isso me permite trabalhar nos dois polos de uma aplicação, no
            lado do servidor e no lado do cliente, o resultado desse
            conhecimento são aplicações escaláveis, com boa UI/UX e totalmente
            funcionais.
          </p>
          <div className={styles.graph} data-aos="fade-right">
            <Image width={400} height={280} src="/skills.svg" alt="skills" />
          </div>
        </div>
        <div className={styles.sphere} data-aos="fade-left">
          <TextShpere />
        </div>
      </div>
    </div>
  );
}
