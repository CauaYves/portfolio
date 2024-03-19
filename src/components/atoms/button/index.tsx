import Image from "next/image";
import styles from "./button.module.css";
import Link from "next/link";

type CustomButtonProps = {
  key: number;
  img: string;
  name: string;
  href: string;
};

export default function Button({ name, href, img }: CustomButtonProps) {
  return (
    <Link href={href} target="_blank">
      <button className={styles.button}>
        <Image alt={name} src={img} width={30} height={30} />
      </button>
    </Link>
  );
}
