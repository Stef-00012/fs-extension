// Modified by mattermatter.dev @ Pirate Software, 2025

import { type MouseEventHandler } from "react";

import { useFerret, usePlaygroup } from "../hooks/useFerrets";
import { classes } from "../utils/classes";
import Ring from "./Ring";

interface FerretButtonProps {
  ferret: string;
  showPlaygroup: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  className?: string;
}

export default function FerretButton(props: FerretButtonProps) {
  const {
    ferret: ferretKey,
    showPlaygroup,
    onClick,
    active,
    className,
  } = props;
  const ferretRaw = useFerret(ferretKey);

  if (!ferretRaw) return null;

  const ferret = ferretRaw!;

  return (
    <button
      className={classes(
        "group/button relative flex shrink-0 flex-col items-center justify-start rounded-lg bg-framecol text-center shadow-lg transition-[filter] hover:brightness-85 dark:bg-framecol-dark",
        className,
      )}
      id={ferretKey}
      onClick={onClick}
      type="button"
    >
      <img
        className={classes(
          "w-full shrink-0 rounded-t-lg object-cover",
          showPlaygroup ? "aspect-[2.2]" : "aspect-[1.4]",
        )}
        src={ferret.mugshot}
        alt={`Mugshot of ${ferret.name}`}
        loading="lazy"
      />

      <div
        className={classes(
          "my-auto px-1 pb-2",
          showPlaygroup ? "pt-2" : "py-1",
        )}
      >
        <h2 className="text-sm text-balance">{ferret.name}</h2>
        {showPlaygroup && (
          <h3 className="text-xs text-balance text-subtitlecol dark:text-subtitlecol-dark">
            {usePlaygroup(ferret.playgroup)?.name}
          </h3>
        )}
      </div>

      <Ring active={active} />
    </button>
  );
}
