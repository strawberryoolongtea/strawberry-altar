import headerStyles from "../components/header.module.scss";
export default function Header() {
  return (
    <header className="flex justify-center">
      <h1 className={headerStyles.title}>나만의 제단 만들기</h1>
    </header>
  );
}
