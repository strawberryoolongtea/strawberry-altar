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

  const [imgUrl, setImgUrl] = useState("");

  const bottomRef = useRef();
  const candleRef = useRef();
  const mergedRef = useRef();
  const itemRef = useRef([]);
  const bgRef = useRef();
  const cvsRef = useRef();

  function onSaveAs() {
    const bottom = bottomRef.current;
    const candle = candleRef.current;
    const merged = mergedRef.current;
    const bg = bgRef.current;
    const bgCtx = bg.getContext("2d");
    const mergedCtx = merged.getContext("2d");

    bgCtx.fillStyle = "#2a3e34";
    bgCtx.fillRect(0, 0, 600, 600);
    mergedCtx.drawImage(bg, 0, 0, 600, 600);
    mergedCtx.drawImage(bottom, 0, 0, 600, 600);
    const xy = [
      [20, 20],
      [330, 20],
      [20, 330],
      [330, 330],
    ];
    itemRef.current.map((item, idx) => {
      console.log(item);
      mergedCtx.drawImage(item, ...xy[idx], 240, 240);
    });
    mergedCtx.drawImage(candle, 0, 0, 600, 600);

    let link = document.createElement("a");
    link.download = "my-altar.png";
    link.href = merged.toDataURL();
    console.log(merged.toDataURL());
    mergedRef.current.appendChild(link);
    link.click();
    mergedRef.current.removeChild(link);
  }

  useEffect(() => {
    const background = bgRef.current;
    const bottom = bottomRef.current;
    const candle = candleRef.current;
    const bgCtx = background.getContext("2d");
    const bottomCtx = bottom.getContext("2d");
    const candleCtx = candle.getContext("2d");

    const bottomImg = new Image();
    const candleImg = new Image();

    bgCtx.fillStyle = "#dcff00";
    bgCtx.fillRect(0, 0, 600, 600);

    bottomImg.src = bg.src;
    candleImg.src = selectedCandle.src;

    bottomImg.onload = function () {
      bottomCtx.globalAlpha = 0.3;
      bottomCtx.drawImage(bottomImg, 0, 0, 600, 600);
    };
    candleImg.onload = function () {
      candleCtx.drawImage(candleImg, 0, 0, 600, 600);
    };
    magicItems.map((magicItem, idx) => {
      // console.log(itemRef.current);
      const itemCtx = itemRef.current[idx].getContext("2d");
      const itemImg = new Image();
      itemImg.src = magicItem.src;
      // console.log(itemImg);
      itemImg.onload = function () {
        itemCtx.drawImage(itemImg, 0, 0, 240, 240);
      };
    });

    html2canvas(cvsRef.current).then((cvs) => setImgUrl(cvs.toDataURL()));
    console.log(imgUrl);
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
      <div className={styles.bottom_candle_container} ref={cvsRef}>
        <canvas
          className={styles.bg_canvas}
          width="600"
          height="600"
          ref={bgRef}
        />
        <canvas
          className={styles.merged_container}
          width="600"
          height="600"
          ref={mergedRef}
        />
        <canvas
          className={styles.bottom_container}
          width="600"
          height="600"
          ref={bottomRef}
        />
        <canvas
          className={styles.candle_container}
          width="600"
          height="600"
          ref={candleRef}
        />
        <ul className={styles.items_container}>
          {magicItems.map((item, idx) => {
            return (
              <li className={styles.items} key={item.alt}>
                <canvas
                  className={styles.items_canvas}
                  id={idx}
                  width="240"
                  height="240"
                  ref={(el) => (itemRef.current[idx] = el)}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <img src={imgUrl} width={300} height={300} alt="altar" />
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
