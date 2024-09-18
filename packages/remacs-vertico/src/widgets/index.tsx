import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import verticoCSS from "../../src/snippet.module.css";

let REMACS_VERTICO: string;

async function onActivate(plugin: ReactRNPlugin) {
  REMACS_VERTICO = verticoCSS.replace(/^export default "/, "").replace(/\\n";$/, "");

  await plugin.settings.registerBooleanSetting({
    id: "toggle-remacs-vertico",
    title: "Toggle Vertico",
    defaultValue: false,
  });

  await plugin.track(async (reactivePlugin) => {
    const verticoStatus = await reactivePlugin.settings.getSetting<boolean>("toggle-remacs-vertico");
    verticoStatus
      ? await plugin.app.registerCSS("remacs-vertico", "")
      : await plugin.app.registerCSS("remacs-vertico", REMACS_VERTICO);
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
