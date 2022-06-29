import styles from "../styles/Result.module.scss";
import Link from "next/link";
import Image from "next/image";
import MagicCircle from "./MagicCircle";
import ColorCandle from "./ColorCandle";
import MagicItem from "./MagicItem";
import { bottoms } from "../data/bottoms";
import { colors } from "../data/colors";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useEffect, useRef, useState } from "react";

export default function Result({
  toFirstStep,
  magicCircle,
  candleColor,
  magicItems,
  imgUrl,
}) {
  const bg = bottoms.filter((bottom) => bottom.id === magicCircle)[0];
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

        <button className={styles.btn}>공유하기</button>
      </div>
    </section>
  );
}
