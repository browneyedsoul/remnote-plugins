import { declareIndexPlugin, WidgetLocation, RichTextInterface, ReactRNPlugin } from "@remnote/plugin-sdk";
import { runCSS } from "../components/style";
import { RUNJS } from "../constants/var";
import { RunJSBlock } from "../components/runjsBlock";
import "@/global.css";

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerPowerup({
    name: "Run JS",
    code: RUNJS,
    description: "A Code block power-up for JS Evaluation",
    options: {
      slots: [],
    },
  });

  async function registerRunJS() {
    await plugin.app.registerWidget("run_js", WidgetLocation.UnderRemEditor, {
      dimensions: { height: "auto", width: "100%" },
      powerupFilter: RUNJS,
    });
  }

  await plugin.app.registerCommand({
    id: "run_js",
    name: "RunJS - Turn Focused Codeblock into RunJS",
    quickCode: "js",
    keyboardShortcut: "opt+shift+c",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();

      const jsTagged = await rem?.hasPowerup(RUNJS);

      if (rem && rem.children?.length === 2) {
        console.warn(rem);
        const isRem = rem?.text;

        if (isRem === undefined && jsTagged === false) {
          await rem.addPowerup(RUNJS);
          await rem.setText(RunJSBlock);
          await registerRunJS();
        } else if (jsTagged === true) {
          await rem.removePowerup(RUNJS);
          await plugin.app.unregisterWidget("run_js", WidgetLocation.UnderRemEditor);
        } else {
          await rem.addPowerup(RUNJS);
          await registerRunJS();
        }
      } else if (rem && rem.children?.length === 0) {
        await rem.setIsCode(true);
        await rem.addPowerup(RUNJS);
        await registerRunJS();
      }
      console.log(rem);
    },
  });
  await plugin.app.registerCommand({
    id: "run_js_console_run",
    name: "RunJS - Execute JS Code",
    quickCode: "jsr",
    keyboardShortcut: "opt+shift+e",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      console.log(rem?._id);
    },
  });
  await plugin.app.registerCommand({
    id: "run_js_console_clear",
    name: "RunJS - Console Clear",
    quickCode: "jsc",
    keyboardShortcut: "opt+shift+w",
    action: async () => {
      console.clear();
    },
  });

  await plugin.app.registerCSS("runCSS", runCSS);
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
