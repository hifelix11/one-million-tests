import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-bold text-green-700">
          HealthCheck
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-green-700 transition-colors">
            Startseite
          </Link>
          <Link
            href="/categories/vitamins-minerals"
            className="hover:text-green-700 transition-colors"
          >
            Tests
          </Link>
          <Link href="/about" className="hover:text-green-700 transition-colors">
            Über uns
          </Link>
        </nav>
      </div>
    </header>
  );
}
