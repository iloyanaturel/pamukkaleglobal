import Image from "next/image";
import {useTranslations} from "next-intl";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-copper">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink">{t("lead")}</p>
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-ink-soft">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>
          <blockquote className="mt-10 border-l-2 border-gold pl-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-copper">
              {t("missionTitle")}
            </p>
            <p className="mt-3 font-serif text-2xl leading-snug text-ink">
              {t("mission")}
            </p>
          </blockquote>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/bathroom.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-4 hidden w-56 overflow-hidden rounded-3xl border-4 border-cream shadow-xl sm:block">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/cotton.jpg"
                alt=""
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
