import type {Metadata} from "next";
import {Cormorant_Garamond, Manrope} from "next/font/google";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {getMessages, getTranslations, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {WhatsAppButton} from "@/components/whatsapp-button";
import {routing} from "@/i18n/routing";
import {siteConfig} from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "meta"});

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL("https://pamukkaleglobal.vercel.app"),
    openGraph: {
      title: t("ogTitle"),
      description: t("description"),
      locale,
      type: "website",
      images: [{url: "/images/hero.jpg"}],
    },
    alternates: {
      languages: {
        en: "/",
        es: "/es",
        de: "/de",
        ru: "/ru",
      },
    },
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denizli",
      addressCountry: "TR",
    },
    areaServed: "Worldwide",
    knowsLanguage: ["en", "es", "de", "ru", "tr"],
  };

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className={`${manrope.className} min-h-full bg-cream text-ink`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
