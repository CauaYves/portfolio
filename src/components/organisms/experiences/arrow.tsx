import React from "react";
import Image from "next/image";
import styles from "./experiences.module.css";

interface ArrowProps {
  src: string;
  onClick: () => void;
  side: string;
}

const Arrow: React.FC<ArrowProps> = ({ src, onClick, side }) => {
  return (
    <button
      className={styles.arrow}
      onClick={onClick}
      style={{ left: `${side === "left" ? "45%" : "55%"}` }}
    >
      <Image alt="left" src={src} height={45} width={70} />
    </button>
  );
};

export default Arrow;
