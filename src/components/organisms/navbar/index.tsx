"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <Image alt="Cauã Yves" src="/logo.svg" width={170} height={90} />
        <div className={styles.menu} onClick={handleMenuClick}>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line1 : ""}`}
          ></div>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line2 : ""}`}
          ></div>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line3 : ""}`}
          ></div>
        </div>
        <div className={styles.deskMenu}>
          <a href="#">Linkedin</a>
          <a href="#">Github</a>
          <a href="#">Currículo</a>
        </div>
        <div
          className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOn : ""}`}
        >
          <a href="#">Linkedin</a>
          <a href="#">Github</a>
          <a href="#">Currículo</a>
        </div>
      </nav>
    </div>
  );
}
