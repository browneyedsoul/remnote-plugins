import { ReactRNPlugin } from "@remnote/plugin-sdk";

export const registerCSS = async (key: string, url: string, cssVar: string, plugin: ReactRNPlugin) => {
  const storedValue = localStorage.getItem(key);
  if (storedValue) {
    await plugin.app.registerCSS(key, storedValue);
  } else {
    const response = await fetch(url);
    const text = await response.text();
    cssVar = text;
    localStorage.setItem(key, text);
    await plugin.app.registerCSS(key, text);
  }
};