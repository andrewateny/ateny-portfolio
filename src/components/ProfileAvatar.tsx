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
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className={`absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] opacity-60 blur-2xl`}
      />
      <div
        className={`relative ${dims} rounded-full bg-[image:var(--gradient-primary)] p-[3px] shadow-[var(--shadow-glow)]`}
      >
        <img
          src={andrewAsset.url}
          alt="Andrew Ateny Magok"
          loading="lazy"
          className="h-full w-full rounded-full object-cover ring-2 ring-background"
        />
      </div>
    </div>
  );
}