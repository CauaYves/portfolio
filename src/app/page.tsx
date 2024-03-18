import styles from "./page.module.css";
import NavBar from "@/components/organisms/navbar";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <main className={styles.main}>main</main>
    </React.Fragment>
  );
}
