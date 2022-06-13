import styles from "../../styles/Bottom.module.scss";
import Link from "next/link";
import { useState } from "react";
import { bottoms } from "../../data/bottoms";
import Image from "next/image";

export default function Bottom() {
  const [bottomStyle, setBottomStyle] = useState(bottoms[0].img);
  const [translateValue, setTranslateValue] = useState(300);
  console.log(bottomStyle.id);
  function handlePrev() {
    switch (translateValue) {
      case 0:
        setTranslateValue(300);
        setBottomStyle(bottoms[0].img);
        break;
      case -300:
        setTranslateValue(0);
        setBottomStyle(bottoms[1].img);
        break;
    }
  }
  function handleNext() {
    switch (translateValue) {
      case 300:
        setTranslateValue(0);
        setBottomStyle(bottoms[1].img);
        break;
      case 0:
        setTranslateValue(-300);
        setBottomStyle(bottoms[2].img);
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
          <li className={styles.bottom}>
            <Image
              src={`/${bottomStyle}`}
              alt="skull"
              width={200}
              height={200}
            />
          </li>
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
