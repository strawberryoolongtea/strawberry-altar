import styles from "../../styles/Bottom.module.scss";
import Link from "next/link";
import { useState } from "react";
export default function Bottom() {
  const [translateValue, setTranslateValue] = useState(300);
  function handlePrev() {
    switch (translateValue) {
      case 0:
        setTranslateValue(300);
        break;
      case -300:
        setTranslateValue(0);
        break;
    }
  }
  function handleNext() {
    switch (translateValue) {
      case 300:
        setTranslateValue(0);
        break;
      case 0:
        setTranslateValue(-300);
        break;
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 1</h1>
        <h2 className={styles.text_ko}>제단을 선택하세요.</h2>
      </div>
      <div className={styles.bottom_wrapper}>
        <ul
          className={styles.bottoms}
          style={{ transform: `translateX(${translateValue}px)` }}
        >
          <li className={styles.bottom}>제단 1</li>
          <li className={styles.bottom}>제단 2</li>
          <li className={styles.bottom}>제단 3</li>
        </ul>
        <div className={styles.btns}>
          <button className={styles.left} onClick={handlePrev}>
            이전
          </button>
          <button className={styles.right} onClick={handleNext}>
            다음
          </button>
        </div>
      </div>
      <div>
        <Link href="/step/candle">
          <button className="btn">다음</button>
        </Link>
      </div>
    </section>
  );
}
