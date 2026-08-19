"use client";

import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import {Menu, X} from "lucide-react";
import {Link, usePathname} from "@/i18n/navigation";
import {Logo} from "@/components/logo";
import {LanguageSwitcher} from "@/components/language-switcher";
import {cn} from "@/lib/utils";

const links = [
  {href: "/#about" as const, key: "about"},
  {href: "/#products" as const, key: "products"},
  {href: "/#process" as const, key: "process"},
  {href: "/#contact" as const, key: "contact"},
];

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openForPath, setOpenForPath] = useState(pathname);
  const isHome = pathname === "/";

  if (openForPath !== pathname) {
    setOpenForPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const inverted = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        inverted
          ? "bg-transparent text-cream"
          : "border-b border-sand/80 bg-cream/95 text-ink shadow-[0_8px_30px_rgba(27,23,20,0.06)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Pamukkale Global">
          <Logo inverted={inverted} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] opacity-80 transition hover:opacity-100"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher inverted={inverted} />
          <Link
            href="/#contact"
            className={cn(
              "rounded-full px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition",
              inverted
                ? "bg-cream text-espresso hover:bg-white"
                : "bg-ink text-cream hover:bg-copper-dark",
            )}
          >
            {t("quote")}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/20 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? t("closeMenu") : t("openMenu")}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-sand bg-cream px-5 py-6 text-ink lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-4">
            <LanguageSwitcher />
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream"
            >
              {t("quote")}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
