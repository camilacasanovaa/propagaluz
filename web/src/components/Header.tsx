import Link from "next/link";
import { cn } from "@/lib/cn";

export function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-40 backdrop-blur-md bg-white/[0.04]">
      <div className="mx-auto max-w-(--container-wide) px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between gap-6 text-white">
        <Link
          href="/"
          aria-label="Propagaluz"
          className="inline-flex items-center gap-2.5"
        >
          <svg
            viewBox="0 0 26 18"
            width="26"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.7 }}
            aria-hidden
          >
            <polygon points="0,4 26,0 26,18 0,14" fill="#fff" />
          </svg>
          <span
            className="font-head"
            style={{
              fontSize: "1.15rem",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              textTransform: "lowercase",
              color: "#fff",
              lineHeight: 1,
            }}
          >
            propagaluz
          </span>
        </Link>

        <a
          href="#donate"
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-(--radius-pill)",
            "bg-luz text-white font-head text-xs tracking-widest uppercase font-bold",
            "hover:brightness-95 transition-all"
          )}
        >
          <svg
            viewBox="0 0 14 11"
            width="14"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <polygon points="0,3 14,0 14,11 0,8" fill="#fff" />
          </svg>
          Give Light
        </a>
      </div>
    </header>
  );
}
