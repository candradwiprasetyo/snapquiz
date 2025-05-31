import OcrReader from "@/components/OcrReader";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">SnapQuiz</h1>
      <OcrReader />
    </main>
  );
}
