import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import { toggle } from "../style/toggle";
// import { COMMENT, AUTHOR, RATING } from "../constant/var";

export const [COMMENT, AUTHOR, RATING] = ["comment_powerup", "author_powerup", "rating_powerup"];

let ArticleCommentCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
  try {
    const localResponse = await fetch("snippet.css");
    const localCSS = await localResponse.text();
    ArticleCommentCSS = localCSS;
    await plugin.app.registerCSS("article-comment", ArticleCommentCSS);
    console.dir("Article Comment Installed!");
  } catch (localError) {
    console.warn(`Failed to fetch local file: ${localError}. Falling back to remote URL.`);
    const remoteResponse = await fetch(
      "https://raw.githubusercontent.com/browneyedsoul/RemNote-ArticleComment/main/src/snippet.css"
    );
    const remoteCSS = await remoteResponse.text();
    ArticleCommentCSS = remoteCSS;
    await plugin.app.registerCSS("article-comment", ArticleCommentCSS);
    console.dir("Article Comment Installed from CDN!");
  }

  await plugin.app.registerPowerup({
    name: "Comment",
    code: COMMENT,
    description: "A Power-up Rem for Comments",
    options: {
      slots: [],
    },
  });
  await plugin.app.registerPowerup({
    name: "Author",
    code: AUTHOR,
    description: "A Power-up Rem for Comments",
    options: {
      slots: [],
    },
  });
  await plugin.app.registerPowerup({
    name: "Rating",
    code: RATING,
    description: "A Power-up Rem for Rating",
    options: {
      slots: [],
    },
  });

  await plugin.app.registerCommand({
    id: "Article-comment",
    name: "Comment",
    quickCode: "cm",
    keyboardShortcut: "cmd+shift+1",
    description: "Add a style tag to the current focused Rem",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(COMMENT);
      await plugin.editor.insertPlainText("Comment");
    },
  });
  await plugin.app.registerCommand({
    id: "Article-author",
    name: "Author",
    quickCode: "au",
    keyboardShortcut: "cmd+shift+2",
    description: "Add a style tag to the current focused Rem",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(AUTHOR);
    },
  });
  await plugin.app.registerCommand({
    id: "Article-rating",
    name: "Rating",
    quickCode: "rt",
    keyboardShortcut: "cmd+shift+3",
    description: "Add a style tag to the current focused Rem",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(RATING);
    },
  });
  await plugin.settings.registerStringSetting({
    id: "image-url",
    title: "Image URL (https:// ...)",
    description: "An image URL to be displayed in the hierarchy editor",
    defaultValue: "",
  });
  plugin.track(async (reactivePlugin) => {
    const imageURL = await reactivePlugin.settings.getSetting<string>("image-url");
    imageURL
      ? await plugin.app.registerCSS("article-url", toggle(imageURL))
      : await plugin.app.registerCSS("article-url", "");
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
