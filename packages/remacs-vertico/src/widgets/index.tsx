import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

let REMACS_VERTICO: string;

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.settings.registerBooleanSetting({
    id: "toggle-remacs-vertico",
    title: "Deactivate Vertico",
    defaultValue: false,
  });

  await plugin.track(async (reactivePlugin) => {
    let verticoStatus = await reactivePlugin.settings.getSetting<boolean>("toggle-remacs-vertico");
    verticoStatus === true ?? plugin.app.registerCSS("remacs-vertico", REMACS_VERTICO);
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
