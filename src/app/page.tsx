export const metadata = {
  title: "SnapQuiz - AI Quiz Generator",
  description:
    "Automatically generate multiple-choice quizzes from images using OCR and OpenAI. Snap a photo or upload from your gallery to create intelligent quizzes instantly.",
  openGraph: {
    title: "AI Quiz Generator",
    description:
      "Automatically generate multiple-choice quizzes from images using OCR and OpenAI. Snap a photo or upload from your gallery to create intelligent quizzes instantly.",
    url: "https://snapquiz-sable.vercel.app/",
    siteName: "AI Quiz Generator",
    images: [
      {
        url: "https://res.cloudinary.com/dl5renyaj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748792616/5441603c-92d6-42cb-9848-ba8a4920cbcf_uqzwxy.png",
        width: 800,
        height: 600,
        alt: "AI Quiz Generator Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapQuiz - AI Quiz Generator",
    description:
      "Transform images into interactive quizzes with AI. Upload a photo and let OpenAI do the rest.",
    images: [
      "https://res.cloudinary.com/dl5renyaj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748792616/5441603c-92d6-42cb-9848-ba8a4920cbcf_uqzwxy.png",
    ],
  },
};

import OcrReader from "@/components/OcrReader";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <h1 className="text-3xl font-bold my-6 text-blue-500">SnapQuiz</h1>
      <OcrReader />
    </main>
  );
}
