import { content } from "@/data/content";
import Link from "next/link";
import { Github, Linkedin, Rss } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { Locale } from "@/i18n-config";

export function Hero({ dictionary, lang }: { dictionary: Awaited<ReturnType<typeof getDictionary>>, lang: Locale }) {
  return (
    <section className="flex min-h-screen flex-col justify-center py-20">
      <div className={cn("mx-auto px-6", lang === "fr" ? "max-w-5xl" : "max-w-4xl")}>
        {/* Intro */}
        <div className="flex flex-wrap items-center gap-3 text-3xl font-light leading-snug tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          <span>{dictionary.hero.intro} {content.personal.name}</span>
          <div className="relative h-[46px] w-[46px] overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800">
             <Image 
                src="/images/avatar.jpg" 
                alt={content.personal.name} 
                width={46} 
                height={46} 
                className="h-full w-full object-cover"
             />
          </div>
        </div>

        {/* Building Apps */}
        <div className="mt-8 flex flex-wrap items-center gap-3 text-3xl font-light leading-snug tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          <span>{dictionary.hero.build_apps}</span>
          
          {/* Apps Cluster */}
          <span className="inline-flex relative group/apps gap-2 sm:gap-0">
             
             {/* App 1: Kenottes */}
             <div className="relative group/app1">
                <Image
                  src="/images/kenottes.png"
                  alt={dictionary.apps.kenottes}
                  width={40}
                  height={40}
                  className="rounded-xl shadow-sm border border-black/10 sm:transform sm:-rotate-6 sm:group-hover/apps:rotate-0 sm:group-hover/apps:translate-x-0 sm:translate-x-2 transition-all duration-200 relative z-10 cursor-pointer hover:z-20 object-cover bg-white"
                />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-90 text-xs opacity-0 group-hover/app1:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {dictionary.apps.kenottes}
                </span>
             </div>

             {/* App 2: Papillons */}
             <div className="relative group/app2">
                <Link href="https://play.google.com/store/apps/details?id=com.jeremieguillot.butterfly&hl=fr" target="_blank">
                  <Image
                    src="/images/papillons.png"
                    alt={dictionary.apps.papillons}
                    width={40}
                    height={40}
                    className="rounded-xl shadow-sm border border-black/10 sm:transform sm:rotate-3 sm:group-hover/apps:rotate-0 sm:group-hover/apps:translate-x-2 sm:translate-x-0 transition-all duration-200 relative z-20 cursor-pointer hover:z-30 object-cover bg-white"
                  />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-90 text-xs opacity-0 group-hover/app2:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {dictionary.apps.papillons}
                  </span>
                </Link>
             </div>

             {/* App 3: Secrets de Lyon */}
             <div className="relative group/app3">
                <Link href="https://www.secretsdelyon.fr" target="_blank">
                  <Image
                    src="/images/secrets.png"
                    alt={dictionary.apps.secrets}
                    width={40}
                    height={40}
                    className="rounded-xl shadow-sm border border-black/10 sm:transform sm:-rotate-6 sm:group-hover/apps:rotate-0 sm:group-hover/apps:translate-x-4 sm:-translate-x-4 transition-all duration-200 relative z-30 cursor-pointer hover:z-40 object-cover bg-white"
                  />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-90 text-xs opacity-0 group-hover/app3:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {dictionary.apps.secrets}
                  </span>
                </Link>
             </div>

             {/* App 4: Bivy Club */}
             <div className="relative group/app4">
                <Image
                  src="/images/bivy.png"
                  alt={dictionary.apps.bivy}
                  width={40}
                  height={40}
                  className="rounded-xl shadow-sm border border-black/10 sm:transform sm:rotate-3 sm:group-hover/apps:rotate-0 sm:group-hover/apps:translate-x-8 sm:-translate-x-8 transition-all duration-200 relative z-40 cursor-pointer hover:z-50 object-cover bg-white"
                />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-90 text-xs opacity-0 group-hover/app4:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {dictionary.apps.bivy}
                </span>
             </div>

          </span>

          <span>{dictionary.hero.share_knowledge}</span>
          
          {/* Knowledge Link */}
          <Link href="https://www.linkedin.com/in/jeremie-guillot-freelance-android/recent-activity/all/" target="_blank" className="relative group">
             <span className="inline-flex items-center justify-center rounded-xl bg-orange-500 p-1 text-white shadow-sm sm:rotate-6 sm:group-hover:rotate-0 transition-all duration-200">
                <Rss className="h-6 w-6 fill-current" />
             </span>
          </Link>
          
          <span>{dictionary.hero.mobile_dev}</span>
        </div>

        {/* Socials */}
        <div className="mt-10 flex flex-wrap items-center gap-3 text-3xl font-light leading-snug tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            <span>{dictionary.hero.socials_intro}</span>
            
            {/* Socials Cluster */}
            <span className="inline-flex relative group/socials gap-2 sm:gap-0">
                 
                 {/* Twitter/X */}
                 <Link href={content.personal.links.twitter} target="_blank" className="relative group/twitter">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white hover:opacity-100 transition-all duration-200 sm:transform sm:-rotate-6 sm:group-hover/socials:rotate-0 sm:group-hover/socials:translate-x-0 sm:translate-x-2 relative z-10">
                        <span className="text-lg font-bold">X</span>
                    </div>
                 </Link>

                 {/* LinkedIn */}
                 <Link href={content.personal.links.linkedin} target="_blank" className="relative group/linkedin">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0077b5] text-white hover:opacity-100 transition-all duration-200 sm:transform sm:rotate-3 sm:group-hover/socials:rotate-0 sm:group-hover/socials:translate-x-2 relative z-20">
                        <Linkedin className="h-5 w-5 fill-current" />
                    </div>
                 </Link>

                 {/* GitHub */}
                 <Link href={content.personal.links.github} target="_blank" className="relative group/github">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#333] text-white hover:opacity-100 transition-all duration-200 sm:transform sm:-rotate-6 sm:group-hover/socials:rotate-0 sm:group-hover/socials:translate-x-4 sm:-translate-x-4 relative z-30">
                        <Github className="h-5 w-5 fill-current" />
                    </div>
                 </Link>

            </span>
        </div>

        {/* Tech Stack Link */}
        <div className="mt-12 text-xl font-light text-zinc-600 dark:text-zinc-400">
          {dictionary.hero.tech_stack_question}{" "}
          <Link href={`/${lang}/tools`} className="text-primary hover:text-accent transition-colors">
            {dictionary.hero.click_here}
          </Link>
        </div>

        {/* Footer / Startup Section */}
        <div className="mt-12 text-xl font-light text-zinc-500 dark:text-zinc-400">
             {dictionary.hero.footer_intro} <Link href={content.personal.links.linkedin} target="_blank" className="text-primary font-medium hover:underline underline-offset-4">{dictionary.hero.freelance_role}</Link><br/> {dictionary.hero.footer_desc}
        </div>
      </div>
    </section>
  );
}
