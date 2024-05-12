import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import { fetchCSS } from "../function/fetchCSS";
import  { ACTIVE_RECALL, ARCSS, ARTAGGED, setARCSS, setARTAGGED } from "../constant/var";

async function onActivate(plugin: ReactRNPlugin) {
  await setARCSS(
    await fetchCSS(
      "snippet.css",
      "https://github.com/browneyedsoul/remnote-plugins/blob/main/packages/active-recall/src/snippet.css"
    )
  );
  await setARTAGGED(
    await fetchCSS(
      "untag.css",
      "https://raw.githubusercontent.com/browneyedsoul/RemNote-ActiveRecall/main/src/untag.css"
    )
  );

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
      ? plugin.app.registerCSS("active-recall-untagged", ARTAGGED)
      : plugin.app.registerCSS("active-recall-untagged", ARCSS);
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
