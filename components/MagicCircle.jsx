import Image from "next/image";
import styles from "../styles/Bottom.module.scss";

export default function MagicCircle({ src, alt, width, height }) {
  return (
    <li className={styles.bottoms}>
      <Image src={src} alt={alt} width={width} height={height} />
    </li>
  );
}
