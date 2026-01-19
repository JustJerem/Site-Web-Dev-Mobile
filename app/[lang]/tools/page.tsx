import { content } from "@/data/content";
import { ArrowLeft, CornerDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { Locale } from "@/i18n-config";

interface Tool {
  name: string;
  descriptionKey: keyof typeof import('@/dictionaries/en').en.tools;
  icon: React.ReactNode; 
  url: string;
}

const tools: Tool[] = [
  {
    name: "Firebase",
    descriptionKey: "firebase_desc",
    icon: <Image src="/icons/firebase.svg" alt="Firebase" width={48} height={48} className="w-7 h-7" />,
    url: "https://firebase.google.com/",
  },
  {
    name: "Appwrite",
    descriptionKey: "appwrite_desc",
    icon: <Image src="/icons/appwrite.png" alt="Appwrite" width={48} height={48} className="w-7 h-7" />,
    url: "https://appwrite.io/",
  },
  {
    name: "Mixpanel",
    descriptionKey: "mixpanel_desc",
    icon: <Image src="/icons/mixpanel.svg" alt="Mixpanel" width={48} height={48} className="w-7 h-7" />,
    url: "https://mixpanel.com/",
  },
  {
    name: "OpenRouter",
    descriptionKey: "openrouter_desc",
    icon: <Image src="/icons/openrouter.svg" alt="OpenRouter" width={48} height={48} className="w-7 h-7" />,
    url: "https://openrouter.ai/",
  },
  {
    name: "Vercel",
    descriptionKey: "vercel_desc",
    icon: <Image src="/icons/vercel.svg" alt="Vercel" width={48} height={48} className="w-6 h-6" />, 
    url: "https://vercel.com/",
  },
  {
    name: "RevenueCat",
    descriptionKey: "revenuecat_desc",
    icon: <Image src="/icons/revenuecat.jpeg" alt="RevenueCat" width={48} height={48} className="w-7 h-7 rounded-sm" />,
    url: "https://www.revenuecat.com/",
  },
  {
    name: "Android", 
    descriptionKey: "android_desc",
    icon: <Image src="/icons/android.svg" alt="Android" width={48} height={48} className="w-8 h-8" />,
    url: "https://developer.android.com/",
  },
  {
    name: "KMP",
    descriptionKey: "kmp_desc",
    icon: <Image src="/icons/kmp.svg" alt="KMP" width={48} height={48} className="w-7 h-7" />,
    url: "https://kotlinlang.org/lp/multiplatform/",
  },
  {
    name: "Swift",
    descriptionKey: "swift_desc",
    icon: <Image src="/icons/swift.svg" alt="Swift" width={48} height={48} className="w-7 h-7" />,
    url: "https://www.swift.org/",
  },
];

export default async function ToolsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-background py-20 selection:bg-primary/20">
      <div className="container mx-auto max-w-2xl px-6">
        {/* Back Link */}
        <Link
          href={`/${lang}`}
          className="group mb-12 inline-flex items-center text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {dictionary.tools.back_home}
        </Link>

        {/* Header Avatar */}
        <div className="mb-12">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800">
             <Image 
                src="/images/avatar.jpg" 
                alt={content.personal.name} 
                width={48} 
                height={48} 
                className="h-full w-full object-cover"
             />
          </div>
        </div>

        {/* Title */}
        <div className="mb-10 text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-50">
          {dictionary.tools.title}
        </div>

        {/* Tools List */}
        <div className="space-y-10">
          {tools.map((tool, index) => (
            <Link 
              key={index} 
              href={tool.url}
              target="_blank"
              className="group flex gap-4 sm:gap-6 hover:opacity-80 transition-opacity"
            >
              {/* Icon Container Card */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-zinc-200 shadow-sm">
                {tool.icon}
              </div>
              
              <div className="flex flex-col">
                <h3 className="mb-2 text-xl font-medium text-blue-600 group-hover:underline underline-offset-4">
                  {tool.name}
                </h3>
                <div className="space-y-1">
                    <div className="flex items-start gap-2 text-zinc-500 dark:text-zinc-400 font-light">
                        <CornerDownRight className="h-4 w-4 shrink-0 translate-y-1 opacity-50" />
                        <span>{dictionary.tools[tool.descriptionKey as keyof typeof dictionary.tools]}</span>
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
