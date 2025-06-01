#  SnapQuiz – Convert Image to Quiz 

A modern web app that lets you **automatically generate quiz questions from images**, either by capturing a photo from your **camera** or uploading from your **gallery**. Built with **Next.js**, **Tesseract.js**, **Tailwind CSS**, and powered by **OpenAI** to generate quiz questions intelligently.

---

## ✨ Features

-  **Take photo from camera** or 📁 **choose from gallery**
-  **OCR** with [Tesseract.js](https://github.com/naptha/tesseract.js) to extract text from image
-  **Quiz generation powered by OpenAI** (GPT-based)
-  **Multilingual OCR** support (`eng+ind`)
-  **Image preprocessing**: resize + grayscale for better OCR accuracy
-  Automatically generates **multiple-choice quiz questions**
-  Built with **Next.js App Router**
-  Responsive & clean UI with **Tailwind CSS**
-  **Deployable on Vercel**

---

## 🖼️ Demo

🔗 [Live Demo on Vercel](https://snapquiz-sable.vercel.app/)  

---

## 🧠 How It Works

1. User uploads or takes a photo of a textbook or reading material.
2. Image is **preprocessed** (resized & grayscaled).
3. Text is extracted via **Tesseract.js** (OCR engine).
4. Extracted text is sent to the **OpenAI API** to generate **quiz questions** based on context.
5. The user is presented with multiple-choice questions generated from the content.

---

## 🚀 Tech Stack

| Tech            | Description                                     |
|-----------------|-------------------------------------------------|
| **Next.js**     | React framework using App Router                |
| **Tesseract.js**| OCR engine for image-to-text                    |
| **OpenAI API**  | GPT model for quiz generation from text         |
| **Tailwind CSS**| Utility-first CSS framework                     |
| **Vercel**      | Deployment platform                             |

---

## 🛠️ Installation

```bash
git clone [https://github.com/candradwiprasetyo/snapquiz.git)
cd snapquiz
pnpm install
pnpm dev
```
