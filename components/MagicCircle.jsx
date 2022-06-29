import Image from "next/image";

export default function MagicCircle({ src, alt, width, height }) {
  return (
    <Image priority={true} src={src} alt={alt} width={width} height={height} />
  );
}
