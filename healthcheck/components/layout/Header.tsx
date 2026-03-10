import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-teal-700">
          HealthCheck
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-teal-700 transition-colors">
            Startseite
          </Link>
          <Link
            href="/categories/vitamins-minerals"
            className="hover:text-teal-700 transition-colors"
          >
            Tests
          </Link>
          <Link href="/about" className="hover:text-teal-700 transition-colors">
            Über uns
          </Link>
        </nav>
      </div>
    </header>
  );
}
