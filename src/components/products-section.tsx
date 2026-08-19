import Image from "next/image";
import {useTranslations} from "next-intl";
import {ArrowUpRight} from "lucide-react";
import {Link} from "@/i18n/navigation";
import {categories} from "@/lib/products";

const chips = [
  "chipTowels",
  "chipBathrobes",
  "chipBedding",
  "chipHotel",
  "chipFabrics",
  "chipPrivate",
] as const;

export function ProductsSection() {
  const t = useTranslations("products");

  return (
    <section id="products" className="scroll-mt-24 bg-linen py-20 sm:py-28">
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

        <div className="mt-8 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-sand bg-cream px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft"
            >
              {t(chip)}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group relative isolate min-h-[22rem] overflow-hidden rounded-[1.75rem] text-cream"
            >
              <Image
                src={category.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-espresso/10" />
              <div className="relative flex h-full min-h-[22rem] flex-col justify-end p-8">
                <span className="font-serif text-gold/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-4xl">
                  {t(`categories.${category.slug}.name`)}
                </h3>
                <p className="mt-2 max-w-md text-cream/80">
                  {t(`categories.${category.slug}.tagline`)}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em]">
                  {t("viewCategory")}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
