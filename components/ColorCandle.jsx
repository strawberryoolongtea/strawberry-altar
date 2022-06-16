import Image from "next/image";

export default function ColorCandle({ src, alt, width, height }) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}
