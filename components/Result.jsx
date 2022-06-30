import styles from "../styles/Result.module.scss";
import Image from "next/image";
import { bottoms } from "../data/bottoms";
import { colors } from "../data/colors";
import Share from "./Share";
import { useState } from "react";

export default function Result({
  toFirstStep,
  magicCircle,
  candleColor,
  setCandleColor,
  setMagicItems,
  imgUrl,
}) {
  const [isShare, setIsShare] = useState(false);

  function restart() {
    toFirstStep();
    setCandleColor(colors[0].name);
    setMagicItems([]);
  }
  function share() {
    setIsShare(true);
  }

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <p>
          나만의 제단을 부적처럼 지녀서
          <br />
          소원을 성취해 보세요.
        </p>
      </div>
      <div className={styles.img_desc}>
        꾹 눌러 이미지를 저장할 수 있습니다.
        <br />
        SNS 공유 이벤트에 참여해 특별한 선물을 받아보세요.
      </div>
      <div className={styles.altar_img}>
        <Image
          src={imgUrl}
          width={300}
          height={300}
          alt="my altar"
          layout="responsive"
        />
      </div>
      <p className={styles.description}>
        주위 사람들이 더 많이 알수록
        <br />
        소원은 더 빨리 이루어진답니다.
      </p>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={restart}>
          다시 만들기
        </button>

        <button className={styles.btn} onClick={share}>
          공유하기
        </button>
      </div>
      {isShare ? <Share setIsShare={setIsShare} /> : null}
    </section>
  );
}
