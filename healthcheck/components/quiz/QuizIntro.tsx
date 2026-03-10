"use client";

interface QuizIntroProps {
  title: string;
  scientificBasis: string;
  onStart: () => void;
}

export default function QuizIntro({
  title,
  scientificBasis,
  onStart,
}: QuizIntroProps) {
  return (
    <div className="text-center">
      <p className="text-sm text-gray-500 mb-6">{scientificBasis}</p>
      <button
        onClick={onStart}
        className="inline-flex items-center rounded-lg bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Test starten
      </button>
      <p className="mt-3 text-xs text-gray-400">
        10 Fragen &middot; Dauert etwa 2 Minuten
      </p>
    </div>
  );
}
