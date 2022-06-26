import styles from "../styles/Inter.module.scss";

export default function Inter({ toSecondStep, toItemsStep }) {
  const toPrevStep = () => {
    toSecondStep();
  };
  const toNextStep = () => {
    toItemsStep();
  };
  return (
    <section>
      <div className={styles.title}>
        <h1 className={styles.text_en}>Step 3</h1>
        <h2 className={styles.text_ko}>성물을 장식하세요.</h2>
        <p className={styles.title_desc}>
          마음에 드는 성물로 펜타클을 채워보세요.
        </p>
      </div>
      <div className="btns">
        <button className="btn" onClick={toPrevStep}>
          뒤로
        </button>
        <button className="btn" onClick={toNextStep}>
          다음 단계로
        </button>
      </div>
    </section>
  );
}
