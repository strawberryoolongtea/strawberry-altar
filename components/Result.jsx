export default function Result({ toItemsStep }) {
  function toPrevStep() {
    toItemsStep();
  }
  return (
    <div>
      <h1>Result</h1>
      <div></div>
      <button onClick={toPrevStep}>이전</button>
      <button>다음</button>
    </div>
  );
}
