import type {MetadataRoute} from "next";
import {categories} from "@/lib/products";
import {locales} from "@/i18n/routing";

const siteUrl = "https://pamukkaleglobal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) => {
    const home = {
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
    };
    const categoryPages = categories.map((category) => ({
      url: `${siteUrl}/${locale}/products/${category.slug}`,
      lastModified: new Date(),
    }));
    const productPages = categories.flatMap((category) =>
      category.products.map((product) => ({
        url: `${siteUrl}/${locale}/products/${category.slug}/${product.slug}`,
        lastModified: new Date(),
      })),
    );
    return [home, ...categoryPages, ...productPages];
  });

  return pages;
}
