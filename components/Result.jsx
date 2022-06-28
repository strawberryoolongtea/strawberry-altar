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
  const itemRef = useRef([]);
  const bgRef = useRef();

  function onSaveAs() {
    const bottom = bottomRef.current;
    const candle = candleRef.current;
    const merged = mergedRef.current;
    const bg = bgRef.current;
    const bgCtx = bg.getContext("2d");
    const mergedCtx = merged.getContext("2d");

    bgCtx.fillStyle = "#2a3e34";
    bgCtx.fillRect(0, 0, 300, 300);
    mergedCtx.drawImage(bg, 0, 0, 300, 300);
    mergedCtx.drawImage(bottom, 0, 0, 300, 300);
    const xy = [
      [10, 10],
      [170, 10],
      [10, 170],
      [170, 170],
    ];
    itemRef.current.map((item, idx) => {
      console.log(item);
      mergedCtx.drawImage(item, ...xy[idx], 120, 120);
    });
    mergedCtx.drawImage(candle, 0, 0, 300, 300);

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
    magicItems.map((magicItem, idx) => {
      console.log(itemRef.current);
      const itemCtx = itemRef.current[idx].getContext("2d");
      const itemImg = new Image();
      itemImg.src = magicItem.src;
      console.log(itemImg);
      itemImg.onload = function () {
        itemCtx.drawImage(itemImg, 0, 0, 120, 120);
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
          className={styles.bg_canvas}
          width="300"
          height="300"
          ref={bgRef}
        />
        <canvas
          className={styles.merged_container}
          width="300"
          height="300"
          ref={mergedRef}
        />
        <canvas
          className={styles.bottom_container}
          width="300"
          height="300"
          ref={bottomRef}
        />
        <canvas
          className={styles.candle_container}
          width="300"
          height="300"
          ref={candleRef}
        />
        <ul className={styles.items_container}>
          {magicItems.map((item, idx) => {
            return (
              <li className={styles.items} key={item.alt}>
                <canvas
                  id={idx}
                  width="120"
                  height="120"
                  ref={(el) => (itemRef.current[idx] = el)}
                />
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
