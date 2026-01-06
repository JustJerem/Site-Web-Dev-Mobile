"use client";

import Link from "next/link";
import { content } from "@/data/content";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "mailto:" + content.personal.email },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md transition-all dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {content.personal.name}
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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
