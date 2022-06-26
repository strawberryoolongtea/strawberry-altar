import styles from "../styles/Candle.module.scss";
import Link from "next/link";
import { colors } from "../data/colors";
import Color from "./Color";
import { useRef, useState } from "react";
import Image from "next/image";
import ColorCandle from "./ColorCandle";

export default function Candle({
  toFirstStep,
  toThirdStep,
  candleColor,
  changeCandleColor,
}) {
  function handleClickColor(e) {
    // console.log(e.target.id);
    changeCandleColor(e.target.id);
  }

  function toPrevStep() {
    toFirstStep();
  }
  function toNextStep() {
    toThirdStep();
  }
  const selectedColor = colors.filter((color) => color.name === candleColor)[0];
  console.log(selectedColor);
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 2</h1>
        <h2 className={styles.text_ko}>촛불을 밝히세요.</h2>
        <p className={styles.title_desc}>
          초는 색상에 따라 특별한 의미가 있습니다.
        </p>
      </div>
      <div>
        <div className={styles.candle}>
          <ColorCandle {...selectedColor} />
        </div>
        <p className={styles.candle_desc}>{selectedColor.description}</p>
        <ul className={styles.colors}>
          {colors.map((color) => {
            return (
              <li
                key={color.name}
                id={color.name}
                onClick={handleClickColor}
                style={{ backgroundColor: `${color.color}` }}
              ></li>
            );
          })}
        </ul>
      </div>
      <div className="btns">
        <button className="btn" onClick={toPrevStep}>
          뒤로
        </button>
        <button className="btn" onClick={toNextStep}>
          다음 단계로
        </button>
      </div>
    </section>
  );
}
