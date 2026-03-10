import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getQuizBySlug } from "@/lib/quizLoader";
import { generateQuizMetadata } from "@/lib/seo";
import MedicalDisclaimer from "@/components/layout/MedicalDisclaimer";
import QuizEngine from "@/components/quiz/QuizEngine";
import QuizSchema from "@/components/seo/QuizSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) return {};
  return generateQuizMetadata(quiz);
}

export default async function QuizPage({ params }: PageProps) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) notFound();

  return (
    <>
      <article className="py-10">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          {quiz.title}
        </h1>

        <div className="mx-auto mt-6 max-w-3xl">
          <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed">
            {quiz.seoIntro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <MedicalDisclaimer />
          </div>

          <div className="mt-10">
            <QuizEngine quiz={quiz} />
          </div>

          {/* FAQ Section - static HTML for SEO */}
          <section className="mt-16">
            <h2 className="text-xl font-bold text-gray-900">
              Häufig gestellte Fragen
            </h2>
            <dl className="mt-4 space-y-6">
              {quiz.faq.map((item, i) => (
                <div key={i}>
                  <dt className="font-semibold text-gray-900">{item.question}</dt>
                  <dd className="mt-1 text-sm text-gray-600">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Related Quizzes - internal links for SEO */}
          {quiz.relatedSlugs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold text-gray-900">
                Verwandte Tests
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {quiz.relatedSlugs.map((s) => (
                  <Link
                    key={s}
                    href={`/tests/${s}`}
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:border-teal-300 hover:text-teal-700"
                  >
                    {s
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Sources */}
          {quiz.sources.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold text-gray-900">Quellen</h2>
              <ol className="mt-3 list-decimal list-inside space-y-1 text-sm text-gray-500">
                {quiz.sources.map((source, i) => (
                  <li key={i}>{source}</li>
                ))}
              </ol>
            </section>
          )}
        </div>
      </article>
      <QuizSchema quiz={quiz} />
      <FAQSchema faqs={quiz.faq} />
    </>
  );
}
