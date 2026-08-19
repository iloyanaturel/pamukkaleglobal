import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {Link} from "@/i18n/navigation";
import {categories, getCategory, getProduct} from "@/lib/products";
import {routing} from "@/i18n/routing";

type Props = {
  params: Promise<{locale: string; category: string; product: string}>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    categories.flatMap((category) =>
      category.products.map((product) => ({
        locale,
        category: category.slug,
        product: product.slug,
      })),
    ),
  );
}

export async function generateMetadata({params}: Props) {
  const {locale, category: categorySlug, product: productSlug} = await params;
  const product = getProduct(categorySlug, productSlug);
  if (!product) return {};
  const t = await getTranslations({locale, namespace: "products"});
  return {
    title: `${t(`items.${product.slug}.name`)} | Pamukkale Global`,
    description: t(`items.${product.slug}.description`),
  };
}

export default async function ProductPage({params}: Props) {
  const {locale, category: categorySlug, product: productSlug} = await params;
  setRequestLocale(locale);
  const category = getCategory(categorySlug);
  const product = getProduct(categorySlug, productSlug);
  if (!category || !product) notFound();

  const t = await getTranslations("products");
  const related = category.products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <article className="bg-cream pt-28 pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] lg:min-h-[36rem]">
          <Image
            src={product.image}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <Link
            href={`/products/${category.slug}`}
            className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-copper"
          >
            {t("backTo", {category: t(`categories.${category.slug}.name`)})}
          </Link>
          <h1 className="mt-4 font-serif text-5xl leading-tight">
            {t(`items.${product.slug}.name`)}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            {t(`items.${product.slug}.description`)}
          </p>
          <p className="mt-4 text-sm text-ink">
            {t(`items.${product.slug}.uses`)}
          </p>

          <div className="mt-8 rounded-[1.5rem] bg-linen p-6">
            <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-copper">
              {t("specsTitle")}
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-sand pb-3">
                <dt className="text-ink-soft">{t("material")}</dt>
                <dd className="text-right font-medium">{product.specs.material}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-sand pb-3">
                <dt className="text-ink-soft">{t("weight")}</dt>
                <dd className="text-right font-medium">{product.specs.weight}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-soft">{t("options")}</dt>
                <dd className="text-right font-medium">{product.specs.options}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-sand p-5">
              <h3 className="font-semibold">{t("privateLabel")}</h3>
              <p className="mt-2 text-sm text-ink-soft">{t("privateLabelText")}</p>
            </div>
            <div className="rounded-[1.25rem] border border-sand p-5">
              <h3 className="font-semibold">{t("certifications")}</h3>
              <p className="mt-2 text-sm text-ink-soft">{t("certificationsText")}</p>
            </div>
          </div>

          <Link
            href={{pathname: "/", query: {product: product.slug}}}
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream hover:bg-copper-dark"
          >
            {t("quoteCta")}
          </Link>
        </div>
      </div>

      {related.length > 0 ? (
        <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
          <h2 className="font-serif text-3xl">{t("related")}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${category.slug}/${item.slug}`}
                className="overflow-hidden rounded-[1.5rem] bg-linen"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt="" fill sizes="30vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl">{t(`items.${item.slug}.name`)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
