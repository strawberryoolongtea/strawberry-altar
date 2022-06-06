import Link from "next/link";
export default function Items() {
  return (
    <section>
      <div>
        <h1>Step 3</h1>
        <h2>성물을 장식하세요.</h2>
      </div>
      <div>
        <Link href="/step/candle">
          <button className="btn">이전</button>
        </Link>
        <Link href="/step/items">
          <button className="btn">다음</button>
        </Link>
      </div>
    </section>
  );
}
