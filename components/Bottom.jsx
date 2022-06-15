import styles from "../styles/Bottom.module.scss";
import Link from "next/link";
import { useState } from "react";
import { bottoms } from "../data/bottoms";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import MagicCircle from "./MagicCircle";

export default function Bottom({
  toSecondStep,
  translateValue,
  setTranslateValue,
  magicCircle,
  setMagicCircle,
}) {
  function toNextStep() {
    toSecondStep();
    alert(magicCircle);
  }
  function handlePrev() {
    switch (translateValue) {
      case 300:
        setTranslateValue(-300);
        setMagicCircle(3);
        break;
      case 0:
        setTranslateValue(300);
        setMagicCircle(1);
        break;
      case -300:
        setTranslateValue(0);
        setMagicCircle(2);
        break;
    }
  }
  function handleNext() {
    switch (translateValue) {
      case 300:
        setTranslateValue(0);
        setMagicCircle(2);
        break;
      case 0:
        setTranslateValue(-300);
        setMagicCircle(3);
        break;
      case -300:
        setTranslateValue(300);
        setMagicCircle(1);
        break;
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 1</h1>
        <h2 className={styles.text_ko}>마법진을 그리세요.</h2>
      </div>
      <div className={styles.bottom_wrapper}>
        {/* <MagicCircle
          className={styles.bottom}
          src="/altar/altar1.svg"
          alt="altar style"
          width={260}
          height={260}
        /> */}
        <ul
          className={styles.bottoms}
          style={{ transform: `translateX(${translateValue}px)` }}
        >
          {bottoms.map(({ id, src, alt, width, height }) => {
            return (
              <MagicCircle
                key={id}
                src={src}
                alt={alt}
                width={width}
                height={height}
              />
            );
          })}
        </ul>
        <div className={styles.btns}>
          <button className={styles.left} onClick={handlePrev}>
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button className={styles.right} onClick={handleNext}>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
      <div>
        <button className="btn" onClick={toNextStep}>
          다음
        </button>
      </div>
    </section>
  );
}
