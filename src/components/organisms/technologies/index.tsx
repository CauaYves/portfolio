"use client";
import React from "react";
import styles from "./technologies.module.css";
import TextShpere from "./sphere";

export default function Technologies() {
  return (
    <div className={styles.techWrapper}>
      <div className={styles.tech}>
        <TextShpere />
      </div>
    </div>
  );
}
