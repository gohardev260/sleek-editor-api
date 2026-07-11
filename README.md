# SleekEditor Standalone API

A standalone, modern, dependency-free, and offline-first custom rich text WYSIWYG editor component. Exposes a clean and object-oriented JavaScript Class API.

## Features

- **Formatting controls**: Bold, Italic, Underline, Strikethrough, Subscript, Superscript.
- **Layout alignments**: Left, Center, Right align.
- **Lists**: Bullet lists, Ordered numbered lists, and indentation controls (Tab / Shift+Tab).
- **Custom Blocks**: Blockquotes, Preformatted Code snippets, HTML details/summary FAQ accordion lists, tables, ASCII diagrams.
- **Visual & Code Sync**: Full editing support with source HTML editing toggle view.
- **Events & Stats**: Real-time callback hooks for changes (`onChange`) and word/character count updates (`onWordCountUpdate`).
- **Self-contained**: Offline-ready with embedded inline SVGs instead of CDN iconography dependencies.

---

## Installation & Setup

### Option A: Using CDN Links (Quickest)
You can load the editor directly from a CDN (or your hosted files) without installing anything locally:

```html
<!-- Load CSS from CDN Link -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gohardev260/sleek-editor-api@main/editor.css">

<!-- Load JavaScript from CDN Link -->
<script src="https://cdn.jsdelivr.net/gh/gohardev260/sleek-editor-api@main/editor.js"></script>
```

### Option B: Local Files
1. Copy `editor.js` and `editor.css` to your project assets folder.
2. Link the stylesheet and script in your HTML header:

```html
<link rel="stylesheet" href="editor.css">
<script src="editor.js"></script>
```

---

## Usage

1. Create a container element inside your page:

```html
<div id="rich-editor-container"></div>
```

4. Initialize the editor programmatically with the API:

```javascript
const editor = new SleekEditor({
    container: '#rich-editor-container',
    initialHTML: '<p>Welcome to the editor!</p>',
    onChange: (html) => {
        console.log('Content changed:', html);
    },
    onWordCountUpdate: (words, characters) => {
        console.log(`Word Count: ${words} | Characters: ${characters}`);
    }
});
```

---

## API Documentation

### Options Configuration

When creating a new instance via `new SleekEditor(options)`, you can configure the following keys:

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `container` | `string \| Element` | `null` | Query selector or DOM node to append the editor layout into. |
| `initialHTML` | `string` | `'<p>Start writing here...</p>'` | The default content loaded on instantiation. |
| `theme` | `string` | `'light'` | Can be `'light'` or `'dark'` to adjust default colors. |
| `onChange` | `function` | `null` | Callback function receiving updated HTML on any edit/input change. |
| `onWordCountUpdate` | `function` | `null` | Callback function receiving `(wordsCount, charactersCount)` on content change. |

### API Methods

The editor instance exposes the following programmatic API methods:

#### `getContent()`
Returns the current content as a clean HTML string.
- **Returns**: `string`

```javascript
const html = editor.getContent();
```

#### `setContent(html)`
Overwrites the current content in the editor space.
- **Parameters**: `html` (`string`)

```javascript
editor.setContent('<h2>New Heading</h2><p>Refreshed text content.</p>');
```

#### `toggleSourceMode()`
Toggles the editor view between the Visual WYSIWYG editor and the Raw HTML Code editor.

```javascript
editor.toggleSourceMode();
```

---

## Customizing Theme Styles

The editor styling is built on CSS variables which makes customization straightforward. You can override the variables inside your project CSS files:

```css
:root {
    --de-color-primary: #10b981; /* Change primary accent colors */
    --de-color-bg: #fafafa;
    --de-radius: 12px;           /* Adjust container roundness */
}
```
