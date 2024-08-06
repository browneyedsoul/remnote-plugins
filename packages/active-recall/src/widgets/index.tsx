import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import { ACTIVE_RECALL } from "../constant/var";
import { ARCSS, ARUNTAGGED } from "../api/url";
import { registerCSS } from "../function/registerCSS";

let ActiveRecall: string;
let ActiveRecallUntagged: string;

async function onActivate(plugin: ReactRNPlugin) {
  await registerCSS("ActiveRecall", ARCSS, ActiveRecall, plugin);
  await registerCSS("ActiveRecallUntagged", ARUNTAGGED, ActiveRecallUntagged, plugin);

  await plugin.app.registerPowerup({
    name: "Active Recall",
    code: ACTIVE_RECALL,
    description: "A Power-up for covering cloze",
    options: {
      slots: [],
    },
  });

  await plugin.app.registerCommand({
    id: "active-recall",
    name: "Active Recall",
    quickCode: "arc",
    keyboardShortcut: "command+shift+a",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(ACTIVE_RECALL);
    },
  });

  await plugin.settings.registerBooleanSetting({
    id: "scope",
    title: "Scope Expander",
    defaultValue: false,
  });

  // TODO: unregisterCSS needed
  await plugin.track(async (reactivePlugin) => {
    let arSetting = await reactivePlugin.settings.getSetting<boolean>("scope");
    arSetting === true
      ? plugin.app.registerCSS("active-recall-untagged", ARUNTAGGED)
      : plugin.app.registerCSS("active-recall", ARCSS);
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
