import { useState, useEffect } from "react";
import {
  AppEvents,
  renderWidget,
  useAPIEventListener,
  usePlugin,
  useRunAsync,
  WidgetLocation,
} from "@remnote/plugin-sdk";
import { PlayButton } from "../components/playButton";
import { ClearButton } from "../components/clearButton";
import { clearResult } from "../function/clear";
import { logData, originalConsoleLog } from "../constants/logData";

export function RunJS() {
  let evaluate: undefined;
  const [clog, setClog] = useState<React.ReactNode[]>();
  const [text, setText] = useState<string>();
  const isDifferent = evaluate && "" + evaluate !== text?.trim();

  const plugin = usePlugin();
  const widgetContext = useRunAsync(() => plugin.widget.getWidgetContext<WidgetLocation.UnderRemEditor>(), []);

  const getRemText = async (remId: string) => {
    const rem = await plugin.rem.findOne(remId);
    const text = await plugin.richText.toString(rem?.text || []);
    return text?.toString();
  };

  const renderText = async () => {
    const remId = widgetContext?.remId;
    const text = remId && (await getRemText(remId));
    await setText(text);
  };

  // type argProps = string[] | number[] | bigint[] | boolean[] | symbol[] | undefined[] | object[] | (() => void)[];

  const evaluateCodeblock = async () => {
    console.clear();
    if (text) {
      try {
        evaluate = await eval(text);
      } catch (error) {
        console.error(error);
      }

      console.log = (...args: any) => {
        const formattedArgs = args.map((arg: any) => {
          if (arg instanceof Map) {
            return Array.from(arg.entries())
              .map(([key, value]) => `${String(key)}: ${String(value)}`)
              .join(", ");
          } else if (typeof arg === "object" && arg !== null) {
            const entries = [
              ...Object.entries(arg),
              ...Object.getOwnPropertySymbols(arg).map((sym) => [sym, arg[sym]]),
            ];
            return entries.map(([key, value]) => `${String(key)}: ${String(value)}`).join(", ");
          } else if (typeof arg === "boolean") {
            return arg.toString();
          } else if (typeof arg === "symbol") {
            return arg.toString();
          } else if (typeof arg === "undefined") {
            return "undefined";
          } else {
            return arg;
          }
        });

        logData.push(formattedArgs);

        originalConsoleLog.apply(console, args);

        const A = logData.map((log, index) => <div key={index}>{log}</div>);

        setClog(A);
      };

      setTimeout(() => {
        logData.length = 0;
      }, 200);
    } else {
      console.log("No code to run");
    }
  };

  useAPIEventListener(AppEvents.RemChanged, widgetContext?.remId, () => renderText());

  useEffect(() => {
    renderText();
  }, [widgetContext?.remId, clog]);

  return (
    <div className="flex gap-2 ml-6 p-2">
      <button title="runjs-play" onClick={evaluateCodeblock}>
        <PlayButton />
      </button>
      <button title="runjs-clear" onClick={clearResult}>
        <ClearButton />
      </button>
      <div className={`ml-6 p-2 border-2 border-white ${isDifferent ? "" : "w-full"}`}>{clog}</div>
    </div>
  );
}

renderWidget(RunJS);
