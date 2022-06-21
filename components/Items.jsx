import Link from "next/link";
import styles from "../styles/Items.module.scss";
import { bottoms } from "../data/bottoms";
import { colors } from "../data/colors";
import { items } from "../data/items";
import ColorCandle from "./ColorCandle";
import MagicCircle from "./MagicCircle";
import MagicItem from "./MagicItem";
import Image from "next/image";

export default function Items({
  toSecondStep,
  magicCircle,
  candleColor,
  translateValue,
  magicItems,
  setMagicItems,
}) {
  const bg = bottoms.filter((bottom) => bottom.id === magicCircle)[0].src;
  const selectedCandle = colors.filter(
    (color) => color.name === candleColor
  )[0];
  function toPrevStep() {
    toSecondStep();
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
  console.log(magicItems);
  return (
    <section className={styles.container}>
      {/* <div className={styles.title}>
        <h1 className={styles.text_en}>Step 3</h1>
        <h2 className={styles.text_ko}>성물을 장식하세요.</h2>
      </div> */}
      <div className={styles.bottom_candle_container}>
        <ul className={styles.bottom_container}>
          <MagicCircle src={bg} alt="altar style 1" width={300} height={300} />
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
      <div className="btns">
        <button className="btn" onClick={toPrevStep}>
          이전
        </button>
        <button className="btn">다음</button>
      </div>
      <div className={styles.items_list}>
        <ul className={styles.items}>
          {items.map(({ src, alt, width, height }) => {
            return (
              <li key={alt} onClick={addItem}>
                <Image src={src} alt={alt} width={width} height={height} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
