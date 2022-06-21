import { useState } from "react";
import Bottom from "../../components/Bottom";
import Candle from "../../components/Candle";
import Items from "../../components/Items";
import { bottoms } from "../../data/bottoms";
import { colors } from "../../data/colors";
import { items } from "../../data/items";

export default function Step() {
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isSecondStep, setIsSecondStep] = useState(false);
  // const [isThirdStep, setIsThirdStep] = useState(false);

  const [translateValue, setTranslateValue] = useState(
    bottoms[0].translateValue
  );
  const [magicCircle, setMagicCircle] = useState(1);
  const [candleColor, setCandleColor] = useState(colors[0].name);
  // const [magicItems, setMagicItems] = useState(items.slice(0, 4));
  const [magicItems, setMagicItems] = useState([]);

  function toFirstStep() {
    setIsFirstStep(true);
    setIsSecondStep(false);
  }
  function toSecondStep() {
    setIsFirstStep(false);
    setIsSecondStep(true);
  }
  function toThirdStep() {
    setIsSecondStep(false);
  }
  function changeCandleColor(color) {
    setCandleColor(color);
  }

  console.log(candleColor);
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
      ) : (
        <Items
          toSecondStep={toSecondStep}
          magicCircle={magicCircle}
          candleColor={candleColor}
          translateValue={translateValue}
          magicItems={magicItems}
          setMagicItems={setMagicItems}
        />
      )}
    </div>
  );
}
