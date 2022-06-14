import styles from "../../styles/Bottom.module.scss";
import Link from "next/link";
import { useState } from "react";
import { bottoms } from "../../data/bottoms";
import Image from "next/image";

export default function Bottom() {
  const [translateValue, setTranslateValue] = useState(300);
  function handlePrev() {
    switch (translateValue) {
      case 300:
        setTranslateValue(-300);
        break;
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
      case -300:
        setTranslateValue(300);
        break;
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 1</h1>
        <h2 className={styles.text_ko}>마법진을 그리세요.</h2>
      </div>
      <div className={styles.bottom_wrapper}>
        <ul
          className={styles.bottoms}
          style={{ transform: `translateX(${translateValue}px)` }}
        >
          <li className={styles.bottom}>
            <Image
              src="/altar/altar1.svg"
              alt="altar style 1"
              width={240}
              height={240}
              priority={true}
            />
          </li>
          <li className={styles.bottom}>
            <Image
              src="/altar/altar2.svg"
              alt="altar style 2"
              width={240}
              height={240}
            />
          </li>
          <li className={styles.bottom}>
            <Image
              src="/altar/altar3.svg"
              alt="altar style 3"
              width={240}
              height={240}
            />
          </li>
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
