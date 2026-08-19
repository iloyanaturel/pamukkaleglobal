import {useTranslations} from "next-intl";
import {Check} from "lucide-react";

const keys = ["denizli", "network", "contact", "languages", "flexible"] as const;

export function WhyUs() {
  const t = useTranslations("why");
  const cta = useTranslations("cta");

  return (
    <section className="bg-espresso texture-dark py-20 text-cream sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-gold">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <div className="mt-12 rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
            <h3 className="font-serif text-3xl leading-snug">{cta("title")}</h3>
            <p className="mt-4 text-cream/75">{cta("text")}</p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-cream px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-espresso"
            >
              {cta("button")}
            </a>
          </div>
        </div>

        <ul className="space-y-4">
          {keys.map((key) => (
            <li
              key={key}
              className="flex gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-5"
            >
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-copper/20 text-gold">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{t(`items.${key}.title`)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/70">
                  {t(`items.${key}.text`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
