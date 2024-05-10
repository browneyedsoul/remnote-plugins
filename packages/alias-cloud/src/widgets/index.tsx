import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

async function onActivate(plugin: ReactRNPlugin) {
  let CloudCSS: string;
  
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/browneyedsoul/RemNote-AliasCloud/main/src/snippet.css"
    );
    CloudCSS = await response.text();
    console.log("Alias Cloud from cdn!");
    await plugin.app.registerCSS("alias-cloud-cdn", CloudCSS);
  } catch (error) {
    console.error(error);
  }
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
