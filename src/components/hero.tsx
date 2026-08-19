import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-espresso text-cream">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/88 via-espresso/62 to-espresso/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-gold">
          {t("eyebrow")}
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
          {t("subtitle")}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-cream px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-espresso transition hover:bg-white"
          >
            {t("primary")}
          </Link>
          <Link
            href="/#products"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-cream transition hover:border-cream"
          >
            {t("secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
