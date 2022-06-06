import styles from "../../styles/Bottom.module.scss";
import Link from "next/link";
export default function Bottom() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 1</h1>
        <h2 className={styles.text_ko}>제단을 선택하세요.</h2>
      </div>
      <div className={styles.bottom_wrapper}>
        <ul className={styles.bottoms}>
          <li className={styles.bottom}>제단 1</li>
          <li className={styles.bottom}>제단 2</li>
          <li className={styles.bottom}>제단 3</li>
        </ul>
      </div>
      <div>
        <Link href="/step/candle">
          <button className="btn">다음</button>
        </Link>
      </div>
    </section>
  );
}
