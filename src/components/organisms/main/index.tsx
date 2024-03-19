"use client";
import Image from "next/image";
import styles from "./main.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SubPresentationText from "@/components/molecules/subPresentationText";

export default function Main() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.mainWrapper}>
      <main className={styles.main}>
        <div data-aos="fade-down" className={styles.presentationWrapper}>
          <h1 className={styles.presentationText}>
            Transformando idéias em{" "}
            <span className={styles.promotedText}>soluções</span>, linha por
            linha, no front-end e no back-end.
          </h1>
          <SubPresentationText />
        </div>
        <div data-aos="fade-left" className={styles.presentationImage}>
          <Image alt="Photo" src="/y.svg" width={550} height={300} priority />
        </div>
      </main>
    </div>
  );
}
