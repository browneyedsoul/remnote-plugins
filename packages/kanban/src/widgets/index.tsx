import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const KANBAN = "powerup_kanban";

let Kanban: string;

async function onActivate(plugin: ReactRNPlugin) {
  try {
    const response = await fetch("snippet.css");
    const text = await response.text();
    Kanban = text;
    console.log("Kanban plugin installed from local");
    await plugin.app.registerCSS("Kanban", Kanban);
  } catch (error) {
    const response = await fetch("https://raw.githubusercontent.com/browneyedsoul/RemNote-Kanban/main/src/snippet.css");
    const text = await response.text();
    Kanban = text;
    console.log("Kanban plugin installed from cdn");
    await plugin.app.registerCSS("Kanban", Kanban);
  }
  await plugin.app.registerPowerup("Kanban", KANBAN, "A Power-up Rem for making css-kanban", { slots: [] });
  await plugin.app.registerCommand({
    id: "kanban",
    name: "Kanban",
    description: "Add a power Kanban tag to the current focused Rem",
    action: async () => {
      const focusedRem = await plugin.focus.getFocusedRem();
      await focusedRem?.addPowerup(KANBAN);
    },
  });
  await plugin.settings.registerStringSetting({
    id: "colwidth",
    title: "Max Kanban Column Width",
    description: "Simply change the column width (px)",
    defaultValue: "1000",
  });
  plugin.track(async (reactivePlugin) => {
    const colwidthCtrl = await reactivePlugin.settings.getSetting<number>("colwidth");
    await reactivePlugin.app.registerCSS(
      "colwidth",
      `
#tile__document [data-document-tags~=kanban] [data-rem-container-tags~=kanban]>div>.animate-zoom-into-bullet>.tree-node--children, 
#tile__document [data-rem-container-tags~=kanban]>.tree-node--children>.animate-zoom-into-bullet>.tree-node--children {
  max-width: ${colwidthCtrl}px;
}
      `,
    );
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
