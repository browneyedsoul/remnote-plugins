# CONTRIBUTION GUIDE

## From Maintainer

- We've been building this project in Viual Studio Code with Sass compiler.

  - https://github.com/glenn2223/vscode-live-sass-compiler

- the `*.css` files are only controlled and compiled by `*.scss` files in the `SCSS` directory.

  That means PRs are allowed to `*.scss` with the compiled `*.css` files.

- Please do not change compile format to `compressed` since I reckon that the reduced size of compressed file is not that meaningful compared with providing modification chances for someone who does not know css rules and structure well.

## Convention

- *.scss : only 4 space opinionated for consistency and readability.

## Misc.

- If you are exploring long lines of code, you can use fold and collapse using the outdented first line `// blahblah`.

## IMPORTANT
> If you are working in a [multi-root workspace](https://code.visualstudio.com/docs/editor/multi-root-workspaces), please copy and paste this settings .vscode/settings.json in the root of workspace