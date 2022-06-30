import styles from "../styles/Share.module.scss";
import { RiTwitterFill, RiFacebookFill, RiKakaoTalkFill } from "react-icons/ri";

export default function ShareButton() {
  const text =
    "소원을 들어줘 🕯 My Altar 🔮 소원을 이루어 주는 나만의 제단 만들기";
  const url = "https://www.odd-scythe.com";

  function shareTwitter() {
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
  }
  function shareFacebook() {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${url}`);
  }
  return (
    <ul className={styles.btns}>
      <li onClick={shareTwitter}>
        <RiTwitterFill />
      </li>
      <li onClick={shareFacebook}>
        <RiFacebookFill />
      </li>
      <li>
        <RiKakaoTalkFill />
      </li>
    </ul>
  );
}
