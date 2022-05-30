import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Start from "../components/Start";
import StartButton from "../components/buttons/StartButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <Start />
        <StartButton />
      </div>
    </div>
  );
}
