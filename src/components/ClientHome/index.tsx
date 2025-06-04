"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const OcrReader = dynamic(() => import("@/components/OcrReader"), {
  ssr: false,
});

export default function ClientHome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-primary p-4 font-poppins">
      <Image
        src={"/assets/images/logo.png"}
        width={100}
        height={100}
        alt="Logo"
      />
      <h1 className="text-3xl font-bold my-6 text-title-primary">SnapQuiz</h1>
      <OcrReader />
    </main>
  );
}
