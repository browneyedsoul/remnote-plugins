# CONTRIBUTION GUIDE

## From Maintainer

- We've been building this project in Viual Studio Code with Sass compiler.

  - https://github.com/glenn2223/vscode-live-sass-compiler

  - Since the node-sass has been deprecated. Thus in due season, it will gradually be a dart-sass based project.

- the `*.css` files are only controlled and compiled by `*.scss` files in the `SCSS` directory.

  That means PRs are allowed to `*.scss` with the compiled `*.css` files.

## Convention

- *.scss : 4 space opinionated for consistency and readability.

## Misc.

- If you are exploring long lines of code, you can use fold and collapse using the outdented first line `// blahblah`.

## Multi-root workspace

> If you are working in a [multi-root workspace](https://code.visualstudio.com/docs/editor/multi-root-workspaces), please copy and paste this settings .vscode/settings.json in the root of workspace