"use client";

import Link from "next/link";
import { content } from "@/data/content";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { type getDictionary } from "@/dictionaries/get-dictionary";
import { type Locale } from "@/i18n-config";

export function SiteHeader({ dictionary, lang }: { dictionary: Awaited<ReturnType<typeof getDictionary>>, lang: Locale }) {
  const pathname = usePathname();

  const navItems = [
    { name: dictionary.nav.home, href: `/${lang}` },
    { name: dictionary.nav.about, href: `/${lang}/#about` },
    { name: dictionary.nav.experience, href: `/${lang}/#experience` },
    { name: dictionary.nav.projects, href: `/${lang}/#projects` },
    { name: dictionary.nav.contact, href: "mailto:" + content.personal.email },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md transition-all dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {content.personal.name}
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // We compare strict equality for home, and startsWith for sections if we needed more complex logic.
              // But here simple href matching works if we are consistent.
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-zinc-900 dark:text-zinc-50"
                  : "text-zinc-500 dark:text-zinc-400"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
