"use client";

import React, { useState } from "react";
import FileUploader from "@/components/FileUploader";
import QuizList from "@/components/QuizList";
import QuizForm from "@/components/QuizForm";
import ResultSummary from "@/components/ResultSummary";
import { useOcr } from "@/hooks/useOcr";
import ModalLoading from "@/components/ModalLoading";

export default function OcrReader() {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [quizCount, setQuizCount] = useState<number>(5);
  const [isQuizGenerated, setIsQuizGenerated] = useState(false);

  const {
    quizzes,
    loading,
    error,
    selectedFiles,
    handleFilesSelected,
    processOcr,
    resetOcr,
  } = useOcr();

  const handleAnswer = (key: string, value: string) => {
    setUserAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const calculateResult = () => {
    setShowResult(true);
  };

  const handleCreateQuiz = async () => {
    await processOcr(quizCount);
    setIsQuizGenerated(true);
    setShowResult(false);
  };

  const handleResetQuiz = () => {
    resetOcr();
    setUserAnswers({});
    setShowResult(false);
    setQuizCount(5);
    setIsQuizGenerated(false);
  };

  const totalSoal = quizzes.reduce((acc, group) => acc + group.length, 0);
  const totalBenar = quizzes
    .flat()
    .filter((quiz, idx) => userAnswers[`q-${idx}`] === quiz.answer).length;
  const totalSalah = totalSoal - totalBenar;
  const nilai = totalSoal > 0 ? Math.round((totalBenar / totalSoal) * 100) : 0;

  return (
    <div className="w-full md:w-auto mx-auto">
      {!isQuizGenerated && (
        <>
          <FileUploader
            onFilesSelected={handleFilesSelected}
            loading={loading}
          />

          <div className="text-center w-full md:w-[400px] mx-auto">
            {selectedFiles && selectedFiles.length > 0 && (
              <>
                <p className="text-sm mb-4 rounded p-4 text-center font-bold text-gray-600">
                  {selectedFiles.length} image{selectedFiles.length > 1 && "s"}{" "}
                  selected
                </p>

                <QuizList
                  quizCount={quizCount}
                  setQuizCount={setQuizCount}
                  disabled={loading}
                />

                <button
                  onClick={handleCreateQuiz}
                  className={`bg-green-400 rounded-full text-white text-sm py-4 px-8 w-full md:w-auto mx-auto ${
                    loading ? "bg-gray-200" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Create Quiz"}
                </button>
              </>
            )}

            {error && <p className="text-red-500 mt-4">Error: {error}</p>}
          </div>
        </>
      )}

      {isQuizGenerated && quizzes.length > 0 && !loading && (
        <>
          <QuizForm
            quizzes={quizzes}
            userAnswers={userAnswers}
            showResult={showResult}
            onAnswer={handleAnswer}
            onSubmit={calculateResult}
          />

          <div className="text-center mt-6">
            <button
              onClick={handleResetQuiz}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 px-8 rounded-full mb-4"
            >
              Recreate Quiz
            </button>
          </div>
        </>
      )}

      {showResult && (
        <ResultSummary
          totalSoal={totalSoal}
          totalBenar={totalBenar}
          totalSalah={totalSalah}
          nilai={nilai}
        />
      )}

      {loading && <ModalLoading />}
    </div>
  );
}
