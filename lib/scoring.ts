import { ResultTier } from "./types";

export function calculateScore(answers: Record<number, number>): number {
  return Object.values(answers).reduce((sum, val) => sum + val, 0);
}

export function getResultTier(
  score: number,
  results: ResultTier[]
): ResultTier {
  const tier = results.find((r) => score >= r.minScore && score <= r.maxScore);
  return tier ?? results[results.length - 1];
}
