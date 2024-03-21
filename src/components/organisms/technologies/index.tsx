"use client";
import React from "react";
import styles from "./technologies.module.css";
import TextShpere from "./sphere";
import Image from "next/image";

export default function Technologies() {
  return (
    <div className={styles.techWrapper}>
      <div className={styles.tech}>
        <div className={styles.description}>
          <h2>Tecnologias</h2>
          <p>
            Tenho grande conhecimento com a linguagem Javascript e frameworks
            dela , isso me permite trabalhar nos dois polos de uma aplicação, o
            servidor e parte do cliente, o resultado desse conhecimento são
            aplicações escaláveis, bonitas e funcionais!
          </p>
          <div className={styles.graph}>
            <Image width={400} height={280} src="/skills.svg" alt="skills" />
          </div>
        </div>
        <div className={styles.sphere}>
          <TextShpere />
        </div>
      </div>
    </div>
  );
}
