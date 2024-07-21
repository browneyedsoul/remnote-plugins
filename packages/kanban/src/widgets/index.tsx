import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import { KANBAN } from "../constant/var";
import { cssURL } from "../api/url";

let Kanban: string;

async function onActivate(plugin: ReactRNPlugin) {
  try {
    const stored = localStorage.getItem("Kanban");

    if (stored) {
      await plugin.app.registerCSS("Kanban", Kanban);
      console.log("Kanban plugin already exists in local storage");
    } else {
      const response = await fetch(cssURL);
      const text = await response.text();
      Kanban = text;
      localStorage.setItem("Kanban", text);
      await plugin.app.registerCSS("Kanban", Kanban);
      console.log("Kanban plugin installed from cdn");
    }
  } catch (error) {
    console.error(error);
  }

  await plugin.app.registerPowerup({
    name: "Kanban",
    code: KANBAN,
    description: "A Power-up Rem to make a kanban",
    options: {
      slots: [],
    },
  });

  await plugin.app.registerCommand({
    id: "kanban",
    name: "Kanban",
    quickCode: "kb",
    keyboardShortcut: "command+shift+k",
    description: "Add a power Kanban tag to the current focused Rem",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      const remTag = (await rem?.getTagRems()) || [];
      const remTagText = remTag[0];
      const remTarget = remTagText?.text;

      switch (remTarget ? remTarget[0] : undefined) {
        case undefined:
          await rem?.addPowerup(KANBAN);
          break;
        case "Kanban":
          await rem?.removePowerup(KANBAN);
          break;
        default:
          await rem?.addPowerup(KANBAN);
          break;
      }
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
      `
    );
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
