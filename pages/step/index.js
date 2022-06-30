import Head from "next/head";
import { useState } from "react";
import Bottom from "../../components/Bottom";
import Candle from "../../components/Candle";
import Inter from "../../components/Inter";
import Items from "../../components/Items";
import Result from "../../components/Result";
import { bottoms } from "../../data/bottoms";
import { colors } from "../../data/colors";

export default function Step() {
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isSecondStep, setIsSecondStep] = useState(false);
  const [isThirdStep, setIsThirdStep] = useState(false);
  const [isItemsStep, setIsItemsStep] = useState(false);

  const [translateValue, setTranslateValue] = useState(
    bottoms[0].translateValue
  );
  const [magicCircle, setMagicCircle] = useState(1);
  const [candleColor, setCandleColor] = useState(colors[0].name);
  const [magicItems, setMagicItems] = useState([]);
  const [imgUrl, setImgUrl] = useState("");

  function toFirstStep() {
    setIsSecondStep(false);
    setIsFirstStep(true);
  }
  function toSecondStep() {
    setIsFirstStep(false);
    setIsSecondStep(true);
  }
  function toThirdStep() {
    setIsSecondStep(false);
    setIsThirdStep(true);
  }
  function toItemsStep() {
    setIsThirdStep(false);
    setIsItemsStep(true);
  }
  function toResult() {
    setIsItemsStep(false);
  }
  function changeCandleColor(color) {
    setCandleColor(color);
  }

  return (
    <div>
      <Head>
        <title>소원을 들어줘 🕯 My Altar 🔮 나만의 제단 만들기</title>
      </Head>
      {isFirstStep ? (
        <Bottom
          toSecondStep={toSecondStep}
          translateValue={translateValue}
          setTranslateValue={setTranslateValue}
          magicCircle={magicCircle}
          setMagicCircle={setMagicCircle}
        />
      ) : isSecondStep ? (
        <Candle
          toFirstStep={toFirstStep}
          toThirdStep={toThirdStep}
          candleColor={candleColor}
          changeCandleColor={changeCandleColor}
        />
      ) : isThirdStep ? (
        <Inter
          toSecondStep={toSecondStep}
          toItemsStep={toItemsStep}
          magicCircle={magicCircle}
          candleColor={candleColor}
        />
      ) : isItemsStep ? (
        <Items
          toSecondStep={toSecondStep}
          toResult={toResult}
          magicCircle={magicCircle}
          candleColor={candleColor}
          translateValue={translateValue}
          magicItems={magicItems}
          setMagicItems={setMagicItems}
          setImgUrl={setImgUrl}
        />
      ) : (
        <Result
          toFirstStep={toFirstStep}
          magicCircle={magicCircle}
          candleColor={candleColor}
          setMagicCircle={setMagicCircle}
          setCandleColor={setCandleColor}
          setMagicItems={setMagicItems}
          imgUrl={imgUrl}
        />
      )}
    </div>
  );
}
