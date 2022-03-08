
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

## Hide "Type / for Commands"

```css
.rich-text-editor-placeholder {
    display: none;
}
 ```

## Move Omni Help Button to Top right

```css
#help-button {
    position: fixed;
	top: 4px;
	right: 48px;
	transform: scale(0.8);
	border-radius: 5px;
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
