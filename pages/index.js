import Head from "next/head";
import Link from "next/link";
import { useState, useRef } from "react";
import Header from "../components/Header";
import Start from "../components/Start";

export default function Home() {
  const [isStart, setIsStart] = useState(false);
  const [isQuestionShow, setIsQuestionShow] = useState(true);
  const handleStart = () => {
    setIsStart(true);
    setIsQuestionShow(false);
  };
  return (
    <>
      <Head></Head>
      {/* <Header /> */}
      <div className="bg-orange-500 h-screen flex justify-center items-center">
        <Start></Start>
      </div>
    </>
  );
}
