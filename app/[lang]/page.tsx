import { Hero } from "@/components/hero";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      <Hero dictionary={dictionary} lang={lang} />
    </main>
  );
}
