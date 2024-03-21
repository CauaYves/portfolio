import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <h5>
          &copy;Copyright {new Date().getFullYear()} <span>Cauã Yves</span>
        </h5>
        <div className={styles.info}>
          <div className={styles.collumnLinks}>
            <Link href="mailto:cauayves5@gmail.com" target="_blank">
              E-mail
            </Link>
            <Link href="https://www.linkedin.com/in/cauayves/" target="_blank">
              Linkedin
            </Link>
            <Link href="https://github.com/CauaYves" target="_blank">
              Github
            </Link>
          </div>
          <div className={styles.collumnLinks}>
            <h3>Powered by</h3>
            <Image alt="Yves.dev" src="/y.svg" height={100} width={100} />
          </div>
        </div>
      </footer>
    </div>
  );
}
