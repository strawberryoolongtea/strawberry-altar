import styles from "../styles/Inter.module.scss";
import MagicCircle from "./MagicCircle";
import ColorCandle from "./ColorCandle";
import { bottoms } from "../data/bottoms";
import { colors } from "../data/colors";

export default function Inter({
  toSecondStep,
  toItemsStep,
  magicCircle,
  candleColor,
}) {
  const bg = bottoms.filter((bottom) => bottom.id === magicCircle)[0].src;
  const selectedCandle = colors.filter(
    (color) => color.name === candleColor
  )[0];
  const toPrevStep = () => {
    toSecondStep();
  };
  const toNextStep = () => {
    toItemsStep();
  };
  return (
    <section>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 3</h1>
        <h2 className={styles.text_ko}>성물을 장식하세요.</h2>
        <p className={styles.title_desc}>
          마음에 드는 성물로 펜타클을 채워보세요.
          <br />
          성물은 총 4가지를 고를 수 있습니다.
        </p>
      </div>
      <div className={styles.bottom_candle_container}>
        <ul className={styles.bottom_container}>
          <MagicCircle src={bg} alt="altar style 1" width={300} height={300} />
        </ul>
        <div className={styles.candle_container}>
          <ColorCandle {...selectedCandle} />
        </div>
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
