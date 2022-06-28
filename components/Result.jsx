import styles from "../styles/Result.module.scss";
import Link from "next/link";
// import Image from "next/image";
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
}) {
  const bg = bottoms.filter((bottom) => bottom.id === magicCircle)[0];
  const selectedCandle = colors.filter(
    (color) => color.name === candleColor
  )[0];
  function restart() {
    toFirstStep();
  }
  const bottomRef = useRef();
  const candleRef = useRef();
  const mergedRef = useRef();
  const itemRef = useRef();

  function onSaveAs() {
    const bottom = bottomRef.current;
    const candle = candleRef.current;
    const merged = mergedRef.current;
    const bottomCtx = bottom.getContext("2d");
    const candleCtx = candle.getContext("2d");
    const mergedCtx = merged.getContext("2d");

    mergedCtx.fillStyle = "white";
    mergedCtx.drawImage(bottom, 0, 0, 3000, 3000);
    mergedCtx.drawImage(candle, 0, 0, 3000, 3000);

    let link = document.createElement("a");
    link.download = "my-altar.png";
    link.href = merged.toDataURL();
    mergedRef.current.appendChild(link);
    link.click();
    mergedRef.current.removeChild(link);
  }

  useEffect(() => {
    const bottom = bottomRef.current;
    const candle = candleRef.current;
    const item = itemRef.current;
    const bottomCtx = bottom.getContext("2d");
    const candleCtx = candle.getContext("2d");

    const bottomImg = new Image();
    const candleImg = new Image();

    bottomImg.src = bg.src;
    candleImg.src = selectedCandle.src;

    bottomImg.onload = function () {
      bottomCtx.drawImage(bottomImg, 0, 0);
    };
    candleImg.onload = function () {
      candleCtx.drawImage(candleImg, 0, 0);
    };
    console.log("map 이전");
    console.log(magicItems);
    magicItems.map((magicItem) => {
      console.log(itemRef.current);
      const itemCtx = itemRef.current.getContext("2d");
      const itemImg = new Image();
      itemImg.src = magicItem.src;
      console.log(itemImg);
      itemImg.onload = function () {
        itemCtx.drawImage(itemImg, 0, 0, 150, 150);
      };
    });
    console.log("map 이후");
  });
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <p>
          나만의 제단을 부적처럼 지녀서
          <br />
          소원을 성취해 보세요.
        </p>
        <div className={styles.btns}>
          <button className={styles.btn} onClick={onSaveAs}>
            이미지 저장하기
          </button>
        </div>
      </div>
      <div className={styles.bottom_candle_container}>
        <canvas
          className={styles.merged_container}
          width="3000"
          height="3000"
          ref={mergedRef}
        />
        <canvas
          className={styles.bottom_container}
          width="3000"
          height="3000"
          ref={bottomRef}
        />
        <canvas
          className={styles.candle_container}
          width="3000"
          height="3000"
          ref={candleRef}
        />
        <ul className={styles.items_container}>
          {magicItems.map((item, idx) => {
            return (
              <li className={styles.items} key={item.alt}>
                <canvas id={idx} width="150" height="150" ref={itemRef} />
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
      <div className={styles.btns}>
        <button className={styles.btn} onClick={restart}>
          다시 만들기
        </button>

        <button className={styles.btn}>공유하기</button>
      </div>
    </section>
  );
}
