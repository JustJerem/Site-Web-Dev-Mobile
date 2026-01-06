import { content } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {content.personal.name}. All rights
          reserved.
        </p>
        <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href={content.personal.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={content.personal.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@jeremie-guillot.com"
            className="hover:text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
