export default function Result({ toThirdStep }) {
  function toPrevStep() {
    toThirdStep();
  }
  return (
    <div>
      <h1>Result</h1>
      <button onClick={toPrevStep}>이전</button>
      <button>다음</button>
    </div>
  );
}
