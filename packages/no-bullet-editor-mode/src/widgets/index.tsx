import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import { BULLET_LIST, BULLET_LISTS } from "../constant/var";
import { cssURL } from "../api/url";
import { customStyle } from "../scss/custom";

let NoBulletCSS: string;

async function onActivate(plugin: ReactRNPlugin) {

  try {
    const stored = localStorage.getItem("noBullet");

    if (stored) {
      await plugin.app.registerCSS("noBullet", NoBulletCSS);
      console.log("noBullet plugin already exists in local storage");
    } else {
      const response = await fetch(cssURL);
      const text = await response.text();
      NoBulletCSS = text;
      localStorage.setItem("noBullet", NoBulletCSS);
      await plugin.app.registerCSS("noBullet", NoBulletCSS);
      console.log("noBullet plugin installed from cdn");
    }
  } catch (error) {
    console.error(error);
  }

  await plugin.app.registerPowerup({
    name: "Bulletlist",
    code: BULLET_LIST,
    description: "A Power-up Block for making bullet",
    options: {
      slots: [],
    },
  });
  await plugin.app.registerPowerup({
    name: "Bulletlists",
    code: BULLET_LISTS,
    description: "A Power-up Block for making bullets",
    options: {
      slots: [],
    },
  });

  await plugin.app.registerCommand({
    id: "bulletlist",
    name: "Bulletlist",
    quickCode: "bl",
    keyboardShortcut: "cmd+opt+b",
    description: "Make a bullet",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(BULLET_LIST);
    },
  });
  await plugin.app.registerCommand({
    id: "bulletlists",
    name: "Bulletlists",
    quickCode: "bls",
    keyboardShortcut: "cmd+opt+ctrl+b",
    description: "Make bullets",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(BULLET_LISTS);
    },
  });
  await plugin.settings.registerStringSetting({
    id: "padding",
    title: "Space between tree nodes",
    description: "Simply change the indent width (px)",
    defaultValue: "0",
  });
  plugin.track(async (reactivePlugin) => {
    const paddingCtrl = await reactivePlugin.settings.getSetting<number>("padding");
    await reactivePlugin.app.registerCSS("padding", customStyle(paddingCtrl));
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
