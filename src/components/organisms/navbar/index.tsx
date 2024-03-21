"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <Image
          alt="Cauã Yves"
          src="/logo.svg"
          width={170}
          height={90}
          priority
        />
        <button className={styles.menu} onClick={handleMenuClick}>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line1 : ""}`}
          ></div>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line2 : ""}`}
          ></div>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line3 : ""}`}
          ></div>
        </button>
        <div className={styles.deskMenu}>
          <Link target="_blank" href="https://www.linkedin.com/in/cauayves/">
            Linkedin
          </Link>
          <Link target="_blank" href="https://github.com/CauaYves">
            Github
          </Link>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1269CyG7JolrBLipcJORE4Mg9XMt1asnK/view"
          >
            Currículo
          </Link>
        </div>
        <div
          className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOn : ""}`}
        >
          <Link target="_blank" href="https://www.linkedin.com/in/cauayves/">
            Linkedin
          </Link>
          <Link target="_blank" href="https://github.com/CauaYves">
            Github
          </Link>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1269CyG7JolrBLipcJORE4Mg9XMt1asnK/view"
          >
            Currículo
          </Link>
        </div>
      </nav>
    </div>
  );
}
