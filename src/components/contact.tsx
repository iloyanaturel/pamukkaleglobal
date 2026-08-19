import {Suspense} from "react";
import {useTranslations} from "next-intl";
import {Mail, MapPin, MessageCircle} from "lucide-react";
import {QuoteForm} from "@/components/quote-form";
import {getWhatsAppUrl, isWhatsAppConfigured, siteConfig} from "@/lib/site";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="scroll-mt-24 bg-linen py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-copper">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{t("title")}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{t("subtitle")}</p>

          <div className="mt-10 space-y-5 rounded-[1.75rem] bg-cream p-7">
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-copper">
              {t("infoTitle")}
            </h3>
            <p className="font-serif text-3xl">{t("company")}</p>
            <Info icon={MapPin} label={t("location")} value={siteConfig.location} />
            <Info
              icon={Mail}
              label={t("email")}
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <Info
              icon={MessageCircle}
              label={t("whatsapp")}
              value={siteConfig.whatsappDisplay}
              href={isWhatsAppConfigured() ? getWhatsAppUrl() : undefined}
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                {t("languages")}
              </p>
              <p className="mt-1">{t("languagesValue")}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-cream p-6 sm:p-8">
          <h3 className="font-serif text-3xl">{t("formTitle")}</h3>
          <div className="mt-6">
            <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-linen" />}>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">{label}</p>
      <p className="mt-1">{value}</p>
    </>
  );

  return (
    <div className="flex gap-3">
      <Icon className="mt-1 h-4 w-4 text-copper" />
      <div>
        {href ? (
          <a href={href} className="hover:text-copper">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
