import Image from "next/image";

export default function ColorCandle({ src, alt, width, height }) {
  return (
    <Image
      className={styles.candle}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
