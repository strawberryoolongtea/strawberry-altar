import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>소원을 들어줘 🌙 My Altar 🔮 시작하기</title>
      </Head>
      <div>
        <h2 className={styles.sub_title}>소원을 들어줘</h2>
        <h1 className={styles.title}>My Altar</h1>
      </div>
      <div className={styles.skull}>
        <Image src="/skull.svg" alt="skull" width={200} height={200} />
      </div>
      <Link href="/step">
        <button className={`btn ${styles.btn}`}>나만의 제단 만들기</button>
      </Link>
    </section>
  );
}
