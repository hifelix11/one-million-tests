"use client";

import { ResultTier } from "@/lib/types";

interface ResultCardProps {
  result: ResultTier;
  score: number;
  maxScore: number;
}

const colorMap: Record<string, { bg: string; border: string; text: string; bar: string }> = {
  green: {
    bg: "bg-green-50",
    border: "border-green-300",
    text: "text-green-800",
    bar: "bg-green-500",
  },
  yellow: {
    bg: "bg-yellow-50",
    border: "border-yellow-300",
    text: "text-yellow-800",
    bar: "bg-yellow-500",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-300",
    text: "text-orange-800",
    bar: "bg-orange-500",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-300",
    text: "text-red-800",
    bar: "bg-red-500",
  },
};

export default function ResultCard({ result, score, maxScore }: ResultCardProps) {
  const colors = colorMap[result.color] ?? colorMap.green;
  const percent = Math.round((score / maxScore) * 100);

  return (
    <div className="animate-fadeIn">
      <div className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6`}>
        <h2 className={`text-xl font-bold ${colors.text}`}>{result.title}</h2>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex-1">
            <div className="h-3 w-full rounded-full bg-white/70">
              <div
                className={`h-3 rounded-full ${colors.bar} transition-all duration-1000 ease-out`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
          <span className={`text-sm font-semibold ${colors.text}`}>
            {score} / {maxScore}
          </span>
        </div>
        <p className="mt-4 text-gray-700">{result.description}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">Empfehlungen</h3>
        <ul className="mt-3 space-y-2">
          {result.recommendations.map((rec, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className={`mt-0.5 ${colors.text}`}>&bull;</span>
              {rec}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl bg-cream px-4 py-3 text-sm text-gray-600">
        Dieses Ergebnis basiert auf Ihren selbst angegebenen Symptomen und ist kein Ersatz für professionelle medizinische Beratung, Diagnose oder Behandlung.
      </div>
    </div>
  );
}
