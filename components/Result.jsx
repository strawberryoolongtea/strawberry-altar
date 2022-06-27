import styles from "../styles/Result.module.scss";
import Link from "next/link";
import MagicCircle from "./MagicCircle";
import ColorCandle from "./ColorCandle";
import MagicItem from "./MagicItem";
import { bottoms } from "../data/bottoms";
import { colors } from "../data/colors";

export default function Result({
  toFirstStep,
  magicCircle,
  candleColor,
  magicItems,
}) {
  const bg = bottoms.filter((bottom) => bottom.id === magicCircle)[0].src;
  const selectedCandle = colors.filter(
    (color) => color.name === candleColor
  )[0];
  function restart() {
    toFirstStep();
  }
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <p>
          나만의 제단을 부적처럼 지녀서
          <br />
          소원을 성취해 보세요.
          {/* <br /> */}
          {/* <br />
          주위 사람들이 더 많이 알수록
          <br />
          소원은 더 빨리 이루어진답니다. */}
        </p>
        <div className={styles.bottom_candle_container}>
          <ul className={styles.bottom_container}>
            <MagicCircle
              src={bg}
              alt="altar style 1"
              width={300}
              height={300}
            />
          </ul>
          <div className={styles.candle_container}>
            <ColorCandle {...selectedCandle} />
          </div>
          <ul className={styles.items_container}>
            {magicItems.map((item) => {
              return (
                <li key={item.alt}>
                  <MagicItem {...item} />
                </li>
              );
            })}
          </ul>
        </div>
        <p className={styles.description}>
          주위 사람들이 더 많이 알수록
          <br />
          소원은 더 빨리 이루어진답니다.
        </p>
        <div className="btns">
          <button className="btn" onClick={restart}>
            다시 만들기
          </button>
          <button className="btn">공유하기</button>
        </div>
      </div>
    </section>
  );
}
