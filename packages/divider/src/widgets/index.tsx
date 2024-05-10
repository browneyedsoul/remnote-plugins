import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const DIVIDER = "divider";

let DividerCSS: string;
let DividerText = `---`;

async function onActivate(plugin: ReactRNPlugin) {
  try {
    const response = await fetch("snippet.css");
    const text = await response.text();
    DividerCSS = text;
    console.log("Divider Installed from local");
  } catch (error) {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/browneyedsoul/RemNote-Divider/main/src/snippet.css"
      );
      const text = await response.text();
      DividerCSS = text;
      console.log("Divider Installed from CDN");
    } catch (error) {
      console.error(error);
    }
  }


  await plugin.settings.registerStringSetting({
    id: "height",
    title: "Line Height (px)",
    description: "Height of the Divider Area",
    defaultValue: "7",
  });
  plugin.track(async (reactivePlugin) => {
    const height = await reactivePlugin.settings.getSetting<string>("height");
    const heightAsNumber = await Number.parseInt(height);
    await reactivePlugin.app.registerCSS(
      "height",
      `
      #hierarchy-editor .rem[data-rem-tags~="divider"] {
        min-height: ${heightAsNumber}px;
      }
      `
    );
  });
  await plugin.app.registerPowerup("Divider", DIVIDER, "Rem Containing Horizontal Line", { slots: [] });

  // TODO 
  await plugin.app.registerCallback("delete with keystroke", () => {

  });

  async function mkdiv() {
    const rem = await plugin.focus.getFocusedRem();

    if (await rem?.hasPowerup(DIVIDER) === true) {
      rem?.removePowerup(DIVIDER);
      await plugin.editor.moveCaret(99, 6);
      await plugin.editor.deleteCharacters(99, -1);
    } else {
      rem?.addPowerup(DIVIDER);
      await plugin.editor.moveCaret(99, 6);
      await plugin.editor.deleteCharacters(99, -1);
      await plugin.editor.insertPlainText(DividerText);
    }
  }

  await plugin.app.registerCommand({
    id: "divider",
    name: "Divider",
    quickCode: "dv",
    keyboardShortcut: "ctrl+shift+d",
    action: async () => {
      await mkdiv();
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);