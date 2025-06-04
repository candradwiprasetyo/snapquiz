export const metadata = {
  title: "SnapQuiz",
  description:
    "Automatically generate multiple-choice quizzes from images using OCR and OpenAI. Snap a photo or upload from your gallery to create intelligent quizzes instantly.",
  openGraph: {
    title: "SnapQuiz",
    description:
      "Automatically generate multiple-choice quizzes from images using OCR and OpenAI. Snap a photo or upload from your gallery to create intelligent quizzes instantly.",
    url: "https://snapquiz-sable.vercel.app/",
    siteName: "SnapQuiz",
    images: [
      {
        url: "https://res.cloudinary.com/dl5renyaj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748792616/5441603c-92d6-42cb-9848-ba8a4920cbcf_uqzwxy.png",
        width: 800,
        height: 600,
        alt: "SnapQuiz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapQuiz",
    description:
      "Transform images into interactive quizzes with AI. Upload a photo and let OpenAI do the rest.",
    images: [
      "https://res.cloudinary.com/dl5renyaj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748792616/5441603c-92d6-42cb-9848-ba8a4920cbcf_uqzwxy.png",
    ],
  },
};

import ClientHome from "@/components/ClientHome";

export default function HomePage() {
  return <ClientHome />;
}
