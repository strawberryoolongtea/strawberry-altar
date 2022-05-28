import headerStyles from "../components/header.module.scss";
export default function Header() {
  return (
    <header className={headerStyles.title_container}>
      <h1 className={headerStyles.title_inner_container}>
        <span className={headerStyles.title_ko}>소원을 말해봐</span>
        {/* <span className={headerStyles.title_en}>My Altar</span> */}
      </h1>
    </header>
  );
}
