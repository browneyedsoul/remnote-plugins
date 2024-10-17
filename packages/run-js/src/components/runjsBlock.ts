import { RichTextInterface } from "@remnote/plugin-sdk";

export const RunJSBlock: RichTextInterface = [
  {
    text: ".".trim(),
    i: "m",
    code: true,
    language: "javascript",
  },
];
