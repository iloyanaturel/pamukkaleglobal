import {useTranslations} from "next-intl";

const steps = ["1", "2", "3", "4", "5"] as const;

export function HowItWorks() {
  const t = useTranslations("process");

  return (
    <section id="process" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-copper">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            {t("subtitle")}
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step} className="bg-cream p-7">
              <span className="font-serif text-4xl text-gold">{step.padStart(2, "0")}</span>
              <h3 className="mt-5 text-lg font-semibold leading-snug">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {t(`steps.${step}.text`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
