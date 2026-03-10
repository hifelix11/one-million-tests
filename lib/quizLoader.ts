import fs from "fs";
import path from "path";
import { Quiz, QuizCategory } from "./types";

const quizzesDirectory = path.join(process.cwd(), "data", "quizzes");

export function getAllQuizzes(): Quiz[] {
  const files = fs.readdirSync(quizzesDirectory).filter((f) => f.endsWith(".json"));
  return files.map((file) => {
    const filePath = path.join(quizzesDirectory, file);
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content) as Quiz;
  });
}

export function getQuizBySlug(slug: string): Quiz | undefined {
  const filePath = path.join(quizzesDirectory, `${slug}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content) as Quiz;
}

export function getQuizzesByCategory(category: QuizCategory): Quiz[] {
  return getAllQuizzes().filter((q) => q.category === category);
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(quizzesDirectory)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}

export function getAllCategories(): QuizCategory[] {
  const quizzes = getAllQuizzes();
  const categories = new Set(quizzes.map((q) => q.category));
  return Array.from(categories);
}
