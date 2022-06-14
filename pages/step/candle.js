import styles from "../../styles/Candle.module.scss";
import Link from "next/link";
import { colors } from "../../data/colors";
import Color from "../../components/Color";
import { useState } from "react";
export default function Candle() {
  const [colorDescription, setColorDescription] = useState("");
  const [candleColor, setCandleColor] = useState(colors[0].color);
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 2</h1>
        <h2 className={styles.text_ko}>촛불을 밝히세요.</h2>
        {/* <p>
          초는 색상에 따라 특별한 의미가 있습니다. 소원과 관련된 적절한 색상을
          선택해주세요.
        </p> */}
      </div>
      <div>
        <div
          className={styles.candle}
          style={{ backgroundColor: `${candleColor}` }}
        >
          <p>{colorDescription}</p>
        </div>
        <ul className={styles.colors}>
          {colors.map((color) => {
            const handleClickColor = () => {
              setColorDescription(color.description);
              setCandleColor(color.color);
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
