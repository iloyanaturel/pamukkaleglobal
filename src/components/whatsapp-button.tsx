"use client";

import {useTranslations} from "next-intl";
import {getWhatsAppUrl} from "@/lib/site";

export function WhatsAppButton() {
  const t = useTranslations("whatsapp");

  return (
    <a
      href={getWhatsAppUrl(t("prefill"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12.04 2c-5.5 0-9.96 4.45-9.96 9.93 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.37a10 10 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.94C22.01 6.45 17.54 2 12.04 2Zm5.79 14.17c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.92-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.24-.27.64-.39.86-.39h.62c.2 0 .46-.04.72.55.27.61.91 2.1.99 2.25.08.15.13.32.03.52-.1.19-.15.32-.3.49-.14.17-.3.38-.43.51-.14.14-.29.29-.12.56.16.27.73 1.2 1.56 1.95 1.07.96 1.97 1.26 2.25 1.4.27.14.43.12.59-.07.16-.19.69-.8.87-1.08.18-.27.37-.23.62-.14.25.1 1.57.74 1.84.87.27.14.45.2.52.31.06.11.06.64-.18 1.32Z" />
      </svg>
    </a>
  );
}
