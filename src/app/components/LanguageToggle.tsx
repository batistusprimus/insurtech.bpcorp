"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname.startsWith("/en") ? "en" : "fr";
  const switchLang = (lang: "fr" | "en") => {
    let newPath = "";
    if (pathname === "/" || pathname === "") {
      newPath = `/${lang}`;
    } else if (/^\/(fr|en)(\/|$)/.test(pathname)) {
      newPath = pathname.replace(/^\/(fr|en)/, `/${lang}`);
    } else {
      newPath = `/${lang}${pathname}`;
    }
    router.push(newPath);
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center bg-white rounded-full shadow border border-[#10B981]/20 gap-0.5 px-1 py-0.5" style={{fontSize: '0.95rem', minWidth: 80}}>
        <button
          onClick={() => switchLang("fr")}
          disabled={currentLang === "fr"}
          className={`px-2 py-1 rounded-full transition-colors font-bold focus:outline-none text-xs ${currentLang === "fr" ? "bg-[#10B981] text-white" : "text-[#1C2B4A] hover:bg-[#10B981]/10"}`}
          style={{minWidth: 32}}
        >
          FR
        </button>
        <button
          onClick={() => switchLang("en")}
          disabled={currentLang === "en"}
          className={`px-2 py-1 rounded-full transition-colors font-bold focus:outline-none text-xs ${currentLang === "en" ? "bg-[#10B981] text-white" : "text-[#1C2B4A] hover:bg-[#10B981]/10"}`}
          style={{minWidth: 32}}
        >
          EN
        </button>
      </div>
    </div>
  );
} 