import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const [BULLET_LIST, BULLET_LISTS] = ["bulletlist_power-up", "bulletlists_power-up"];

async function onActivate(plugin: ReactRNPlugin) {
  let NoBulletCSS: string;

  try {
    const response = await fetch("snippet.css");
    const text = await response.text();
    NoBulletCSS = text;
    console.log("No Bullet Editor Mode Installed from local");
  } catch (error) {
    const response = await fetch(
      "https://raw.githubusercontent.com/browneyedsoul/RemNote-NoBulletEditorMode/main/src/snippet.css"
    );
    const text = await response.text();
    NoBulletCSS = text;
    console.log("No Bullet Editor Mode Installed from cdn");
  }

  await plugin.app.registerPowerup("Bulletlist", BULLET_LIST, "A Power-up Block for making a bullet", { slots: [] });
  await plugin.app.registerPowerup("Bulletlists", BULLET_LISTS, "A Power-up Block for making bullets", { slots: [] });

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
    await reactivePlugin.app.registerCSS(
      "padding",
      `
.hierarchy-editor--ltr .TreeNode, .hierarchy-editor--ltr .TreeNode--list {
  padding-left: ${paddingCtrl}px;
}
.node-card-item::before {
  margin-left: -${paddingCtrl}px;
}
      `
    );
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
