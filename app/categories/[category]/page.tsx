import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCategories, getQuizzesByCategory } from "@/lib/quizLoader";
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS } from "@/lib/seo";
import { QuizCategory } from "@/lib/types";
import MedicalDisclaimer from "@/components/layout/MedicalDisclaimer";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const label = CATEGORY_LABELS[category] ?? category;
  return {
    title: `${label} Tests — Kostenlose Selbsttests`,
    description:
      CATEGORY_DESCRIPTIONS[category] ??
      `Durchsuchen Sie unsere ${label} Gesundheits-Selbsttests.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const quizzes = getQuizzesByCategory(category as QuizCategory);
  if (quizzes.length === 0) notFound();

  const label = CATEGORY_LABELS[category] ?? category;
  const description = CATEGORY_DESCRIPTIONS[category] ?? "";

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-gray-900">{label}</h1>
      {description && (
        <p className="mt-2 text-gray-500">{description}</p>
      )}

      <div className="mt-8">
        <MedicalDisclaimer />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.slug}
            href={`/tests/${quiz.slug}`}
            className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-teal-300 hover:shadow-md"
          >
            <h2 className="font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
              {quiz.shortTitle}
            </h2>
            <p className="mt-2 text-sm text-gray-500 line-clamp-3">
              {quiz.description}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-teal-600 group-hover:text-teal-700">
              Zum Test &rarr;
            </span>
          </Link>
        ))}
      </div>

      {/* Cross-links to other categories */}
      <section className="mt-16">
        <h2 className="text-xl font-bold text-gray-900">Andere Kategorien</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {getAllCategories()
            .filter((c) => c !== category)
            .map((c) => (
              <Link
                key={c}
                href={`/categories/${c}`}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:border-teal-300 hover:text-teal-700"
              >
                {CATEGORY_LABELS[c] ?? c}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
