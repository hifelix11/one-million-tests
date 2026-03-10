"use client";

import { Question } from "@/lib/types";

interface QuestionCardProps {
  question: Question;
  selectedValue: number | undefined;
  onSelect: (value: number) => void;
}

export default function QuestionCard({
  question,
  selectedValue,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="animate-slideIn">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {question.text}
      </h2>
      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selectedValue === option.value && selectedValue !== undefined;
          const optionId = `q${question.id}-opt${i}`;
          return (
            <button
              key={optionId}
              onClick={() => onSelect(option.value)}
              className={`w-full text-left rounded-lg border-2 px-4 py-3 text-sm transition-all duration-200 ${
                isSelected
                  ? "border-teal-600 bg-teal-50 text-teal-900"
                  : "border-gray-200 bg-white text-gray-700 hover:border-teal-300 hover:bg-teal-50/50"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors ${
                    isSelected
                      ? "border-teal-600 bg-teal-600 text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {isSelected ? "\u2713" : ""}
                </span>
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
