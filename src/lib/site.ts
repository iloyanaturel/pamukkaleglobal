export const siteConfig = {
  name: "Pamukkale Global",
  email: "globalpamukkale@gmail.com",
  location: "Denizli, Türkiye",
  /**
   * WhatsApp number in international format without + or spaces.
   * Set NEXT_PUBLIC_WHATSAPP_NUMBER in production (e.g. 905551112233).
   */
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "",
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY ?? "+90 XXX XXX XX XX",
  languages: ["English", "Spanish", "German", "Russian", "Turkish"] as const,
};

export function getWhatsAppUrl(text?: string) {
  const number = siteConfig.whatsappNumber;
  const encoded = text ? `?text=${encodeURIComponent(text)}` : "";
  if (!number) {
    return `https://wa.me/${encoded}`;
  }
  return `https://wa.me/${number}${encoded}`;
}

export function isWhatsAppConfigured() {
  return siteConfig.whatsappNumber.length >= 10;
}
