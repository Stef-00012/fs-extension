// Modified by mattermatter.dev @ Pirate Software, 2025

import { useState, useCallback, Fragment, useMemo, useEffect } from "react";

import FerretCard from "../../../components/FerretCard";
import FerretButton from "../../../components/FerretButton";

import { isAliveFerret, useFerrets } from "../../../hooks/useFerrets";

import useChatCommand from "../../../hooks/useChatCommand";
import { typeSafeObjectEntries } from "../../../utils/helpers";

import Overlay from "./Overlay";
import useSettings from "../hooks/useSettings";

export default function Ferrets() {
  const rawFerrets = useFerrets();
  const settings = useSettings();
  const valhallaMode = settings.valhallaMode.value;

  const ferrets = useMemo(
    () =>
      typeSafeObjectEntries(rawFerrets ?? {}).filter(
        ([, f]) => valhallaMode != isAliveFerret(f),
      ),
    [rawFerrets, valhallaMode],
  );

  // Allow chat commands to select a ferret, as well as the user
  const [ferretCard, setFerretCard] = useState<string>();
  useChatCommand(
    useCallback(
      (command: string) => {
        if (Object.keys(rawFerrets ?? {}).includes(command))
          setFerretCard(command);
      },
      [rawFerrets],
    ),
  );

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) {
        const ferret = rawFerrets?.[detail];
        if (!ferret) return;
        const ferretToSelect = rawFerrets?.[detail];
        if (!ferretToSelect) {
          console.error(`Ferret ${detail} not found`);
          return;
        }
        if (valhallaMode === isAliveFerret(ferretToSelect)) {
          settings.valhallaMode.change(!valhallaMode);
        }
        setFerretCard(detail);
      }
    };

    window.addEventListener("fsext:selectFerret", handler as EventListener);
    return () =>
      window.removeEventListener(
        "fsext:selectFerret",
        handler as EventListener,
      );
  }, [setFerretCard, rawFerrets]);

  return (
    <main className="relative scrollbar flex max-h-full flex-wrap justify-center gap-4 overflow-x-hidden overflow-y-auto px-2 pt-16 pb-4 scrollbar-thumb-chocolate-alt scrollbar-track-tan-alt md:px-4 dark:scrollbar-thumb-chocolate dark:scrollbar-track-chocolate-deep/25">
      <div className="absolute inset-x-0 top-0 h-12 w-screen bg-framecol dark:bg-framecol-dark" />

      {ferrets.map(([key]) => (
        <Fragment key={key}>
          <Overlay
            show={ferretCard === key}
            onClose={() => setFerretCard(undefined)}
          >
            <FerretCard ferret={key} onClose={() => setFerretCard(undefined)} />
          </Overlay>

          <FerretButton
            ferret={key}
            showPlaygroup={true}
            onClick={() => setFerretCard(key)}
            className="w-32 max-w-full md:w-48"
          />
        </Fragment>
      ))}
    </main>
  );
}
