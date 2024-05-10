# Minimal Table

Create your Rem Table with simple tags!

## NOTICE I
> This is not the built-in RemNote table feature.
> The built-in RemNote table can be created via `/table` command

![Image](https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/26f68f2b-a31e-4471-9da4-3f8c51def188.png)

## NOTICE II
> Due to performance issues, property widths exceeding 600px will no longer be supported.

## Goal of the Minimal Table
- It provides a lightweight, basic-level table **for logging simple, static information** with hierarchy without sorting or filtering capabilities.
- The plain Outliner format and keyboard-driven experience allow for fast table entry and configuration.

## Getting Started
- Create a Rem hierarchy like in this image:

  ![image](https://user-images.githubusercontent.com/58147075/205598631-67e58b0a-19f5-4c74-8ed9-3b5a563362a4.png)

- Place your cursor where the Table Title exists.
- Open the command list via the omnibar (⌘+/) or slash (/).
- Type `tb` to see the options for modern table rows.
- With a simple keyboard shortcut, you can create the table without any cumbersome procedures. Find the shortcut in the keyboard shortcut config page.

# Tune Your Table with Tagging

> All the table controls begin with title bar tagging.

## Left Column Width Control
- After creating the table, you'll notice the left column's width is set to 150px.
- You can easily resize the property column width.
- Simply adjust the width using the omnibar/slash command or the provided keyboard shortcut. The shortcut is a convenient way to do this when using a computer.
![Image](https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/property.gif)

## Global Column Width Control
- Select one of the available widths to control the global column width.
- Available widths range from 90px to 1200px, with a 30px interval.
- A 100px interval is also available, which makes it easier to remember.
- Here's the list of available widths and their corresponding tags for tuning the global width:

  | Global Column Width | Tag Name for Tuning Global Width |
  | ------------- | ------------- |
  | 100px | `W100` |
  | 200px | `W200` |
  | 300px | `W300` |
  | 400px | `W400` |
  | 500px | `W500` |
  | 600px | `W600` |
  | 700px | `W700` |
  | 800px | `W800` |
  | 900px | `W900` |
  | 1000px | `W1000` |

  ![Image](https://forum.remnote.io/uploads/default/original/2X/8/8ae892cd66862b9115bbbe74a0a3f1246b8a79e3.gif)
  ![Image](https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/2.gif)

## Local Column Width Control
- Example Usage:
  - `c1` means column 1 / `w400` means 400px --> `c1w400`
  - `c2` means column 2 / `w600` means 600px --> `c1w600` 
  - ...

- Here's a list of available column widths and their corresponding tags for fine-tuning the width of local columns with 100px intervals:

  | Available Column Width | Tags for Fine-Tuning Local Column Width |
  | ------------- | ------------- |
  | 100px | `c1w100`, `c2w100`, `c3w100`, `c4w100`, `c5w100`, ... , `c9w100`  |
  | 200px | `c1w200`, `c2w200`, `c3w200`, `c4w200`, `c5w200`, ... , `c9w200`  |
  | 300px | `c1w300`, `c2w300`, `c3w300`, `c4w300`, `c5w300`, ... , `c9w300`  |
  | 400px | `c1w400`, `c2w400`, ... , `c9w400`  |
  | 500px | `c1w500`, `c2w500`, ... , `c9w500`  |
  | 600px | `c1w600`, `c2w600`, ... , `c9w600` |
  | 700px | `c1w700`, `c2w700`, ... , `c9w700`  |
  | 800px | `c1w800`, `c2w800`, ... , `c9w800` |
  | 900px | `c1w900`, `c2w900`, ... , `c9w900`  |
  | 1000px | `c1w1000`, `c2w1000`, ... , `c9w1000` |

## Table Column Header Formatting
- To toggle the table header in the far-left column, you can use the omnibar/slash command (tbh) or a configurable keyboard shortcut.
![Image](https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/th.gif)

## Turning a Row Table Cell into a Column Table Cell
- You can create a separated table-row column by simply indenting under a top-level Rem in a table cell.
- Demo:
![Image](https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/row-to-column.webp)
