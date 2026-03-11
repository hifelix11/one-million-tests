import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "HealthCheck — Kostenlose Gesundheits-Selbsttests",
    template: "%s | HealthCheck",
  },
  description:
    "Kostenlose, wissenschaftsbasierte Gesundheits-Selbsttests. Überprüfen Sie Vitamin- und Mineralstoffmängel mit evidenzbasierten Tools. Bildungsscreening — keine medizinischen Diagnosen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="mx-auto max-w-6xl px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
