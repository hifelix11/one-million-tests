import Link from "next/link";
import { Quiz } from "@/lib/types";

interface FeaturedQuizzesProps {
  quizzes: Quiz[];
}

export default function FeaturedQuizzes({ quizzes }: FeaturedQuizzesProps) {
  return (
    <section className="py-14">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
        Beliebte Tests
      </p>
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-2xl font-bold text-gray-900">
          Starten Sie mit einem Schnelltest
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.slug}
            href={`/tests/${quiz.slug}`}
            className="group rounded-2xl bg-cream p-6 transition-all hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white text-sm">
                &rarr;
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
              {quiz.shortTitle}
            </h3>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
              {quiz.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
