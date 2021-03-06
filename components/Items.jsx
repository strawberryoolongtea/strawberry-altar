import styles from "../styles/Items.module.scss";
import { bottoms } from "../data/bottoms";
import { colors } from "../data/colors";
import { items } from "../data/items";
import ColorCandle from "./ColorCandle";
import MagicCircle from "./MagicCircle";
import MagicItem from "./MagicItem";
import Item from "./Item";
import { useRef } from "react";

export default function Items({
  toSecondStep,
  toResult,
  magicCircle,
  candleColor,
  translateValue,
  magicItems,
  setMagicItems,
  setImgUrl,
}) {
  const bg = bottoms.filter((bottom) => bottom.id === magicCircle)[0].src;
  const selectedCandle = colors.filter(
    (color) => color.name === candleColor
  )[0];
  const mergerRef = useRef();
  const backgroundRef = useRef();
  const pentacleRef = useRef();
  const candleRef = useRef();
  const itemsRef = useRef([]);

  function toPrevStep() {
    toSecondStep();
  }
  function toNextStep() {
    toResult();
    const merger = mergerRef.current;
    const background = backgroundRef.current;
    const pentacle = pentacleRef.current;
    const candle = candleRef.current;
    const mergerCtx = merger.getContext("2d");
    const backgroundCtx = background.getContext("2d");
    const pentacleCtx = pentacle.getContext("2d");
    const candleCtx = candle.getContext("2d");

    mergerCtx.imageSmoothingEnabled = true;
    mergerCtx.imageSmoothingQuality = "high";

    backgroundCtx.fillStyle = "#2a3e34";
    backgroundCtx.fillRect(0, 0, 3000, 3000);

    mergerCtx.drawImage(background, 0, 0, 1080, 1080);

    const pentacleImg = new Image();
    const candleImg = new Image();

    pentacleImg.src = bg;
    candleImg.src = selectedCandle.src;
    pentacleCtx.globalAlpha = 0.3;
    pentacleCtx.drawImage(pentacleImg, 0, 0, 3000, 3000);
    mergerCtx.drawImage(pentacle, 0, 0, 1080, 1080);

    const positions = [
      [50, 50],
      [580, 20],
      [20, 580],
      [580, 580],
    ];
    magicItems.map((item, idx) => {
      const itemsCtx = itemsRef.current[idx].getContext("2d");
      const itemsImg = new Image();
      itemsImg.src = item.src;
      itemsCtx.drawImage(itemsImg, 0, 0, 3000, 3000);
      mergerCtx.drawImage(itemsRef.current[idx], ...positions[idx], 450, 450);
    });

    candleCtx.drawImage(candleImg, 0, 0, 3000, 3000);
    mergerCtx.drawImage(candle, 110, 110, 860, 860);

    setImgUrl(merger.toDataURL());
  }
  function addItem(e) {
    const selectedItem = e.target;
    if (magicItems.length < 4) {
      if (
        magicItems.filter((item) => item.alt === selectedItem.alt).length !== 0
      ) {
        setMagicItems(
          magicItems.filter((item) => item.alt !== selectedItem.alt)
        );
      } else {
        setMagicItems([
          ...magicItems,
          ...items.filter((item) => item.alt === selectedItem.alt),
        ]);
      }
    }
    if (magicItems.length === 4) {
      if (
        magicItems.filter((item) => item.alt === selectedItem.alt).length !== 0
      ) {
        setMagicItems(
          magicItems.filter((item) => item.alt !== selectedItem.alt)
        );
      }
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.bottom_candle_container}>
        <div className={styles.bottom_container}>
          <MagicCircle src={bg} alt="altar style 1" width={300} height={300} />
        </div>
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
      <div className="btns">
        <button className="btn" onClick={toPrevStep}>
          ??????
        </button>
        <button className="btn" onClick={toNextStep}>
          ??????
        </button>
      </div>

      <div className={styles.items_list}>
        <p>
          ???????????? ???????????? ????????? ???????????????.
          <br />
          ?????? ???????????? ??????????????? ???????????? ???????????????.
        </p>
        <ul className={styles.items}>
          {items.map((item) => {
            return (
              <li key={item.alt} onClick={addItem}>
                <Item {...item} />
              </li>
            );
          })}
        </ul>
      </div>
      <canvas
        className={styles.canvas_merger}
        width="1080"
        height="1080"
        ref={mergerRef}
      />
      <canvas
        className={styles.canvas_background}
        width="3000"
        height="3000"
        ref={backgroundRef}
      />
      <canvas
        className={styles.canvas_pentacle}
        width="3000"
        height="3000"
        ref={pentacleRef}
      />
      <canvas
        className={styles.canvas_candle}
        width="3000"
        height="3000"
        ref={candleRef}
      />
      {magicItems.map((item, idx) => (
        <canvas
          className={styles.canvas_items}
          key={item.alt}
          width="3000"
          height="3000"
          ref={(el) => (itemsRef.current[idx] = el)}
        ></canvas>
      ))}
    </section>
  );
}
