import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {ArrowUpRight} from "lucide-react";
import {Link} from "@/i18n/navigation";
import {categories, getCategory} from "@/lib/products";
import {routing} from "@/i18n/routing";

type Props = {
  params: Promise<{locale: string; category: string}>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    categories.map((category) => ({locale, category: category.slug})),
  );
}

export async function generateMetadata({params}: Props) {
  const {locale, category: slug} = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const t = await getTranslations({locale, namespace: "products"});
  return {
    title: `${t(`categories.${category.slug}.name`)} | Pamukkale Global`,
    description: t(`categories.${category.slug}.description`),
  };
}

export default async function CategoryPage({params}: Props) {
  const {locale, category: slug} = await params;
  setRequestLocale(locale);
  const category = getCategory(slug);
  if (!category) notFound();

  const t = await getTranslations("products");
  const nav = await getTranslations("nav");

  return (
    <article className="bg-cream pt-28 pb-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-5 sm:px-8">
        <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem]">
          <Image
            src={category.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 to-espresso/25" />
          <div className="relative max-w-2xl px-8 py-16 text-cream sm:px-12">
            <Link href="/#products" className="text-[0.7rem] uppercase tracking-[0.24em] text-gold">
              {nav("products")}
            </Link>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
              {t(`categories.${category.slug}.name`)}
            </h1>
            <p className="mt-4 text-lg text-cream/80">
              {t(`categories.${category.slug}.description`)}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {category.products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${category.slug}/${product.slug}`}
            className="group overflow-hidden rounded-[1.5rem] bg-linen"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={product.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl">{t(`items.${product.slug}.name`)}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                {t(`items.${product.slug}.description`)}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-copper">
                {t("viewDetails")}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
