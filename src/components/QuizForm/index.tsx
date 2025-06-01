"use client";
import clsx from "clsx";
import { Quiz } from "@/types/quiz";

type QuizFormProps = {
  quizzes: Quiz[][];
  userAnswers: Record<string, string>;
  showResult: boolean;
  onAnswer: (key: string, value: string) => void;
  onSubmit: () => void;
};

export default function QuizForm({
  quizzes,
  userAnswers,
  showResult,
  onAnswer,
  onSubmit,
}: QuizFormProps) {
  return (
    <form className="space-y-8">
      {quizzes.map((group, fileIndex) => (
        <div key={fileIndex}>
          {group.map((quiz, quizIndex) => {
            const globalIndex =
              quizzes
                .slice(0, fileIndex)
                .reduce((acc, g) => acc + g.length, 0) + quizIndex;
            const key = `q-${globalIndex}`;

            return (
              <div
                key={key}
                className={clsx(
                  "mb-4 p-6 rounded-2xl text-sm flex md:min-w-[700px]",
                  !showResult && "bg-white",
                  showResult &&
                    userAnswers[key] === quiz.answer &&
                    "bg-green-300",
                  showResult &&
                    userAnswers[key] !== quiz.answer &&
                    "bg-red-300",
                  showResult && "text-white"
                )}
              >
                <div className="w-5 flex-none">
                  <p className="mb-2 font-bold">{globalIndex + 1}.</p>
                </div>
                <div className="w-5 flex-grow">
                  <div className="mb-3 font-bold">{quiz.question}</div>
                  {Object.entries(quiz.choices).map(
                    ([choiceKey, choiceVal]) => (
                      <label key={choiceKey} className="block mb-1">
                        <input
                          type="radio"
                          name={key}
                          value={choiceKey}
                          checked={userAnswers[key] === choiceKey}
                          onChange={() => onAnswer(key, choiceKey)}
                          disabled={showResult}
                          className="mr-2"
                        />
                        {choiceVal}
                      </label>
                    )
                  )}
                  {showResult && (
                    <p
                      className={clsx(
                        "text-sm mt-3 font-bold",
                        userAnswers[key] === quiz.answer
                          ? "text-green-700"
                          : "text-red-700"
                      )}
                    >
                      Correct Answer: {quiz.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {!showResult && (
        <div className="w-full text-center">
          <button
            type="button"
            onClick={onSubmit}
            className="bg-green-400 text-white py-4 px-8 rounded-full mx-auto"
          >
            Lets See How I Did
          </button>
        </div>
      )}
    </form>
  );
}
