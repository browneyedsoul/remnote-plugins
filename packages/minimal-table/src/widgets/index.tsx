import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import { TABLE, WIDTH, createTableItem } from "../contents/preset";
import { rulerStyle } from "../contents/style";

let TableCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
  try {
    const response = await fetch("snippet.css");
    console.warn(response);
    const text = await response.text();
    TableCSS = text;
    await plugin.app.registerCSS("tableCSS", TableCSS);
    console.warn("Table Installed from local");
  } catch (error) {
    const response = await fetch(
      "https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/src/snippet.css"
    );
    const text = await response.text();
    TableCSS = text;
    await plugin.app.registerCSS("tableCSS", TableCSS);
    console.log("Table Installed from cdn");
  }
  await plugin.settings.registerStringSetting({
    id: "opacity",
    title: "Ruler Opacity",
    description: "Opacity of the Ruler for measuring left column width",
    defaultValue: "0.15",
  });
  plugin.track(async (reactivePlugin) => {
    const opacityCtrl = await reactivePlugin.settings.getSetting<number>("opacity");
    await reactivePlugin.app.registerCSS("opacity", rulerStyle(opacityCtrl));
  });

  await plugin.app.registerPowerup({
    name: "Table",
    code: TABLE,
    description: "Attribute Column Width",
    options: {
      slots: [
        createTableItem("TH", "tableheader", false, false),
        createTableItem("Table90", "table90", false, false),
        createTableItem("Table120", "table120", false, false),
        createTableItem("Table150", "table150", false, false),
        createTableItem("Table180", "table180", false, false),
        createTableItem("Table210", "table210", false, false),
        createTableItem("Table240", "table240", false, false),
        createTableItem("Table270", "table270", false, false),
        createTableItem("Table300", "table300", false, false),
        createTableItem("Table330", "table330", false, false),
        createTableItem("Table360", "table360", false, false),
        createTableItem("Table390", "table390", false, false),
        createTableItem("Table420", "table420", false, false),
        createTableItem("Table450", "table450", false, false),
        createTableItem("Table480", "table480", false, false),
        createTableItem("Table510", "table510", false, false),
        createTableItem("Table540", "table540", false, false),
        createTableItem("Table570", "table570", false, false),
        createTableItem("Table600", "table600", false, false),
      ],
    },
  });
  await plugin.app.registerPowerup({
    name: "Width",
    code: WIDTH,
    description: "Column Width",
    options: {
      slots: [
        createTableItem("W100", "w100", false, false),
        createTableItem("W200", "w200", false, false),
        createTableItem("W300", "w300", false, false),
        createTableItem("W400", "w400", false, false),
        createTableItem("W500", "w500", false, false),
        createTableItem("W600", "w600", false, false),
        createTableItem("W700", "w700", false, false),
        createTableItem("W800", "w800", false, false),
        createTableItem("W900", "w900", false, false),
        createTableItem("W1000", "w1000", false, false),
        createTableItem("C1W100", "c1w100", false, false),
        createTableItem("C2W100", "c2w100", false, false),
        createTableItem("C3W100", "c3w100", false, false),
        createTableItem("C4W100", "c4w100", false, false),
        createTableItem("C5W100", "c5w100", false, false),
        createTableItem("C6W100", "c6w100", false, false),
        createTableItem("C7W100", "c7w100", false, false),
        createTableItem("C8W100", "c8w100", false, false),
        createTableItem("C9W100", "c9w100", false, false),
        createTableItem("C1W200", "c1w200", false, false),
        createTableItem("C2W200", "c2w200", false, false),
        createTableItem("C3W200", "c3w200", false, false),
        createTableItem("C4W200", "c4w200", false, false),
        createTableItem("C5W200", "c5w200", false, false),
        createTableItem("C6W200", "c6w200", false, false),
        createTableItem("C7W200", "c7w200", false, false),
        createTableItem("C8W200", "c8w200", false, false),
        createTableItem("C9W200", "c9w200", false, false),
        createTableItem("C1W300", "c1w300", false, false),
        createTableItem("C2W300", "c2w300", false, false),
        createTableItem("C3W300", "c3w300", false, false),
        createTableItem("C4W300", "c4w300", false, false),
        createTableItem("C5W300", "c5w300", false, false),
        createTableItem("C6W300", "c6w300", false, false),
        createTableItem("C7W300", "c7w300", false, false),
        createTableItem("C8W300", "c8w300", false, false),
        createTableItem("C9W300", "c9w300", false, false),
        createTableItem("C1W400", "c1w400", false, false),
        createTableItem("C2W400", "c2w400", false, false),
        createTableItem("C3W400", "c3w400", false, false),
        createTableItem("C4W400", "c4w400", false, false),
        createTableItem("C5W400", "c5w400", false, false),
        createTableItem("C6W400", "c6w400", false, false),
        createTableItem("C7W400", "c7w400", false, false),
        createTableItem("C8W400", "c8w400", false, false),
        createTableItem("C9W400", "c9w400", false, false),
        createTableItem("C1W500", "c1w500", false, false),
        createTableItem("C2W500", "c2w500", false, false),
        createTableItem("C3W500", "c3w500", false, false),
        createTableItem("C4W500", "c4w500", false, false),
        createTableItem("C5W500", "c5w500", false, false),
        createTableItem("C6W500", "c6w500", false, false),
        createTableItem("C7W500", "c7w500", false, false),
        createTableItem("C8W500", "c8w500", false, false),
        createTableItem("C9W500", "c9w500", false, false),
        createTableItem("C1W600", "c1w600", false, false),
        createTableItem("C2W600", "c2w600", false, false),
        createTableItem("C3W600", "c3w600", false, false),
        createTableItem("C4W600", "c4w600", false, false),
        createTableItem("C5W600", "c5w600", false, false),
        createTableItem("C6W600", "c6w600", false, false),
        createTableItem("C7W600", "c7w600", false, false),
        createTableItem("C8W600", "c8w600", false, false),
        createTableItem("C9W600", "c9w600", false, false),
        createTableItem("C1W700", "c1w700", false, false),
        createTableItem("C2W700", "c2w700", false, false),
        createTableItem("C3W700", "c3w700", false, false),
        createTableItem("C4W700", "c4w700", false, false),
        createTableItem("C5W700", "c5w700", false, false),
        createTableItem("C6W700", "c6w700", false, false),
        createTableItem("C7W700", "c7w700", false, false),
        createTableItem("C8W700", "c8w700", false, false),
        createTableItem("C9W700", "c9w700", false, false),
        createTableItem("C1W800", "c1w800", false, false),
        createTableItem("C2W800", "c2w800", false, false),
        createTableItem("C3W800", "c3w800", false, false),
        createTableItem("C4W800", "c4w800", false, false),
        createTableItem("C5W800", "c5w800", false, false),
        createTableItem("C6W800", "c6w800", false, false),
        createTableItem("C7W800", "c7w800", false, false),
        createTableItem("C8W800", "c8w800", false, false),
        createTableItem("C9W800", "c9w800", false, false),
        createTableItem("C1W900", "c1w900", false, false),
        createTableItem("C2W900", "c2w900", false, false),
        createTableItem("C3W900", "c3w900", false, false),
        createTableItem("C4W900", "c4w900", false, false),
        createTableItem("C5W900", "c5w900", false, false),
        createTableItem("C6W900", "c6w900", false, false),
        createTableItem("C7W900", "c7w900", false, false),
        createTableItem("C8W900", "c8w900", false, false),
        createTableItem("C9W900", "c9w900", false, false),
      ],
    },
  });

  const TB90: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table90");
  const TB120: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table120");
  const TB150: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table150");
  const TB180: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table180");
  const TB210: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table210");
  const TB240: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table240");
  const TB270: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table270");
  const TB300: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table300");
  const TB330: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table330");
  const TB360: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table360");
  const TB390: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table390");
  const TB420: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table420");
  const TB450: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table450");
  const TB480: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table480");
  const TB510: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table510");
  const TB540: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table540");
  const TB570: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table570");
  const TB600: TableWidth = await plugin.powerup.getPowerupSlotByCode(TABLE, "table600");

  const tagMappings = [
    { checkPlus: "Table90", plusTag: TB120 },
    { checkPlus: "Table120", plusTag: TB150 },
    { checkPlus: "Table150", plusTag: TB180 },
    { checkPlus: "Table180", plusTag: TB210 },
    { checkPlus: "Table210", plusTag: TB240 },
    { checkPlus: "Table240", plusTag: TB270 },
    { checkPlus: "Table270", plusTag: TB300 },
    { checkPlus: "Table300", plusTag: TB330 },
    { checkPlus: "Table330", plusTag: TB360 },
    { checkPlus: "Table360", plusTag: TB390 },
    { checkPlus: "Table390", plusTag: TB420 },
    { checkPlus: "Table420", plusTag: TB450 },
    { checkPlus: "Table450", plusTag: TB480 },
    { checkPlus: "Table480", plusTag: TB510 },
    { checkPlus: "Table510", plusTag: TB540 },
    { checkPlus: "Table540", plusTag: TB570 },
    { checkPlus: "Table570", plusTag: TB600 },
    { checkMinus: "Table600", minusTag: TB570 },
    { checkMinus: "Table570", minusTag: TB540 },
    { checkMinus: "Table540", minusTag: TB510 },
    { checkMinus: "Table510", minusTag: TB480 },
    { checkMinus: "Table480", minusTag: TB450 },
    { checkMinus: "Table450", minusTag: TB420 },
    { checkMinus: "Table420", minusTag: TB390 },
    { checkMinus: "Table390", minusTag: TB360 },
    { checkMinus: "Table360", minusTag: TB330 },
    { checkMinus: "Table330", minusTag: TB300 },
    { checkMinus: "Table300", minusTag: TB270 },
    { checkMinus: "Table270", minusTag: TB240 },
    { checkMinus: "Table240", minusTag: TB210 },
    { checkMinus: "Table210", minusTag: TB180 },
    { checkMinus: "Table180", minusTag: TB150 },
    { checkMinus: "Table150", minusTag: TB120 },
    { checkMinus: "Table120", minusTag: TB90 },
  ];

  await plugin.app.registerCommand({
    id: "table",
    name: "Create Minimal Table",
    quickCode: "tb",
    keyboardShortcut: "cmd+shift+t",
    description: "All the presets for table left cell customization",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addTag(TB150);
    },
  });

  await plugin.app.registerCommand({
    id: "table-header",
    name: "Minimal Table Header",
    quickCode: "tbh",
    keyboardShortcut: "cmd+shift+h",
    description: "All the presets for table left cell customization",
    action: async () => {
      const TBH: TableHeader = await plugin.powerup.getPowerupSlotByCode(TABLE, "tableheader");
      const TBHID = await TBH._id;

      const rem = await plugin.focus.getFocusedRem();
      const remTagged = await rem?.getTagRems();
      const tagID = await remTagged?.filter((e) => e._id === TBHID);

      if (tagID?.length === 1) {
        await rem?.removeTag(TBHID, true);
      } else {
        await rem?.addTag(TBH);
      }
    },
  });

  // await plugin.app.registerCommand({
  //   id: 'table-list',
  //   name: 'Minimal Table Left Width List',
  //   quickCode: 'tbl',
  //   description: 'All the presets for table left cell customization',
  //   action: async () => {
  //     const rem = await plugin.powerup.getPowerupByCode(TABLE);
  //     await rem?.openRemInContext();
  //   },
  // });
  // await plugin.app.registerCommand({
  //   id: 'width-list',
  //   name: 'Minimal Table Global Width List',
  //   quickCode: 'tbg',
  //   description: 'A Simple Table',
  //   action: async () => {
  //     const rem = await plugin.powerup.getPowerupByCode(WIDTH);
  //     await rem?.openRemInContext();
  //   },
  // });

  // TODO - width config with shortcuts
  // await plugin.app.registerCommand({
  //   id: 'test',
  //   name: 'Test',
  //   description: 'A Simple Test',
  //   keyboardShortcut: 'opt+shift+t',
  //   action: async () => {
  //     const rem = await plugin.powerup.getPowerupByCode(WIDTH);
  //     console.log(TABLE);
  //   },
  // });

  const rmvTag = async () => {
    const rem = await plugin.focus.getFocusedRem();
    const remForTagging = (await rem?.getTagRems()) ?? [];
    const filteredArray = await remForTagging.filter((item) => item.parent);
    const tagID: string = await filteredArray[0]?._id;
    await rem?.removeTag(tagID, true);
  };

  await plugin.app.registerCommand({
    id: "table-plus",
    name: "Table - increase property column width",
    quickCode: "tbi",
    keyboardShortcut: "command+shift+=",
    description: "Table starting from 90px to 600px",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      const tableTag = (await rem?.getTagRems()) ?? [];
      const filteredArray = await tableTag.filter((item) => item.parent);
      const judgeTag = await filteredArray[0]?.text?.toString();
      if (judgeTag) {
        for (const { checkPlus, plusTag } of tagMappings) {
          if (checkPlus)
            if (judgeTag.includes(checkPlus)) {
              await rmvTag();
              await rem?.addTag(plusTag);
              break;
            }
        }
      }
    },
  });
  await plugin.app.registerCommand({
    id: "table-minus",
    name: "Table - decrease property column width",
    quickCode: "tbd",
    keyboardShortcut: "command+shift+-",
    description: "Table starting from 600px to 90px",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      const tableTag = (await rem?.getTagRems()) ?? [];
      const filteredArray = await tableTag.filter((item) => item.parent);
      const judgeTag = await filteredArray[0]?.text?.toString();
      if (judgeTag) {
        for (const { checkMinus, minusTag } of tagMappings) {
          if (checkMinus)
            if (judgeTag.includes(checkMinus)) {
              await rmvTag();
              await rem?.addTag(minusTag);
              break;
            }
        }
      }
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
