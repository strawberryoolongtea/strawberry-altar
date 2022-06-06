import styles from "../../styles/Candle.module.scss";
import Link from "next/link";
import { colors } from "../../data/colors";
import Color from "../../components/Color";
import { useState } from "react";
export default function Candle() {
  const [colorDescription, setColorDescription] = useState("");
  const [candleColor, setCandleColor] = useState("");
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 2</h1>
        <h2 className={styles.text_ko}>촛불을 밝히세요.</h2>
      </div>
      <div>
        <div className={styles.candle}>
          <p>{colorDescription}</p>
        </div>
        <ul className={styles.colors}>
          {colors.map((color) => {
            const handleClickColor = () => {
              setColorDescription(color.description);
            };
            return (
              <li
                key={color.name}
                onClick={handleClickColor}
                style={{ backgroundColor: `${color.color}` }}
              ></li>
            );
          })}
        </ul>
      </div>
      <div>
        <Link href="/step/bottom">
          <button className="btn">이전</button>
        </Link>
        <Link href="/step/items">
          <button className="btn">다음</button>
        </Link>
      </div>
    </section>
  );
}
