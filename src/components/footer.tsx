import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import {Logo} from "@/components/logo";
import {categories} from "@/lib/products";
import {siteConfig} from "@/lib/site";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const products = useTranslations("products");

  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo inverted />
          <p className="mt-5 max-w-sm text-cream/70">{t("tagline")}</p>
          <p className="mt-3 text-sm text-cream/55">{siteConfig.email}</p>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
            {t("products")}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/products/${category.slug}`} className="hover:text-cream">
                  {products(`categories.${category.slug}.name`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
            {t("company")}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>
              <Link href="/#about" className="hover:text-cream">
                {nav("about")}
              </Link>
            </li>
            <li>
              <Link href="/#process" className="hover:text-cream">
                {nav("process")}
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-cream">
                {nav("contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} Pamukkale Global. {t("rights")}
          </p>
          <p>{t("privacy")}</p>
        </div>
      </div>
    </footer>
  );
}
