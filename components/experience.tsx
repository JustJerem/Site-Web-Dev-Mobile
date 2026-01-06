import { content } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Work Experience
        </h2>
        <div className="space-y-12">
          {content.experience.map((job, index) => (
            <div
              key={index}
              className="relative border-l border-zinc-200 pl-8 transition-all hover:border-primary dark:border-zinc-800"
            >
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-200 transition-colors group-hover:bg-primary dark:bg-zinc-800" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {job.role}
                </h3>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {job.period}
                </span>
              </div>
              <div className="mb-4 text-lg font-medium text-primary">
                {job.company}
              </div>
              <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
