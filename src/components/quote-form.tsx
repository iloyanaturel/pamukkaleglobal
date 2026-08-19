"use client";

import {FormEvent, useMemo, useState} from "react";
import {useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";
import {getAllProducts} from "@/lib/products";
import {getWhatsAppUrl, siteConfig} from "@/lib/site";

type Channel = "whatsapp" | "email";

export function QuoteForm() {
  const t = useTranslations("contact");
  const tp = useTranslations("products");
  const searchParams = useSearchParams();
  const products = useMemo(() => getAllProducts(), []);
  const preset = searchParams.get("product") ?? "";

  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  function buildMessage(form: FormData) {
    const lines = [
      "Pamukkale Global — sourcing request",
      "",
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company")}`,
      `Country: ${form.get("country")}`,
      `Email: ${form.get("email")}`,
      `WhatsApp / Phone: ${form.get("phone")}`,
      `Product: ${form.get("product")}`,
      `Estimated quantity: ${form.get("quantity")}`,
      `Message: ${form.get("message")}`,
    ];
    if (fileName) {
      lines.push(`Attachment mentioned: ${fileName}`);
    }
    return lines.join("\n");
  }

  function send(formElement: HTMLFormElement, channel: Channel) {
    const form = new FormData(formElement);
    const required = ["name", "email", "product", "message"];
    const missing = required.some((key) => !String(form.get(key) ?? "").trim());
    if (missing) {
      setError(t("required"));
      return;
    }
    setError("");
    const message = buildMessage(form);
    if (channel === "whatsapp") {
      window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    } else {
      const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Textile sourcing request")}&body=${encodeURIComponent(message)}`;
      window.location.href = mailto;
    }
    setStatus("ready");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = (submitter?.value as Channel) || "whatsapp";
    send(event.currentTarget, channel);
  }

  if (status === "ready") {
    return (
      <div className="rounded-[1.5rem] border border-sand bg-linen p-8">
        <h3 className="font-serif text-3xl">{t("successTitle")}</h3>
        <p className="mt-3 text-ink-soft">{t("successText")}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-copper"
        >
          {t("another")}
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label={t("name")} required />
        <Field name="company" label={t("companyName")} />
        <Field name="country" label={t("country")} />
        <Field name="email" label={t("emailField")} type="email" required />
        <Field name="phone" label={t("phone")} />
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">{t("product")}</span>
          <select
            name="product"
            defaultValue={preset}
            required
            className="w-full rounded-2xl border border-sand bg-cream px-4 py-3 outline-none ring-copper/30 focus:ring-2"
          >
            <option value="">{t("productPlaceholder")}</option>
            {products.map((product) => (
              <option key={product.slug} value={product.slug}>
                {tp(`items.${product.slug}.name`)}
              </option>
            ))}
            <option value="other">{t("other")}</option>
          </select>
        </label>
      </div>
      <Field name="quantity" label={t("quantity")} />
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium">{t("message")}</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-2xl border border-sand bg-cream px-4 py-3 outline-none ring-copper/30 focus:ring-2"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium">{t("file")}</span>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
          className="w-full rounded-2xl border border-dashed border-sand bg-linen px-4 py-3 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-1.5 file:text-xs file:font-semibold file:uppercase file:tracking-wider file:text-cream"
        />
        <span className="mt-2 block text-xs text-ink-soft">{t("fileHint")}</span>
      </label>
      {error ? <p className="text-sm text-copper-dark">{error}</p> : null}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          name="channel"
          value="whatsapp"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-ink px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-copper-dark"
        >
          {t("whatsappSubmit")}
        </button>
        <button
          type="submit"
          name="channel"
          value="email"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-ink/20 px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition hover:border-ink"
        >
          {t("emailSubmit")}
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-sand bg-cream px-4 py-3 outline-none ring-copper/30 focus:ring-2"
      />
    </label>
  );
}
