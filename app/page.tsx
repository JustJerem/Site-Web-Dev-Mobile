"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { i18n } from "../i18n-config";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect preferred language
    const preferredLang = navigator.language.split("-")[0];
    const isSupported = (i18n.locales as readonly string[]).includes(preferredLang);

    // Redirect to the supported language or fallback to default
    router.replace(`/${isSupported ? preferredLang : i18n.defaultLocale}`);
  }, [router]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontFamily: "sans-serif" }}>
      <p>Loading...</p>
    </div>
  );
}
