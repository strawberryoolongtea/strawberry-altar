import styles from "../styles/Bottom.module.scss";
import { bottoms } from "../data/bottoms";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import MagicCircle from "./MagicCircle";

export default function Bottom({
  toSecondStep,
  translateValue,
  setTranslateValue,
  magicCircle,
  setMagicCircle,
}) {
  function toNextStep() {
    toSecondStep();
  }
  function handlePrev() {
    switch (translateValue) {
      case 300:
        setTranslateValue(-300);
        setMagicCircle(3);
        break;
      case 0:
        setTranslateValue(300);
        setMagicCircle(1);
        break;
      case -300:
        setTranslateValue(0);
        setMagicCircle(2);
        break;
    }
  }
  function handleNext() {
    switch (translateValue) {
      case 300:
        setTranslateValue(0);
        setMagicCircle(2);
        break;
      case 0:
        setTranslateValue(-300);
        setMagicCircle(3);
        break;
      case -300:
        setTranslateValue(300);
        setMagicCircle(1);
        break;
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 1</h1>
        <h2 className={styles.text_ko}>펜타클을 준비하세요.</h2>
      </div>
      <div className={styles.bottom_wrapper}>
        <ul
          className={styles.bottoms}
          style={{ transform: `translateX(${translateValue}px)` }}
        >
          {bottoms.map(({ id, src, alt, width, height }) => {
            return (
              <li className={styles.bottoms} key={alt}>
                <MagicCircle
                  key={id}
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                />
              </li>
            );
          })}
        </ul>
        <div className={styles.btns}>
          <button className={styles.left} onClick={handlePrev}>
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button className={styles.right} onClick={handleNext}>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
      <div>
        <button className="btn" onClick={toNextStep}>
          다음 단계로
        </button>
      </div>
    </section>
  );
}
