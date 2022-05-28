import startStyles from "./start.module.scss";
export default function Start() {
  return (
    <div className={startStyles.start_container}>
      <div>
        <span className={startStyles.title_ko}>소원을 들어줘</span>
        <span className="block text-center">My</span>
        <span className="block text-center">Altar</span>
      </div>
      <button className={startStyles.button_ko}>나만의 제단 만들기</button>
    </div>
  );
}
