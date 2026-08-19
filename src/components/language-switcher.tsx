"use client";

import {useLocale} from "next-intl";
import {localeNames, locales, type Locale} from "@/i18n/routing";
import {usePathname, useRouter} from "@/i18n/navigation";
import {cn} from "@/lib/utils";

export function LanguageSwitcher({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn("flex items-center gap-1 text-[0.7rem] font-semibold tracking-[0.18em] uppercase", className)}
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => router.replace(pathname, {locale: code as Locale})}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              active
                ? inverted
                  ? "bg-cream text-espresso"
                  : "bg-ink text-cream"
                : inverted
                  ? "text-cream/70 hover:text-cream"
                  : "text-ink-soft hover:text-ink",
            )}
            aria-current={active ? "true" : undefined}
          >
            {code}
            <span className="sr-only">{localeNames[code]}</span>
          </button>
        );
      })}
    </div>
  );
}
