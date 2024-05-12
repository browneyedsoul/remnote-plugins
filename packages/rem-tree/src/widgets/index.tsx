import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const [REMTREE_POWERUP, REMTREEC_POWERUP] = ["remtree_powerup", "remtreec_powerup"];

async function onActivate(plugin: ReactRNPlugin) {
  let TreeCSS: string;

  try {
    const response = await fetch("snippet.css");
    TreeCSS = await response.text();
    console.log("Rem Tree Installed");
    await plugin.app.registerCSS("rem-tree", TreeCSS);
  } catch (error) {
    console.error(error);
    const cdnResponse = await fetch(
      "https://raw.githubusercontent.com/browneyedsoul/remnote-plugins/main/packages/rem-tree/src/snippet.css"
    );
    TreeCSS = await cdnResponse.text();
    console.log("Rem Tree Installed from cdn");
    await plugin.app.registerCSS("rem-tree", TreeCSS);
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
