import Image from "next/image";

export default function MagicItem({ item }) {
  return (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
    />
  );
}
