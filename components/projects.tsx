import { content } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 py-20 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {project.name}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-primary" />
              </div>
              <p className="mb-6 flex-grow text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
