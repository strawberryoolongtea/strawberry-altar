import Link from "next/link";
import styles from "../styles/Items.module.scss";
import { bottoms } from "../data/bottoms";
import ColorCandle from "./colorCandle";
import MagicCircle from "./MagicCircle";

export default function Items({ toSecondStep, magicCircle, translateValue }) {
  const bg = bottoms.filter((bottom) => bottom.id === magicCircle)[0].src;
  function toPrevStep() {
    toSecondStep();
  }
  return (
    <section className="styles.container">
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 3</h1>
        <h2 className={styles.text_ko}>성물을 장식하세요.</h2>
      </div>
      <div className={styles.items_container}>
        <ul className={styles.bottom_container}>
          <MagicCircle src={bg} alt="altar style 1" width={300} height={300} />
        </ul>
        <div className={styles.candle_container}>
          <ColorCandle
            src="/candle/candle-black.svg"
            alt="pink candle"
            width={1200}
            height={1200}
          />
        </div>
      </div>
      <div>
        <button className="btn" onClick={toPrevStep}>
          이전
        </button>
        <button className="btn">다음</button>
      </div>
    </section>
  );
}
