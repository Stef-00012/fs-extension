import { classes } from "../utils/classes";

interface RingProps {
  active?: boolean;
  thickBottom?: boolean;
  className?: string;
}

export default function Ring({
  active = false,
  thickBottom = true,
  className,
}: RingProps) {
  return (
    <div
      className={classes(
        "pointer-events-none absolute -inset-px border-3 transition-colors",
        active
          ? "border-outlinecol"
          : "border-chocolate group-hover/button:border-outlinecol group-focus/button:border-outlinecol dark:border-chocolate-alt",
        !/\brounded-/.test(className || "") && "rounded-lg",
        thickBottom && "border-b-5",
        className,
      )}
    />
  );
}
