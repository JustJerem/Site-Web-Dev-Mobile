import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "@/i18n-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jérémie Guillot | Freelance Mobile Developer",
  description: "Portfolio of Jérémie Guillot, Freelance Mobile Developer.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
