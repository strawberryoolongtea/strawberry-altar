import { useState } from "react";
import Bottom from "../../components/Bottom";
import Candle from "../../components/Candle";
import Items from "../../components/Items";
import { bottoms } from "../../data/bottoms";

export default function Step() {
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isSecondStep, setIsSecondStep] = useState(false);
  // const [isThirdStep, setIsThirdStep] = useState(false);

  const [translateValue, setTranslateValue] = useState(
    bottoms[0].translateValue
  );
  const [magicCircle, setMagicCircle] = useState(1);

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
        <Candle toFirstStep={toFirstStep} toThirdStep={toThirdStep} />
      ) : (
        <Items
          toSecondStep={toSecondStep}
          magicCircle={magicCircle}
          translateValue={translateValue}
        />
      )}
    </div>
  );
}
