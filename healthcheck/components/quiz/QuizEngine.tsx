"use client";

import { useState, useCallback } from "react";
import { Quiz } from "@/lib/types";
import { calculateScore, getResultTier } from "@/lib/scoring";
import QuizIntro from "./QuizIntro";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import ResultCard from "./ResultCard";
import Link from "next/link";

interface QuizEngineProps {
  quiz: Quiz;
}

export default function QuizEngine({ quiz }: QuizEngineProps) {
  const [quizState, setQuizState] = useState<"intro" | "active" | "result">(
    "intro"
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleStart = useCallback(() => {
    setQuizState("active");
    setCurrentQuestion(0);
    setAnswers({});
  }, []);

  const handleSelect = useCallback(
    (value: number) => {
      const questionId = quiz.questions[currentQuestion].id;
      setAnswers((prev) => ({ ...prev, [questionId]: value }));

      // Auto-advance after a brief delay
      setTimeout(() => {
        if (currentQuestion < quiz.questions.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
        } else {
          setQuizState("result");
        }
      }, 300);
    },
    [currentQuestion, quiz.questions]
  );

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const score = calculateScore(answers);
  const result = getResultTier(score, quiz.results);
  const maxScore = quiz.questions.length * 3;

  return (
    <div className="mx-auto max-w-2xl">
      {quizState === "intro" && (
        <QuizIntro
          title={quiz.title}
          scientificBasis={quiz.scientificBasis}
          onStart={handleStart}
        />
      )}

      {quizState === "active" && (
        <div>
          <ProgressBar
            current={currentQuestion}
            total={quiz.questions.length}
          />
          <QuestionCard
            key={quiz.questions[currentQuestion].id}
            question={quiz.questions[currentQuestion]}
            selectedValue={answers[quiz.questions[currentQuestion].id]}
            onSelect={handleSelect}
          />
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              &larr; Zurück
            </button>
            <span className="text-xs text-gray-400">
              Wählen Sie eine Option, um fortzufahren
            </span>
          </div>
        </div>
      )}

      {quizState === "result" && (
        <div>
          <ResultCard result={result} score={score} maxScore={maxScore} />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleStart}
              className="rounded-lg border-2 border-teal-600 px-6 py-2.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
            >
              Test wiederholen
            </button>
          </div>
          {quiz.relatedSlugs.length > 0 && (
            <div className="mt-8">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Verwandte Tests
              </h3>
              <div className="flex flex-wrap gap-2">
                {quiz.relatedSlugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`/tests/${slug}`}
                    className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-600 transition-colors hover:border-teal-300 hover:text-teal-700"
                  >
                    {slug
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
