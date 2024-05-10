import { declareIndexPlugin, ReactRNPlugin } from '@remnote/plugin-sdk';

export const [REMTREE_POWERUP, REMTREEC_POWERUP] = [
  'remtree_powerup',
  'remtreec_powerup',
];

async function onActivate(plugin: ReactRNPlugin) {
  let TreeCSS: string;

  try {
    const response = await fetch('snippet.css');
    TreeCSS = await response.text();
    console.log('Rem Tree Installed');
    await plugin.app.registerCSS('rem-tree', TreeCSS);
  } catch (error) {
    console.error(error);
    const cdnResponse = await fetch(
      'https://raw.githubusercontent.com/browneyedsoul/RemNote-RemTree/main/src/snippet.css'
    );
    TreeCSS = await cdnResponse.text();
    console.log('Rem Tree Installed from cdn');
    await plugin.app.registerCSS('rem-tree', TreeCSS);
  }

  await plugin.app.registerPowerup(
    'Tree',
    REMTREE_POWERUP,
    'A Power-up Block for decorating texts',
    { slots: [] }
  );
  await plugin.app.registerPowerup(
    'Treec',
    REMTREEC_POWERUP,
    'A Power-up Block for decorating texts',
    { slots: [] }
  );

  await plugin.app.registerCommand({
    id: 'remtree',
    name: 'Tree',
    quickCode: 'tr',
    keyboardShortcut: 'opt+shift+t',
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      const remTag = (await rem?.getTagRems()) || [];
      const remTagText = remTag.filter(
        (item) =>
          item.text.toString() === 'Tree' || item.text.toString() === 'Treec'
      );
      const remTarget = await remTagText[0]?.text.toString();

      switch (remTarget) {
        case undefined:
          await rem?.addPowerup(REMTREE_POWERUP);
          break;
        case 'Tree':
          await rem?.removePowerup(REMTREE_POWERUP);
          await rem?.addPowerup(REMTREEC_POWERUP);
          break;
        case 'Treec':
          await rem?.removePowerup(REMTREEC_POWERUP);
          break;
        default:
          await rem?.addPowerup(REMTREE_POWERUP);
          break;
      }
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
