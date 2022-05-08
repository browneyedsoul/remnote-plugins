
# Toggle by

- disply: none;
- visibility: hidden;
- pointer-events: none;

## Hide Inline Source Permanently in Editor

```css
[data-rem-tags~="source-list"] .rem-container--focused  .pl-4.pb-1.inline-flex {
    display: none;
}
```

## Hide Aliases until mouse hovered

```css
.tree-node-container > .tree-node--children > .tree-node-container[data-rem-container-tags~=aliases]:not(:hover) {
	display: block;
	max-height: 4px;
	overflow: hidden;
}
```

![d](../Assets/UI-alias.gif)

## Backlink Remover

> Sometimes, some rems don't need to represent all the backlinks.
And If it shows a bunch of the backlinks, it slows down the paging

- Example of the some rems: 'caption', 'bulletlist', 'table', 'table90', 'table120' ...

```css
[data-rem-container-tags~="remover"] .animate-zoom-into-bullet #show-embedded-search-button,
[data-rem-container-tags~="remover"] .animate-zoom-into-bullet #AutomaticSearchPortals,
[data-rem-container-tags~="remover"] .rem-container--embedded-search-stub {
    display: none !important;
}
```

## Hide "Type / for Commands"

```css
.rich-text-editor-placeholder {
    display: none;
}
 ```

## Move Omni Help Button for Content Visibility

```css
#help-button {
	position: fixed;
	bottom: 4px;
	right: 4px;
	border-radius: 10px;
	color: #FFF;
	background-color: #404040;
}
.dark-mode #help-button {
	color: #000;
	background-color: #FFF;
}
#help-button:hover {
	background-color: #000;
}
.dark-mode #help-button:hover {
	background-color: #E0E0E0;
}
 ```

## Disable Bullet Event

```css
.rem-bullet__container {
	pointer-events: none;
}
```

## Hide Card Backward Placeholder

```css
[data-rem-tags="card-item"] .text-gray-20 {
	display: none;
}
```

## Disable URL Link Popup when hovering website reference

```css
.popup-menu > .p-1 {
	display: none;
}
```
