import Link from "next/link";
import styles from "../styles/Items.module.scss";
import { bottoms } from "../data/bottoms";

export default function Items({ toSecondStep, magicCircle, translateValue }) {
  console.log(bottoms.filter((bottom) => bottom.id === magicCircle)[0].src);
  function toPrevStep() {
    toSecondStep();
  }
  return (
    <section>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 3</h1>
        <h2 className={styles.text_ko}>성물을 장식하세요.</h2>
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
