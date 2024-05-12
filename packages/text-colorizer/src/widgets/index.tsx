import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

let TextColorizerCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
  // const [newRed, newRedDark] = [
  //   `#main span.highlight-color--yellow.bold span.whitespace-pre-wrap {color: red;}`,
  //   `.dark #main span.highlight-color--yellow.bold span.whitespace-pre-wrap {color: red;}`,
  // ];
  const [
    skinnyHLRD,
    skinnyTextRD,
    skinnyHLOR,
    skinnyTextOR,
    skinnyHLYW,
    skinnyTextYW,
    skinnyHLGR,
    skinnyTextGR,
    skinnyHLBL,
    skinnyTextBL,
    skinnyHLVT,
    skinnyTextVT,
    revertHLRD,
    revertTextRD,
    revertHLOR,
    revertTextOR,
    revertHLYW,
    revertTextYW,
    revertHLGR,
    revertTextGR,
    revertHLBL,
    revertTextBL,
    revertHLVT,
    revertTextVT,
  ] = [
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red.bold span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red.bold span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange.bold span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange.bold span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow.bold span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow.bold span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green.bold span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green.bold span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue.bold span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue.bold span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple span.whitespace-pre-wrap {
  font-weight: 400;
}`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple.bold span.linear-editor-item.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple.bold span.linear-editor-item.whitespace-pre-wrap {
  font-weight: 400;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green span.whitespace-pre-wrap{
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple {
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red.bold span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--red.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange.bold span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--orange.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow.bold span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--yellow.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green.bold span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--green.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue.bold span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--blue.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
      `
#main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple.bold span.whitespace-pre-wrap,
.dark #main .rn-editor__rem__body__text:not(.rem-header--1):not(.rem-header--2):not(.rem-header--3) .highlight-color--purple.bold span.whitespace-pre-wrap {
  font-weight: 550;
}
`,
    ];

  try {
    await fetch("snippet.css");
    const response = await fetch("snippet.css");
    TextColorizerCSS = await response.text();
    console.log("Text Colorizer Installed!");
    await plugin.app.registerCSS("text-colorizer", TextColorizerCSS);
  } catch (error) {
    console.error(error);
    const cdnResponse = await fetch(
      "https://raw.githubusercontent.com/browneyedsoul/RemNote-TextColorizer/main/src/snippet.css"
    );
    TextColorizerCSS = await cdnResponse.text();
    console.log("Text Colorizer Installed from cdn");
    await plugin.app.registerCSS("text-colorizer", TextColorizerCSS);
  }
  await plugin.track(async (reactivePlugin) => {
    const rdHLWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-hl-rd");
    rdHLWeight === true
      ? plugin.app.registerCSS("skinny-hl-rd", skinnyHLRD)
      : plugin.app.registerCSS("skinny-hl-rd", revertHLRD);

    const orHLWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-hl-or");
    orHLWeight === true
      ? plugin.app.registerCSS("skinny-hl-or", skinnyHLOR)
      : plugin.app.registerCSS("skinny-hl-or", revertHLOR);

    const ywHLWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-hl-yw");
    ywHLWeight === true
      ? plugin.app.registerCSS("skinny-hl-yw", skinnyHLYW)
      : plugin.app.registerCSS("skinny-hl-yw", revertHLYW);

    const grHLWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-hl-gr");
    grHLWeight === true
      ? plugin.app.registerCSS("skinny-hl-gr", skinnyHLGR)
      : plugin.app.registerCSS("skinny-hl-gr", revertHLGR);

    const blHLWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-hl-bl");
    blHLWeight === true
      ? plugin.app.registerCSS("skinny-hl-bl", skinnyHLBL)
      : plugin.app.registerCSS("skinny-hl-bl", revertHLBL);

    const vtHLWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-hl-vt");
    vtHLWeight === true
      ? plugin.app.registerCSS("skinny-hl-vt", skinnyHLVT)
      : plugin.app.registerCSS("skinny-hl-vt", revertHLVT);
    const rdWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-rd");
    rdWeight === true
      ? plugin.app.registerCSS("skinny-text-rd", skinnyTextRD)
      : plugin.app.registerCSS("skinny-text-rd", revertTextRD);

    const orWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-or");
    orWeight === true
      ? plugin.app.registerCSS("skinny-text-or", skinnyTextOR)
      : plugin.app.registerCSS("skinny-text-or", revertTextOR);

    const ywWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-yw");
    ywWeight === true
      ? plugin.app.registerCSS("skinny-text-yw", skinnyTextYW)
      : plugin.app.registerCSS("skinny-text-yw", revertTextYW);

    const grWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-gr");
    grWeight === true
      ? plugin.app.registerCSS("skinny-text-gr", skinnyTextGR)
      : plugin.app.registerCSS("skinny-text-gr", revertTextGR);

    const blWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-bl");
    blWeight === true
      ? plugin.app.registerCSS("skinny-text-bl", skinnyTextBL)
      : plugin.app.registerCSS("skinny-text-bl", revertTextBL);

    const vtWeight = await reactivePlugin.settings.getSetting<boolean>("dieting-vt");
    vtWeight === true
      ? plugin.app.registerCSS("skinny-text-vt", skinnyTextVT)
      : plugin.app.registerCSS("skinny-text-vt", revertTextVT);
  });
  
  await plugin.settings.registerStringSetting({
    id: "red-text",
    title: "Red Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "orange-text",
    title: "Orange Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "yellow-text",
    title: "Yellow Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "green-text",
    title: "Green Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "blue-text",
    title: "Blue Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "purple-text",
    title: "Purple Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "red-text-dark",
    title: "Red Dark Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "orange-text-dark",
    title: "Orange Dark Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "yellow-text-dark",
    title: "Yellow Dark Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "green-text-dark",
    title: "Green Dark Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "blue-text-dark",
    title: "Blue Dark Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerStringSetting({
    id: "purple-text-dark",
    title: "Purple Dark Text HEX color",
    defaultValue: "#",
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-hl-rd",
    title: "Reduce font weight in Red Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-hl-or",
    title: "Reduce font weight in Orange Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-hl-yw",
    title: "Reduce font weight in Yellow Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-hl-gr",
    title: "Reduce font weight in Green Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-hl-bl",
    title: "Reduce font weight in Blue Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-hl-vt",
    title: "Reduce font weight in Purple Highlight",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-rd",
    title: "Reduce font weight in Red Text",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-or",
    title: "Reduce font weight in Orange Text",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-yw",
    title: "Reduce font weight in Yellow Text",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-gr",
    title: "Reduce font weight in Green Text",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-bl",
    title: "Reduce font weight in Blue Text",
    defaultValue: false,
  });
  await plugin.settings.registerBooleanSetting({
    id: "dieting-vt",
    title: "Reduce font weight in Purple Text",
    defaultValue: false,
  });
  await plugin.track(async (reactivePlugin) => {
    const redText = await reactivePlugin.settings.getSetting<string>("red-text");
    plugin.app.registerCSS(`
      #main span.highlight-color--yellow.bold span.whitespace-pre-wrap {color: ;}
    `, redText)
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
