"use client";

import dynamic from "next/dynamic";

const OcrReader = dynamic(() => import("@/components/OcrReader"), {
  ssr: false,
});

export default function ClientHome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <h1 className="text-3xl font-bold my-6 text-blue-500">SnapQuiz</h1>
      <OcrReader />
    </main>
  );
}
