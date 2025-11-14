import { classes } from "../utils/classes";

interface RingProps {
  active?: boolean;
  className?: string;
}

export default function Ring({ active = false, className }: RingProps) {
  return (
    <div
      className={classes(
        "pointer-events-none absolute inset-0 border-3 border-b-5 border-outlinecol transition-colors",
        active
          ? "border-outlinecol"
          : "border-white/25 group-hover/button:border-outlinecol group-focus/button:border-outlinecol",
        !/\brounded-/.test(className || "") && "rounded-lg",
        className,
      )}
    />
  );
}
