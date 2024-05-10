import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

/**
 * Simple example snippet plugin which shows how to:
 * - Register style settings
 * - Register Custom CSS
 * - Register a command
 *
 * How to Use:
 * - Tag a Rem with ##Plugin Style, or use the /Add Plugin Style command on a Rem
 * - The Rem will be styled with the CSS defined in the plugin
 */
async function onActivate(plugin: ReactRNPlugin) {}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
