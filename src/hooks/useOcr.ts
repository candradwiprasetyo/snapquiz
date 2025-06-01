"use client";

import { useState } from "react";
import { handleFilesOCR } from "@/lib/ocrReader";
import { Quiz } from "@/types/quiz";

export function useOcr() {
  const [quizzes, setQuizzes] = useState<Quiz[][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const reset = () => {
    setQuizzes([]);
    setError(null);
    setLoading(false);
  };

  const handleFilesSelected = (files: FileList | null) => {
    setSelectedFiles(files);
    reset();
  };

  const processOcr = async (quizCount: number) => {
    if (!selectedFiles || selectedFiles.length === 0) {
      alert("Pilih gambar dulu ya.");
      return;
    }

    if (selectedFiles.length > 5) {
      alert("Maksimal upload 5 gambar.");
      setSelectedFiles(null);
      reset();
      return;
    }

    setLoading(true);
    setQuizzes([]);
    setError(null);

    try {
      const ocrResults = await handleFilesOCR(selectedFiles);
      const allQuizzes: Quiz[][] = [];

      const soalPerGambar = Math.floor(quizCount / selectedFiles.length);
      const sisa = quizCount % selectedFiles.length;

      for (let i = 0; i < ocrResults.length; i++) {
        const text = ocrResults[i];
        const countForThisImage = soalPerGambar + (i < sisa ? 1 : 0);

        const res = await fetch("/api/ocr", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, count: countForThisImage }),
        });

        if (!res.ok) throw new Error("Gagal generate quiz");

        const data = await res.json();
        allQuizzes.push(data.quizzes);
      }

      setQuizzes(allQuizzes);
    } catch (err) {
      setError((err as Error).message || "Error saat generate quiz");
      alert("Error generate quiz: " + (err as Error).message);
      setQuizzes([]);
    } finally {
      setLoading(false);
    }
  };

  const resetOcr = () => {
    setQuizzes([]);
    setSelectedFiles(null);
    setError(null);
  };

  return {
    quizzes,
    loading,
    error,
    selectedFiles,
    handleFilesSelected,
    processOcr,
    reset,
    resetOcr,
  };
}
