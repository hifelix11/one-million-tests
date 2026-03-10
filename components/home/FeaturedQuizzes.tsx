import Link from "next/link";
import { Quiz } from "@/lib/types";

interface FeaturedQuizzesProps {
  quizzes: Quiz[];
}

export default function FeaturedQuizzes({ quizzes }: FeaturedQuizzesProps) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Beliebte Tests
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.slug}
            href={`/tests/${quiz.slug}`}
            className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-teal-300 hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
              {quiz.shortTitle}
            </h3>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
              {quiz.description}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-teal-600 group-hover:text-teal-700">
              Zum Test &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
