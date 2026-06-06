import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  href?: string;
  className?: string;
  /** Whether to animate the light beam on mount. */
  animate?: boolean;
};

/**
 * Propagaluz wordmark — stacked PRO / PAGA / LUZ in heavy display type,
 * with a buttery-yellow beam of light passing through the middle line.
 *
 * v1 uses Archivo Black as a placeholder for Lovelo Black (the actual logo
 * typeface). Swap in Lovelo via next/font/local when Camila provides the
 * .otf file. The wordmark is composed live in HTML/CSS rather than as a
 * static image so it can scale, animate, and adapt across surfaces.
 */
export function Logo({ href = "/", className, animate = false }: LogoProps) {
  const inner = (
    <span
      className={cn(
        "relative inline-flex flex-col font-display leading-none tracking-tight text-ink",
        className
      )}
      aria-label="Propagaluz"
    >
      {/* Yellow beam — sits behind the text, opens to the right */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -z-10 top-[28%] -left-[8%] h-[44%] w-[260%]",
          "bg-luz"
        )}
        style={{
          clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 70%)",
          animation: animate
            ? "beam-sweep 900ms cubic-bezier(0.22, 1, 0.36, 1) both"
            : undefined,
        }}
      />
      <span className="text-[1em]">PRO</span>
      <span className="text-[1em]">PAGA</span>
      <span className="text-[1em]">LUZ</span>
    </span>
  );

  if (!href) return inner;

  return (
    <Link
      href={href}
      className="inline-block focus:outline-2 focus:outline-offset-4 focus:outline-ink rounded-sm"
    >
      {inner}
    </Link>
  );
}
