import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const REMICON = "remicon_powerup"

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerPowerup({
    name: "Custom Icon",
    code: REMICON,
    description: "A Power-up for storing card icon images",
    options: {
      properties: [
        {
          code: "rem-card-icon",
          name: "Rem Card Icon",
          onlyProgrammaticModifying: true,
          hidden: true,
        },
      ],
    },
  });
  await plugin.app.registerCommand({
    id: "rem-card-icon",
    name: "Custom Icon",
    quickCode: "ci",
    keyboardShortcut: "opt+shift+i",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(REMICON);
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
