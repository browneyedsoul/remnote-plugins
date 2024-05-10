import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const REMICON = "remicon_powerup"

async function onActivate(plugin: ReactRNPlugin) {
	await plugin.app.registerPowerup("Custom Icon", REMICON, "A power-up for storing icon images", { slots: [] })
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
