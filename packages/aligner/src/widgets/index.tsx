import {declareIndexPlugin, ReactRNPlugin} from "@remnote/plugin-sdk";

export const [CENTER, LEFT, RIGHT] = ["center_powerup", "left_powerup", "right_powerup"];

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerPowerup("Center", CENTER, "A Power-up Block for aligning inline item", {slots: []});
  await plugin.app.registerPowerup("Right", RIGHT, "A Power-up Block for aligning inline item", {slots: []});
  await plugin.app.registerPowerup("Left", LEFT, "A Power-up Block for aligning inline item", {slots: []});

  await plugin.app.registerCommand({
    id: "center",
    name: "Center",
    quickCode: "ctr",
    description: "Align items per command",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();

      if (rem?.hasPowerup) {
        rem?.removePowerup(RIGHT);
        await rem?.addPowerup(CENTER);
      } else {
        await rem?.addPowerup(CENTER);
      }
    },
  });
  await plugin.app.registerCommand({
    id: "left",
    name: "Left",
    quickCode: 'lt',
    description: "Align items per command",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();

      if (rem?.hasPowerup) {
        rem?.removePowerup(CENTER);
        rem?.removePowerup(RIGHT);
        rem?.removePowerup(LEFT);
      } else {
        return;
      }
    },
  });
  await plugin.app.registerCommand({
    id: "right",
    name: "Right",
    quickCode: "rt",
    description: "Align items per command",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();

      if (rem?.hasPowerup) {
        rem?.removePowerup(CENTER);
        await rem?.addPowerup(RIGHT);
      } else {
        await rem?.addPowerup(RIGHT);
      }
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
