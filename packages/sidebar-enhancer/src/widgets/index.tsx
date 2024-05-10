import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

let SidebarCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
	try {
    const response = await fetch("snippet.css");
    const text = await response.text();
    SidebarCSS = text;
    console.log("Sidebar Enhancer Installed from local");
    await plugin.app.registerCSS("SidebarCSS", SidebarCSS);
  } catch (error) {
    const response = await fetch("https://cdn.jsdelivr.net/gh/browneyedsoul/RemNote-Sidebar-Enhancer@main/src/snippet.css");
    const text = await response.text();
    SidebarCSS = text;
    console.log("Sidebar Enhancer Installed from cdn");
    await plugin.app.registerCSS("SidebarCSS", SidebarCSS);
  }

  await plugin.settings.registerStringSetting({
    id: "fontsize",
    title: "Sidebar Item Font Size",
    description: "You can customize font size of the items (ex. 0.8, 0.95, 1.25 ... )",
    defaultValue: "1",
  });
  plugin.track(async (reactivePlugin) => {
    const sizeCtrl = await reactivePlugin.settings.getSetting<number>("fontsize");
    await reactivePlugin.app.registerCSS(
      "fontsize",
      `
      [data-type~=document_list_item] .rounded-md {font-size: ${sizeCtrl}rem;}
      `
    );
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
