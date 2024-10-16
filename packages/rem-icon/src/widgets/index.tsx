import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const [CUSTOM_ICON, IconTag] = ["custom-icon_powerup", "75px"];

export const sizeFixer = "Custom Icon";

const sizeFix = `
  [data-rem-container-tags~="75px"],
  [data-document-tags~="75px"] [data-rem-container-tags*="table"] {
    overflow: hidden;
  }
  [data-rem-container-tags~="75px"] .inline-block {
    width: fit-content;
  }
  [data-rem-container-tags~="75px"] .inline-block .inline-block.align-text-top {
    width: 75px !important;
    max-height: unset !important;
    min-height: unset !important;
    max-width: unset !important;
    min-width: unset !important;
    height: auto !important;
  }
`;

const New = `[data-document-tags*="table"] div.group.inline-block.align-text-top {
  max-width: 3rem !important;
  max-height: 3rem !important;
}`;

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerPowerup({
    name: "Custom Icon",
    code: CUSTOM_ICON,
    description: "A Power-up Rem for saving rem icons",
    options: {
      slots: [
        {
          name: "sizeFixer",
          code: "size-fixer",
          hidden: true,
          onlyProgrammaticModifying: false,
        },
      ],
    },
  });

  // async function add(IconTag: string) {
  //   const docTitle = await plugin.powerup.getPowerupByCode(CUSTOM_ICON);
  //   await docTitle?.addTag(IconTag);
  // }

  // if (iconTitle == "Custom Icon") {
  //   await plugin.app.registerCSS("sizeFix", sizeFix);
  //   const title = await plugin.window.getOpenPaneRemIds();
  // } else {
  //   return;
  // }
  // const AA = await plugin.rem.findOne("dCweTM5r4UecrpV8S");

  // console.log(AA);

  // await AA?.addTag("75px");

  await plugin.app.registerCommand({
    id: "rem-icon",
    name: "Custom Icon",
    quickCode: "icon",
    keyboardShortcut: "opt+shift+i",
    action: async () => {
      const remIcon = await plugin.powerup.getPowerupByCode(CUSTOM_ICON);
      await remIcon?.addTag(IconTag);
      await remIcon?.openRemAsPage();

      await plugin.app.registerCSS("New", New);
      try {
        // await plugin.app.registerCSS("")
      } catch (error) {
        console.log("Minimal Table is not installed");
      }
      // const iconTitle = await remIcon?.text[0];
      console.log(CUSTOM_ICON);
      console.log(IconTag);
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
