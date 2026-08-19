import {useTranslations} from "next-intl";
import {Globe2, MapPin, MessagesSquare, Network} from "lucide-react";

const items = [
  {icon: MapPin, key: "location", hint: "locationHint"},
  {icon: Network, key: "network", hint: "networkHint"},
  {icon: Globe2, key: "languages", hint: "languagesHint"},
  {icon: MessagesSquare, key: "contact", hint: "contactHint"},
] as const;

export function TrustBar() {
  const t = useTranslations("trust");

  return (
    <section className="border-y border-sand bg-linen">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map(({icon: Icon, key, hint}) => (
          <div key={key} className="flex gap-4">
            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-copper">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-wide">{t(key)}</p>
              <p className="mt-1 text-sm text-ink-soft">{t(hint)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
