
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
	bottom: 2px;
	right: 2px;
	border-radius: 10px;
	color: #FFF;
	background-color: #252525;
	border:1px solid #FFF; 

}
#help-button:hover {
	color: red;
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
