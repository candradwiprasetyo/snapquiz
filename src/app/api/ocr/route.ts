import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, count = 5 } = body;

    if (!text) {
      return NextResponse.json(
        { error: "Teks tidak ditemukan" },
        { status: 400 }
      );
    }

    const prompt = `
    Buatlah ${count} soal kuis pilihan ganda (a, b, c, d, e) berdasarkan teks berikut:

    "${text}"

    Format output json seperti berikut:
    [
      {
        "question": "Question ...?",
        "choices": {
          "a": "...",
          "b": "...",
          "c": "...",
          "d": "...",
          "e": "..."
        },
        "answer": "b"
      },
      ...
    ]

    Jika materi soal adalah bahasa indonesia, maka berikan json dalam bahasa indonesia, jika materi bukan bahasa indonesia maka berikan json dalam bahasa inggris.

    Pastikan jawaban yang anda berikan hanya format json yang saya inginkan. jangan ada kata-kata lain yang tidak saya butuhkan.
    
    berikan jawaban hanya format json tanpa \`json atau \`\`.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const raw = completion.choices[0].message.content;
    const quizzes = JSON.parse(raw || "[]");

    return NextResponse.json({ quizzes });
  } catch (error: unknown) {
    console.error("API Error:", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Terjadi kesalahan." }, { status: 500 });
  }
}
