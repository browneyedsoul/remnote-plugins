import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import { cssURL } from "../api/url";

let SidebarCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
  try {
    const stored = localStorage.getItem("SidebarCSS");

    if (stored) {
      await plugin.app.registerCSS("SidebarCSS", SidebarCSS);
      console.log("SidebarCSS plugin already exists in local storage");
    } else {
      const response = await fetch(cssURL);
      const text = await response.text();
      SidebarCSS = text;
      localStorage.setItem("SidebarCSS", text);
      await plugin.app.registerCSS("SidebarCSS", SidebarCSS);
      console.log("SidebarCSS plugin installed from cdn");
    }
  } catch (error) {
    console.error(error);
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
