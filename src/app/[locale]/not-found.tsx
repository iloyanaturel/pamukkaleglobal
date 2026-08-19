import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="font-serif text-5xl">{t("title")}</h1>
      <p className="mt-4 max-w-md text-ink-soft">{t("text")}</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream"
      >
        {t("home")}
      </Link>
    </div>
  );
}
