import Link from "next/link";
import Styles from "../styles/Bottom.module.scss";
export default function Bottom() {
  return (
    <div className={Styles.container}>
      <h1>제단의 스타일을 선택하세요.</h1>
      <div className={Styles.type}>제단1</div>
      <div className={Styles.type}>제단2</div>
      <div className={Styles.type}>제단3</div>
    </div>
  );
}
