import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import { REMTREE_POWERUP, REMTREEC_POWERUP } from "../constant/var";
import { isDev } from "../constant/env";
import { cssURL } from "../api/url";

let TreeCSS: string;

async function onActivate(plugin: ReactRNPlugin) {

  if (isDev) {
    console.warn("RemTree Development Mode");

    const response = await fetch("snippet.css");
    TreeCSS = await response.text();
    console.log("Rem Tree Installed");
    await plugin.app.registerCSS("rem-tree", TreeCSS);
  } else {
    console.warn("RemTree Production Mode");
    try {
      const stored = localStorage.getItem("rem-tree");

      if (stored) {
        await plugin.app.registerCSS("rem-tree", TreeCSS);
        console.log("rem-tree plugin already exists in local storage");
      } else {
        const response = await fetch(cssURL);
        const text = await response.text();
        TreeCSS = text;
        localStorage.setItem("rem-tree", TreeCSS);
        await plugin.app.registerCSS("rem-tree", TreeCSS);
        console.log("TreeCSS plugin installed from cdn");
      }
    } catch (error) {
      console.error(error);
    }
  }

  await plugin.app.registerPowerup({
    name: "Tree",
    code: REMTREE_POWERUP,
    description: "A Power-up Block for decorating texts",
    options: {
      slots: [],
    },
  });
  await plugin.app.registerPowerup({
    name: "Treec",
    code: REMTREEC_POWERUP,
    description: "A Power-up Block for decorating texts with a container line",
    options: {
      slots: [],
    },
  });

  await plugin.app.registerCommand({
    id: "rem-tree",
    name: "Tree",
    quickCode: "tr",
    keyboardShortcut: "opt+shift+t",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      const remTag = (await rem?.getTagRems()) || [];
      const remTagText = remTag[0];
      const remTarget = remTagText?.text;

      switch (remTarget ? remTarget[0] : undefined) {
        case undefined:
          await rem?.addPowerup(REMTREE_POWERUP);
          break;
        case "Tree":
          await rem?.removePowerup(REMTREE_POWERUP);
          await rem?.addPowerup(REMTREEC_POWERUP);
          break;
        case "Treec":
          await rem?.removePowerup(REMTREEC_POWERUP);
          break;
        default:
          await rem?.addPowerup(REMTREE_POWERUP);
          break;
      }
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
