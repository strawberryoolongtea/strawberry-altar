import { useRef, useState } from "react";
import styles from "../styles/Share.module.scss";
import ShareButton from "./ShareButton";
import { RiCloseLine } from "react-icons/ri";

export default function Share({ setIsShare }) {
  const copyText = useRef();
  const [isCopied, setIsCopied] = useState(false);
  function close() {
    setIsShare(false);
  }
  function copyToClipboard() {
    navigator.clipboard.writeText("https://www.odd-scythe.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>SNS 공유하기</h1>
      <h2 className={styles.desc}>
        자신만의 제단을 만들 수 있도록
        <br />
        모두에게 공유해요!
      </h2>
      <ShareButton />
      <h1 className={styles.title}>또는 링크로 공유하기</h1>
      <div className={styles.copylink}>
        <span ref={copyText}>https://www.odd-scythe.com</span>
        <button onClick={copyToClipboard}>복사</button>
      </div>
      <button className={styles.btn_close} onClick={close}>
        <RiCloseLine />
      </button>
      {isCopied ? <p className={styles.push}>링크가 복사되었습니다!</p> : null}
    </section>
  );
}
