"use client";

type QuizListProps = {
  quizCount: number;
  setQuizCount: (value: number) => void;
  disabled?: boolean;
};

export default function QuizList({
  quizCount,
  setQuizCount,
  disabled,
}: QuizListProps) {
  return (
    <>
      <select
        id="quiz-count"
        value={quizCount}
        onChange={(e) => setQuizCount(Number(e.target.value))}
        className="mb-4 p-4 rounded-full w-full"
        disabled={disabled}
      >
        <option value={5}>5 quiz</option>
        <option value={10}>10 quiz</option>
      </select>
    </>
  );
}
