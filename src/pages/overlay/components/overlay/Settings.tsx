import { typeSafeObjectEntries } from "../../../../utils/helpers";
import { classes } from "../../../../utils/classes";

import useSettings from "../../hooks/useSettings";

import Card from "../../../../components/Card";
import Toggle from "../Toggle";

import type { OverlayOptionProps } from "./Overlay";
import IconExternal from "../../../../components/icons/IconExternal";

export default function Settings(props: OverlayOptionProps) {
  const { className } = props;
  const settings = useSettings();

  return (
    <div className={classes("absolute top-0 left-0 mx-4 my-6", className)}>
      <Card title="Extension Settings">
        <ul className="flex flex-col gap-4">
          {typeSafeObjectEntries(settings).map(([key, setting]) => {
            if (!setting.configurable) return null;

            return (
              <li key={key} className="flex items-center">
                {setting.type === "boolean" && (
                  <Toggle
                    label={setting.title}
                    value={setting.value as boolean}
                    onChange={setting.change as (value: boolean) => void}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </Card>
      <Card title="Credits" className={classes("top-3", className)}>
        <div className="mt-3">
          Based on the work of the&nbsp;
          <a
            href="https://alveus.gg"
            rel="noreferrer"
            target="_blank"
            className="text-nowrap text-fs-tan-700 transition-colors hover:text-highlight focus:text-highlight"
          >
            <span className="underline">alveus.gg</span>
            <IconExternal className="mb-0.5 inline-block" size={12} />
          </a>
          &nbsp;team
          <br />
          Modified for&nbsp;
          <a
            href="https://ferrets.live"
            rel="noreferrer"
            target="_blank"
            className="text-nowrap text-fs-tan-700 transition-colors hover:text-highlight focus:text-highlight"
          >
            <span className="underline">Ferret Software</span>
            <IconExternal className="mb-0.5 inline-block" size={12} />
          </a>
          &nbsp;by&nbsp;
          <a
            href="https://mattermatter.dev"
            rel="noreferrer"
            target="_blank"
            className="text-nowrap text-fs-tan-700 transition-colors hover:text-highlight focus:text-highlight"
          >
            <span className="underline">Matt</span>
            <IconExternal className="mb-0.5 inline-block" size={12} />
          </a>
          <br />
          Brand logo icons from&nbsp;
          <a
            href="https://fontawesome.com"
            rel="noreferrer"
            target="_blank"
            className="text-nowrap text-fs-tan-700 transition-colors hover:text-highlight focus:text-highlight"
          >
            <span className="underline">fontawesome.com</span>
            <IconExternal className="mb-0.5 inline-block" size={12} />
          </a>
          <br />
          Party hat icon from&nbsp;
          <a
            href="https://flaticon.com"
            rel="noreferrer"
            target="_blank"
            className="text-nowrap text-fs-tan-700 transition-colors hover:text-highlight focus:text-highlight"
          >
            <span className="underline">flaticon.com</span>
            <IconExternal className="mb-0.5 inline-block" size={12} />
          </a>
          <br />
          Other single-colour icons from&nbsp;
          <a
            href="https://heroicons.com"
            rel="noreferrer"
            target="_blank"
            className="text-nowrap text-fs-tan-700 transition-colors hover:text-highlight focus:text-highlight"
          >
            <span className="underline">heroicons.com</span>
            <IconExternal className="mb-0.5 inline-block" size={12} />
          </a>
          <br />
          Emotes and other images subject to copyright
          <br />
          For all enquiries, please open a{" "}
          <span className="italic">#mod-ticket</span> on&nbsp;
          <a
            href="https://discord.gg/piratesoftware"
            rel="noreferrer"
            target="_blank"
            className="text-nowrap text-fs-tan-700 transition-colors hover:text-highlight focus:text-highlight"
          >
            <span className="underline">Discord</span>
            <IconExternal className="mb-0.5 inline-block" size={12} />
          </a>
        </div>
      </Card>
    </div>
  );
}
