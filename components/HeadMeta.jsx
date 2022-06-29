import Head from "next/head";

export default function HeadMeta({ title, description, url, img }) {
  return (
    <Head>
      <title>{title || "소원을 들어줘 My Altar"}</title>
      <meta
        name="description"
        content={description || "나만의 소원을 이루어 주는 나만의 제단 만들기"}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "소원을 들어줘 My Altar"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://www.odd-scythe.com/"} />
      <meta property="og:image" content={img || "/title-img.png"} />
    </Head>
  );
}
