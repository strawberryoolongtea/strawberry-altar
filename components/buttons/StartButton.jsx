import Styles from "../../styles/StartButton.module.scss";
export default function StartButton({ text }) {
  return <button className={Styles.btn}>{text}</button>;
}
