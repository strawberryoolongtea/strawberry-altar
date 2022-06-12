import Link from "next/link";
import styles from "../../styles/Items.module.scss";
export default function Items() {
  return (
    <section>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 3</h1>
        <h2 className={styles.text_ko}>성물을 장식하세요.</h2>
      </div>
      <div>
        <Link href="/step/candle">
          <button className="btn">이전</button>
        </Link>
        <Link href="/step/items">
          <button className="btn">다음</button>
        </Link>
      </div>
    </section>
  );
}
