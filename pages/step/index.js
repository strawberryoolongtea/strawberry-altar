import { useState } from "react";
import Bottom from "../../components/Bottom";
import Candle from "../../components/Candle";
import Inter from "../../components/Inter";
import Items from "../../components/Items";
import Result from "../../components/Result";
import { bottoms } from "../../data/bottoms";
import { colors } from "../../data/colors";
import { items } from "../../data/items";

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
    // console.log(isFirstStep, isSecondStep, isThirdStep, isItemsStep);
  }
  function toSecondStep() {
    setIsFirstStep(false);
    setIsSecondStep(true);
    // console.log(isFirstStep, isSecondStep, isThirdStep, isItemsStep);
  }
  function toThirdStep() {
    setIsSecondStep(false);
    setIsThirdStep(true);
    // console.log(isFirstStep, isSecondStep, isThirdStep, isItemsStep);
  }
  function toItemsStep() {
    setIsThirdStep(false);
    setIsItemsStep(true);
    // console.log(isFirstStep, isSecondStep, isThirdStep, isItemsStep);
  }
  function toResult() {
    setIsItemsStep(false);
    // console.log(isFirstStep, isSecondStep, isThirdStep, isItemsStep);
  }
  function changeCandleColor(color) {
    setCandleColor(color);
  }

  // console.log(candleColor);
  return (
    <div>
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
          magicItems={magicItems}
          imgUrl={imgUrl}
        />
      )}
    </div>
  );
}
