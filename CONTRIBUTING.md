# CONTRIBUTION GUIDE

## From Maintainer

We've been building this project in Viual Studio Code with Sass compiler and EditorConfig extension

- https://github.com/glenn2223/vscode-live-sass-compiler

- https://github.com/editorconfig/editorconfig-vscode

the `*.css` files are only controlled and compiled by `*.scss` files in the `SCSS` directory.

That means PRs are only allowed to *scss with compiled *.css files.

If you want to contribute, please follow the editorconfig in the project before casting a PR to the main branch

- Do not use `compressed` for compile format. Because I reckon that the reduced size of compressed file is not that meaningful compared with providing someone modification chances for who does not know css rules & structure well. The css compile output is not pretty though.

## About Code Convention

- Currently, this project does not use any csslint or Prettier for *.scss files as of now. If you want to use one of them, kindly provide us more details about the benefits over not using them.

- *.scss : 4 space opinionated for consistency and readability.

## Misc.

- If you are exploring long lines of code, you can use fold and collapse using outdented first line `// blahblah`.