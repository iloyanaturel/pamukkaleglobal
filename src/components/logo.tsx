import {cn} from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({className, inverted = false}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="16" fill={inverted ? "#f4efe6" : "#14110e"} />
        <path
          d="M12 42c6.5-4.2 13.2-6.4 20-6.4S45.5 37.8 52 42"
          stroke={inverted ? "#8d4428" : "#c4a574"}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M16 36c5.4-3.4 10.8-5.1 16-5.1s10.6 1.7 16 5.1"
          stroke={inverted ? "#8d4428" : "#c4a574"}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity=".8"
        />
        <circle cx="32" cy="22" r="7.2" fill={inverted ? "#14110e" : "#f4efe6"} />
        <circle cx="32" cy="22" r="2.4" fill="#b45c38" />
      </svg>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-serif text-[1.15rem] font-semibold tracking-[0.18em]",
            inverted ? "text-cream" : "text-ink",
          )}
        >
          PAMUKKALE
        </span>
        <span
          className={cn(
            "block text-[0.65rem] font-medium uppercase tracking-[0.42em]",
            inverted ? "text-gold" : "text-copper",
          )}
        >
          Global
        </span>
      </span>
    </span>
  );
}
