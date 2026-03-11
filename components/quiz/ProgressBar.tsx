"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = ((current + 1) / total) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span>
          Frage {current + 1} von {total}
        </span>
        <span>{Math.round(percent)}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-cream">
        <div
          className="h-2 rounded-full bg-green-600 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
