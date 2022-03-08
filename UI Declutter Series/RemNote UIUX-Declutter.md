
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
