import Styles from "../styles/Start.module.scss";
export default function Start() {
  return (
    <div className={Styles.container}>
      <div>
        <h1 className={Styles.title_ko}>소원을 들어줘</h1>
        <span className={Styles.title_en}>My Altar</span>
      </div>
    </div>
  );
}
