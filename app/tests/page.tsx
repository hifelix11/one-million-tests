import { Metadata } from "next";
import Link from "next/link";
import { getAllQuizzes } from "@/lib/quizLoader";
import { CATEGORY_LABELS } from "@/lib/seo";
import { QuizCategory } from "@/lib/types";
import MedicalDisclaimer from "@/components/layout/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Alle Tests — Kostenlose Selbsttests | HealthCheck",
  description:
    "Durchsuchen Sie alle unsere wissenschaftsbasierten Gesundheits-Selbsttests nach Kategorie. Kostenlose Screenings für Nährstoffmängel, psychische Gesundheit und mehr.",
};

export default function AllTestsPage() {
  const quizzes = getAllQuizzes();

  const grouped = new Map<QuizCategory, typeof quizzes>();
  quizzes.forEach((quiz) => {
    const list = grouped.get(quiz.category) ?? [];
    list.push(quiz);
    grouped.set(quiz.category, list);
  });

  return (
    <div className="py-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
        Übersicht
      </p>
      <h1 className="text-3xl font-bold text-gray-900">Alle Tests</h1>
      <p className="mt-3 text-gray-500 leading-relaxed">
        Durchsuchen Sie alle unsere wissenschaftsbasierten Gesundheits-Selbsttests nach Kategorie.
      </p>

      <div className="mt-8">
        <MedicalDisclaimer />
      </div>

      {Array.from(grouped.entries()).map(([category, categoryQuizzes]) => (
        <section key={category} className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {CATEGORY_LABELS[category] ?? category}
            </h2>
            <Link
              href={`/categories/${category}`}
              className="text-sm text-green-700 hover:text-green-800 transition-colors"
            >
              Alle in dieser Kategorie &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryQuizzes.map((quiz) => (
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
                <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                  {quiz.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
