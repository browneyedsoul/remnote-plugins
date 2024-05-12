import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

async function onActivate(plugin: ReactRNPlugin) {}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
