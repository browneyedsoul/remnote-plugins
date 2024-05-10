import { useState, useEffect } from "react";
import {
  AppEvents,
  renderWidget,
  useAPIEventListener,
  usePlugin,
  useRunAsync,
  WidgetLocation,
} from "@remnote/plugin-sdk";
import { PlayButton } from "./components/playButton";
import { ClearButton } from "./components/clearButton";

export function RunJS() {
  let evaluate: any;

  const [text, setText] = useState<string>();
  const plugin = usePlugin();
  const widgetContext = useRunAsync(
    () => plugin.widget.getWidgetContext<WidgetLocation.UnderRemEditor>(),
    [],
  );

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

  const evaluateCodeblock = async () => {
    try {
      evaluate = await eval(text || "");
    } catch (error) {
      console.error(error);
    }
  }

  const clearResult = async () => await console.clear();

  useAPIEventListener(AppEvents.RemChanged, widgetContext?.remId, () => renderText());

  useEffect(() => {
    renderText();
  }, [widgetContext?.remId]);

  return evaluate && "" + evaluate != text?.trim() ? (
    <div className="flex gap-2 ml-6 p-2 text-lg">
      <button onClick={evaluateCodeblock}>
        <PlayButton />
      </button>
      <button onClick={clearResult}>
        <ClearButton />
      </button>
      <div className="ml-6 p-2">{evaluate}</div>
    </div>
  ) : (
    <div className="flex gap-2 ml-6 p-2 text-lg">
      <button onClick={evaluateCodeblock}>
        <PlayButton />
      </button>
      <button onClick={clearResult}>
        <ClearButton />
      </button>
      <div className="ml-6 p-2 w-full"></div>
    </div>
  );
}

renderWidget(RunJS);
