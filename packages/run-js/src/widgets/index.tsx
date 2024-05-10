import {
  declareIndexPlugin,
  WidgetLocation,
  RichTextInterface,
  ReactRNPlugin,
} from "@remnote/plugin-sdk";
import "../style.css";
import "../App.css";
import { runCSS } from "./components/style";

export const RUNJS = "runjs_powerup";

const RunJSBlock: RichTextInterface = [
  {
    text: ".".trim(),
    i: "m",
    code: true,
    language: "javascript",
  },
];

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerPowerup("Run JS", RUNJS, "A Code block power-up for JS Evaluation", {
    slots: [],
  });
  
  async function registerRunJS() {
    await plugin.app.registerWidget("run_js", WidgetLocation.UnderRemEditor, {
      dimensions: { height: "auto", width: "100%" },
      powerupFilter: RUNJS,
    });
  }

  await plugin.app.registerCommand({
    id: "run_js",
    name: "Turn Focused Codeblock into RunJS",
    quickCode: "js",
    keyboardShortcut: "opt+shift+c",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();

      const jsTagged = await rem?.hasPowerup(RUNJS);
      // const isCodeBlock = await rem?.isCode();
      const isRem = rem?.text[0];

      if (isRem === undefined && jsTagged === false) {
        await rem?.addPowerup(RUNJS);
        await rem?.setText(RunJSBlock);
        await registerRunJS();
        await plugin.editor.insertPlainText(" ");
        await plugin.editor.moveCaret(1, 1);
        await plugin.editor.deleteCharacters(1, -1);
        await plugin.editor.moveCaret(-1, 1);
      } else if (jsTagged === true) {
        await rem?.removePowerup(RUNJS);
        await plugin.app.unregisterWidget("run_js", WidgetLocation.UnderRemEditor);
      } else {
        await rem?.addPowerup(RUNJS);
        await registerRunJS();
      }
    },
  });
  await plugin.app.registerCommand({
    id: "run_js_console_clear",
    name: "Console Clear",
    quickCode: "jsc",
    keyboardShortcut: "opt+shift+w",
    action: async () => {
      console.clear();
    },
  });
  
  await plugin.app.registerCSS('runCSS', runCSS);
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
