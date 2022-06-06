export default function Color({ name, color }) {
  const handleClickColor = () => {
    alert(`${name}: ${color}`);
  };
  return (
    <li onClick={handleClickColor} style={{ backgroundColor: `${color}` }}></li>
  );
}
