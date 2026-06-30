import andrewAsset from "@/assets/andrew.jpg.asset.json";

export function ProfileAvatar({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dims = size === "lg" ? "h-56 w-56" : size === "sm" ? "h-16 w-16" : "h-40 w-40";
  return (
    <div className={`relative ${dims} ${className}`}>
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] opacity-60 blur-2xl"
      />
      {/* Circular holder with cyan background, clips image to circle */}
      <div
        className="absolute inset-0 overflow-hidden rounded-full p-[3px] shadow-[var(--shadow-glow)] ring-2 ring-background"
        style={{ background: "linear-gradient(135deg, #00f0ff, #00b8d4)" }}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-full"
          style={{ backgroundColor: "#00f0ff" }}
        >
          <img
            src={andrewAsset.url}
            alt="Andrew Ateny Magok"
            loading="lazy"
            className="absolute left-1/2 top-[8%] h-[115%] w-auto max-w-none -translate-x-1/2 object-contain"
          />
        </div>
      </div>
    </div>
  );
}