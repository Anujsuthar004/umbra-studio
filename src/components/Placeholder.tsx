import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label: string;
  className?: string;
  aspect?: "square" | "4/3" | "16/9" | "21/9" | "3/4" | "auto";
}

export function Placeholder({ label, className, aspect = "auto" }: PlaceholderProps) {
  const aspectClass = {
    square: "aspect-square",
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-video",
    "21/9": "aspect-[21/9]",
    "3/4": "aspect-[3/4]",
    auto: "",
  }[aspect];

  return (
    <div
      className={cn(
        "bg-placeholder flex items-center justify-center relative overflow-hidden",
        aspectClass,
        className
      )}
      style={{
        backgroundImage: "repeating-linear-gradient(135deg, rgba(236,228,214,0.045) 0 2px, transparent 2px 13px)"
      }}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.4)] text-center px-4 mix-blend-plus-lighter relative z-10">
        {label}
      </span>
    </div>
  );
}
