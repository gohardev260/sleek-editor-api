/**
 * Diginix Standalone Rich Text Editor API
 * Lightweight, dependency-free custom rich text editor component.
 */

// Embedded inline SVG definitions for self-contained, offline-first execution
const DE_ICONS = {
    undo: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>',
    redo: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>',
    bold: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 12a4 4 0 0 0 0-8H6v8"/><path d="M15 20a4 4 0 0 0 0-8H6v8Z"/></svg>',
    italic: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>',
    underline: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>',
    strikethrough: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4H9a3 3 0 0 0-2.83 4H19a3 3 0 0 1-2.83 4H7.5"/><line x1="4" y1="12" x2="20" y2="12"/><path d="M15 12a4 4 0 0 1 0 8H8"/></svg>',
    subscript: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m4 4 8 8"/><path d="m4 12 8-8"/><path d="M20 18h-4c0-1.5 1-2.5 2-3.5a1 1 0 0 0-1-1.5 1.5 1.5 0 0 0-1 1.5"/></svg>',
    superscript: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m4 4 8 8"/><path d="m4 12 8-8"/><path d="M20 8h-4c0-1.5 1-2.5 2-3.5a1 1 0 0 0-1-1.5 1.5 1.5 0 0 0-1 1.5"/></svg>',
    baseline: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m4 20 8-16 8 16"/><path d="M18 14H6"/></svg>',
    highlighter: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/></svg>',
    alignLeft: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="6" x2="3" y2="6"/><line x1="15" y1="12" x2="3" y2="12"/><line x1="17" y1="18" x2="3" y2="18"/></svg>',
    alignCenter: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="6" x2="3" y2="6"/><line x1="17" y1="12" x2="7" y2="12"/><line x1="19" y1="18" x2="5" y2="18"/></svg>',
    alignRight: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="12" x2="9" y2="12"/><line x1="21" y1="18" x2="7" y2="18"/></svg>',
    alignJustify: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>',
    lineSpacing: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10H7"/><path d="M21 6H7"/><path d="M21 14H7"/><path d="M21 18H7"/><path d="M3 20V4"/><path d="M1 7l2-3 2 3"/><path d="M1 17l2 3 2-3"/></svg>',
    list: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    listOrdered: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>',
    indentDecrease: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 8 3 12 7 16"/><line x1="21" y1="12" x2="11" y2="12"/><line x1="21" y1="6" x2="11" y2="6"/><line x1="21" y1="18" x2="11" y2="18"/></svg>',
    indentIncrease: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 8 7 12 3 16"/><line x1="21" y1="12" x2="11" y2="12"/><line x1="21" y1="6" x2="11" y2="6"/><line x1="21" y1="18" x2="11" y2="18"/></svg>',
    quote: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3a4 4 0 0 0-4 4v12a4 4 0 0 0 8 0V7a4 4 0 0 0-4-4Z"/><path d="M4 14h6v5a4 4 0 0 1-8 0v-5a4 4 0 0 1 2-3.87"/></svg>',
    code: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    helpCircle: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    link: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    image: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    table: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18"/></svg>',
    activity: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    horizontalRule: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/></svg>',
    findReplace: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="6"/><path d="M21 21l-6-6"/><path d="M15 9h7"/><path d="M19 6l3 3-3 3"/></svg>',
    changeCase: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l5-15 5 15"/><path d="M6.5 14h6"/><circle cx="18" cy="16" r="3"/><path d="M21 13v7"/></svg>',
    dateTime: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="12" cy="16" r="3"/><polyline points="12 15 12 16 13 16"/></svg>',
    specialCharacters: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h4.5a2.5 2.5 0 0 0 2.5-2.5C10 14 8 11.5 8 8a4 4 0 1 1 8 0c0 3.5-2 6-2 9.5a2.5 2.5 0 0 0 2.5 2.5H21"/></svg>',
    clearFormatting: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>',
    print: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
    codeXml: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="4" x2="12" y2="20"/></svg>'
};

class SleekEditor {
    /**
     * Initialize the editor instance
     * @param {Object} options Configuration options
     */
    constructor(options = {}) {
        this.options = {
            container: null,
            initialHTML: '<p>Start writing here...</p>',
            onChange: null,
            onWordCountUpdate: null,
            theme: 'light', // 'light' or 'dark'
            ...options
        };

        this.container = typeof this.options.container === 'string' 
            ? document.querySelector(this.options.container) 
            : this.options.container;

        if (!this.container) {
            console.error('SleekEditor: Container element not found.');
            return;
        }

        this.isSourceMode = false;
        this.savedRange = null;

        this._initDOM();
        this._initEvents();
        this.setContent(this.options.initialHTML);
    }

    /**
     * Build the Editor UI structure
     */
    _initDOM() {
        this.container.classList.add('diginix-editor-container');
        if (this.options.theme === 'dark') {
            this.container.classList.add('diginix-dark');
        }

        // 1. Toolbar structure
        const toolbar = document.createElement('div');
        toolbar.className = 'diginix-editor-toolbar';
        toolbar.innerHTML = `
            <button type="button" class="diginix-toolbar-btn" data-cmd="undo" title="Undo (Ctrl+Z)">${DE_ICONS.undo}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="redo" title="Redo (Ctrl+Y)">${DE_ICONS.redo}</button>
            <span class="diginix-editor-toolbar-sep"></span>

            <select class="diginix-toolbar-select" data-select="fontName" title="Font Family" style="width: 110px;">
                <option value="" disabled selected>Font Family</option>
                <option value="system-ui, -apple-system, sans-serif">Sans-Serif</option>
                <option value="SFMono-Regular, Consolas, monospace">Monospace</option>
                <option value="Arial">Arial</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
                <option value="Courier New">Courier New</option>
            </select>

            <select class="diginix-toolbar-select" data-select="fontSize" title="Font Size" style="width: 85px;">
                <option value="" disabled selected>Size</option>
                <option value="12px">12 px</option>
                <option value="14px">14 px</option>
                <option value="16px">16 px</option>
                <option value="18px">18 px</option>
                <option value="20px">20 px</option>
                <option value="24px">24 px</option>
                <option value="28px">28 px</option>
                <option value="32px">32 px</option>
                <option value="48px">48 px</option>
            </select>

            <select class="diginix-toolbar-select" data-select="formatBlock" title="Paragraph Format">
                <option value="p">Paragraph</option>
                <option value="h1">Heading 1</option>
                <option value="h2">Heading 2</option>
                <option value="h3">Heading 3</option>
            </select>
            <span class="diginix-editor-toolbar-sep"></span>

            <button type="button" class="diginix-toolbar-btn" data-cmd="bold" title="Bold (Ctrl+B)">${DE_ICONS.bold}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="italic" title="Italic (Ctrl+I)">${DE_ICONS.italic}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="underline" title="Underline (Ctrl+U)">${DE_ICONS.underline}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="strikeThrough" title="Strikethrough (Ctrl+Shift+X)">${DE_ICONS.strikethrough}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="subscript" title="Subscript (Ctrl+Shift+S)">${DE_ICONS.subscript}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="superscript" title="Superscript (Ctrl+Shift+P)">${DE_ICONS.superscript}</button>
            <span class="diginix-editor-toolbar-sep"></span>

            <label class="diginix-toolbar-color-label" title="Text Color">
                ${DE_ICONS.baseline}
                <input type="color" class="diginix-toolbar-color-input" data-color="foreColor" value="#000000">
            </label>
            <label class="diginix-toolbar-color-label" title="Highlight Color">
                ${DE_ICONS.highlighter}
                <input type="color" class="diginix-toolbar-color-input" data-color="backColor" value="#ffff00">
            </label>
            <span class="diginix-editor-toolbar-sep"></span>

            <button type="button" class="diginix-toolbar-btn" data-cmd="justifyLeft" title="Align Left">${DE_ICONS.alignLeft}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="justifyCenter" title="Align Center">${DE_ICONS.alignCenter}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="justifyRight" title="Align Right">${DE_ICONS.alignRight}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="justifyFull" title="Justify">${DE_ICONS.alignJustify}</button>

            <select class="diginix-toolbar-select" data-select="lineSpacing" title="Line Spacing" style="width: 70px;">
                <option value="" disabled selected>Line Spacing</option>
                <option value="1.0">1.0</option>
                <option value="1.15">1.15</option>
                <option value="1.5">1.5</option>
                <option value="2.0">2.0</option>
            </select>
            <span class="diginix-editor-toolbar-sep"></span>

            <button type="button" class="diginix-toolbar-btn" data-cmd="insertUnorderedList" title="Bullets (Ctrl+Shift+L)">${DE_ICONS.list}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="insertOrderedList" title="Numbers (Ctrl+Shift+N)">${DE_ICONS.listOrdered}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="outdent" title="Outdent (Shift+Tab)">${DE_ICONS.indentDecrease}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="indent" title="Indent (Tab)">${DE_ICONS.indentIncrease}</button>
            <span class="diginix-editor-toolbar-sep"></span>

            <button type="button" class="diginix-toolbar-btn" data-tool="insertBlockquote" title="Blockquote">${DE_ICONS.quote}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="insertCodeblock" title="Code Block">${DE_ICONS.code}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="insertAccordion" title="FAQ Accordion">${DE_ICONS.helpCircle}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="insertLink" title="Link (Ctrl+K)">${DE_ICONS.link}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="insertImage" title="Image (Ctrl+Shift+I)">${DE_ICONS.image}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="insertTable" title="Table (Ctrl+Shift+T)">${DE_ICONS.table}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="insertDiagram" title="ASCII Diagram">${DE_ICONS.activity}</button>
            <span class="diginix-editor-toolbar-sep"></span>

            <select class="diginix-toolbar-select" data-select="changeCase" title="Change Case" style="width: 105px;">
                <option value="" disabled selected>Change Case</option>
                <option value="sentence">Sentence case</option>
                <option value="lowercase">lowercase</option>
                <option value="uppercase">UPPERCASE</option>
                <option value="capitalize">Capitalize Each Word</option>
            </select>

            <button type="button" class="diginix-toolbar-btn" data-tool="insertHorizontalRule" title="Horizontal Rule">${DE_ICONS.horizontalRule}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="openFindReplace" title="Find and Replace (Ctrl+H)">${DE_ICONS.findReplace}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="insertDateTime" title="Insert Date & Time">${DE_ICONS.dateTime}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="insertSpecialCharacter" title="Special Characters">${DE_ICONS.specialCharacters}</button>
            <button type="button" class="diginix-toolbar-btn" data-cmd="removeFormat" title="Clear Formatting">${DE_ICONS.clearFormatting}</button>
            <button type="button" class="diginix-toolbar-btn" data-tool="printDocument" title="Print (Ctrl+P)">${DE_ICONS.print}</button>
            <span class="diginix-editor-toolbar-sep"></span>

            <button type="button" class="diginix-toolbar-btn" data-tool="toggleSource" title="Toggle Source Mode">${DE_ICONS.codeXml}</button>
        `;
        this.container.appendChild(toolbar);

        // 2. Editor Area
        const editorArea = document.createElement('div');
        editorArea.className = 'diginix-editor-area';
        editorArea.contentEditable = 'true';
        this.container.appendChild(editorArea);
        this.editorArea = editorArea;

        // 3. Source TextArea (Hidden by default)
        const sourceArea = document.createElement('textarea');
        sourceArea.className = 'diginix-editor-source-mode hidden';
        sourceArea.style.display = 'none';
        this.container.appendChild(sourceArea);
        this.sourceArea = sourceArea;

        // 4. Status bar
        const statusbar = document.createElement('div');
        statusbar.className = 'diginix-editor-statusbar';
        statusbar.innerHTML = `
            <div>Status: <span class="editor-status-text">Ready</span></div>
            <div class="diginix-editor-stats">
                <span class="word-count-badge">0 words</span>
                <span class="char-count-badge">0 characters</span>
            </div>
        `;
        this.container.appendChild(statusbar);
        this.statusTextEl = statusbar.querySelector('.editor-status-text');
        this.wordCountEl = statusbar.querySelector('.word-count-badge');
        this.charCountEl = statusbar.querySelector('.char-count-badge');
        
        this.toolbar = toolbar;
    }

    /**
     * Attach all core events listeners
     */
    _initEvents() {
        // Toolbar commands execution
        this.toolbar.querySelectorAll('button[data-cmd]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.isSourceMode) return;
                const cmd = btn.getAttribute('data-cmd');
                document.execCommand(cmd, false, null);
                this.editorArea.focus();
                this._onContentChange();
            });
        });

        // Select (blockFormat)
        const selectEl = this.toolbar.querySelector('select[data-select="formatBlock"]');
        if (selectEl) {
            selectEl.addEventListener('change', (e) => {
                if (this.isSourceMode) return;
                document.execCommand('formatBlock', false, `<${e.target.value}>`);
                this.editorArea.focus();
                this._onContentChange();
            });
        }

        // Font Family Select
        const fontNameEl = this.toolbar.querySelector('select[data-select="fontName"]');
        if (fontNameEl) {
            fontNameEl.addEventListener('change', (e) => {
                if (this.isSourceMode) return;
                this.applySelectionStyle('fontFamily', e.target.value);
                fontNameEl.value = ""; // Reset label
            });
        }

        // Font Size Select
        const fontSizeEl = this.toolbar.querySelector('select[data-select="fontSize"]');
        if (fontSizeEl) {
            fontSizeEl.addEventListener('change', (e) => {
                if (this.isSourceMode) return;
                this.applySelectionStyle('fontSize', e.target.value);
                fontSizeEl.value = ""; // Reset label
            });
        }

        // Line Spacing Select
        const lineSpacingEl = this.toolbar.querySelector('select[data-select="lineSpacing"]');
        if (lineSpacingEl) {
            lineSpacingEl.addEventListener('change', (e) => {
                if (this.isSourceMode) return;
                this.setLineSpacing(e.target.value);
                lineSpacingEl.value = ""; // Reset label
            });
        }

        // Change Case Select
        const changeCaseEl = this.toolbar.querySelector('select[data-select="changeCase"]');
        if (changeCaseEl) {
            changeCaseEl.addEventListener('change', (e) => {
                if (this.isSourceMode) return;
                this.changeCase(e.target.value);
                changeCaseEl.value = ""; // Reset label
            });
        }

        // Color picking
        this.toolbar.querySelectorAll('input[data-color]').forEach(input => {
            input.addEventListener('input', (e) => {
                if (this.isSourceMode) return;
                const cmd = input.getAttribute('data-color');
                const val = e.target.value;
                if (cmd === 'backColor') {
                    document.execCommand('hiliteColor', false, val) || document.execCommand('backColor', false, val);
                } else {
                    document.execCommand('foreColor', false, val);
                }
                this.editorArea.focus();
            });
        });

        // Custom tools buttons
        this.toolbar.querySelectorAll('button[data-tool]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const tool = btn.getAttribute('data-tool');
                this._handleToolClick(tool);
            });
        });

        // Editor Area changes
        const eventTypes = ['input', 'keyup', 'mouseup', 'click'];
        eventTypes.forEach(type => {
            this.editorArea.addEventListener(type, () => {
                this._onContentChange();
            });
        });

        // Keydowns in Editor Area (Tab, shortcuts)
        this.editorArea.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                document.execCommand(e.shiftKey ? 'outdent' : 'indent', false, null);
                this._onContentChange();
                return;
            }

            // Custom keyboard shortcuts
            const isMod = e.ctrlKey || e.metaKey;
            if (isMod) {
                const key = e.key.toLowerCase();
                if (key === 'b') {
                    e.preventDefault();
                    document.execCommand('bold', false, null);
                    this._onContentChange();
                } else if (key === 'i' && !e.shiftKey) {
                    e.preventDefault();
                    document.execCommand('italic', false, null);
                    this._onContentChange();
                } else if (key === 'u') {
                    e.preventDefault();
                    document.execCommand('underline', false, null);
                    this._onContentChange();
                } else if (key === 'k') {
                    e.preventDefault();
                    this._handleToolClick('insertLink');
                } else if (key === 'x' && e.shiftKey) {
                    e.preventDefault();
                    document.execCommand('strikeThrough', false, null);
                    this._onContentChange();
                } else if (key === 's' && e.shiftKey) {
                    e.preventDefault();
                    document.execCommand('subscript', false, null);
                    this._onContentChange();
                } else if (key === 'p' && e.shiftKey) {
                    e.preventDefault();
                    document.execCommand('superscript', false, null);
                    this._onContentChange();
                } else if (key === 'h') {
                    e.preventDefault();
                    this._handleToolClick('openFindReplace');
                } else if (key === 'p' && !e.shiftKey) {
                    e.preventDefault();
                    this._handleToolClick('printDocument');
                }
            }
        });

        // Document Selection change to update toolbar states
        document.addEventListener('selectionchange', () => {
            if (this.isSourceMode) return;
            const sel = window.getSelection();
            if (sel && sel.anchorNode && this.editorArea.contains(sel.anchorNode)) {
                this.updateToolbarActiveStates();
            }
        });

        // Sync text area change back to editor area
        this.sourceArea.addEventListener('input', () => {
            this.editorArea.innerHTML = this.sourceArea.value;
            this._updateWordCount();
            if (this.options.onChange) {
                this.options.onChange(this.sourceArea.value);
            }
        });
    }

    /**
     * Handle custom tools buttons clicked
     * @param {string} tool 
     */
    _handleToolClick(tool) {
        if (tool === 'toggleSource') {
            this.toggleSourceMode();
            return;
        }

        if (this.isSourceMode) return;

        // Save current text selection range
        this._saveSelection();

        switch (tool) {
            case 'insertOrderedList':
                document.execCommand('insertOrderedList', false, null);
                this.editorArea.focus();
                this._onContentChange();
                break;
            case 'insertBlockquote':
                this.insertBlockquote();
                break;
            case 'insertCodeblock':
                this.insertCodeblock();
                break;
            case 'insertAccordion':
                this.insertAccordion();
                break;
            case 'insertLink':
                this.insertLink();
                break;
            case 'insertImage':
                this.insertImage();
                break;
            case 'insertTable':
                this.insertTable();
                break;
            case 'insertDiagram':
                this.insertDiagram();
                break;
            case 'insertHorizontalRule':
                this.insertHorizontalRule();
                break;
            case 'openFindReplace':
                this.openFindReplace();
                break;
            case 'insertDateTime':
                this.insertDateTime();
                break;
            case 'insertSpecialCharacter':
                this.insertSpecialCharacter();
                break;
            case 'printDocument':
                this.printDocument();
                break;
        }
    }

    /**
     * Save cursor selection
     */
    _saveSelection() {
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
            this.savedRange = sel.getRangeAt(0).cloneRange();
        }
    }

    /**
     * Restore cursor selection
     */
    _restoreSelection() {
        if (this.savedRange) {
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(this.savedRange);
        }
    }

    /**
     * On Content Change handler
     */
    _onContentChange() {
        this._updateWordCount();
        this.updateToolbarActiveStates();
        if (this.options.onChange) {
            this.options.onChange(this.getContent());
        }
    }

    /**
     * Update toolbar buttons active/selected states based on cursor position
     */
    updateToolbarActiveStates() {
        const sel = window.getSelection();
        let node = null;
        if (sel && sel.rangeCount > 0) {
            node = sel.anchorNode;
            if (node && node.nodeType === Node.TEXT_NODE) {
                node = node.parentElement;
            }
        }

        let isBold = false, isItalic = false, isUnderline = false, isStrike = false, isSub = false, isSup = false;
        let isUl = false, isOl = false, isBlockquote = false, isCodeblock = false, isAccordion = false, isLink = false, isTable = false, isDiagram = false;
        let headingTag = 'p';
        let textAlign = '';

        if (node && this.editorArea.contains(node)) {
            let curr = node;
            while (curr && curr !== this.editorArea && curr.parentElement) {
                const tag = curr.tagName ? curr.tagName.toLowerCase() : '';
                if (tag === 'b' || tag === 'strong' || (curr.style && (curr.style.fontWeight === 'bold' || parseInt(curr.style.fontWeight) >= 600))) isBold = true;
                if (tag === 'i' || tag === 'em' || (curr.style && curr.style.fontStyle === 'italic')) isItalic = true;
                if (tag === 'u' || (curr.style && curr.style.textDecoration && curr.style.textDecoration.includes('underline'))) isUnderline = true;
                if (tag === 's' || tag === 'strike' || (curr.style && curr.style.textDecoration && curr.style.textDecoration.includes('line-through'))) isStrike = true;
                if (tag === 'sub') isSub = true;
                if (tag === 'sup') isSup = true;
                if (tag === 'ul') isUl = true;
                if (tag === 'ol') isOl = true;
                if (tag === 'blockquote') isBlockquote = true;
                if (tag === 'code' || tag === 'pre') {
                    if (curr.classList && curr.classList.contains('ascii-diagram')) {
                        isDiagram = true;
                    } else {
                        isCodeblock = true;
                    }
                }
                if (tag === 'details' || (curr.classList && curr.classList.contains('article-accordion'))) isAccordion = true;
                if (tag === 'a') isLink = true;
                if (tag === 'table' || tag === 'tr' || tag === 'td' || tag === 'th') isTable = true;

                if (['h1', 'h2', 'h3', 'p'].includes(tag) && headingTag === 'p') {
                    headingTag = tag;
                }
                if (curr.style && curr.style.textAlign && !textAlign) {
                    textAlign = curr.style.textAlign.toLowerCase();
                }
                curr = curr.parentElement;
            }
        }

        const checkState = (cmd, domBool) => {
            try {
                return domBool || document.queryCommandState(cmd);
            } catch (e) {
                return domBool;
            }
        };

        const states = {
            'bold': checkState('bold', isBold),
            'italic': checkState('italic', isItalic),
            'underline': checkState('underline', isUnderline),
            'strikeThrough': checkState('strikeThrough', isStrike),
            'subscript': checkState('subscript', isSub),
            'superscript': checkState('superscript', isSup),
            'insertUnorderedList': checkState('insertUnorderedList', isUl),
            'insertOrderedList': checkState('insertOrderedList', isOl),
            'justifyLeft': textAlign === 'left' || checkState('justifyLeft', false),
            'justifyCenter': textAlign === 'center' || checkState('justifyCenter', false),
            'justifyRight': textAlign === 'right' || checkState('justifyRight', false),
            'justifyFull': textAlign === 'justify' || checkState('justifyFull', false),
            'insertBlockquote': isBlockquote,
            'insertCodeblock': isCodeblock,
            'insertAccordion': isAccordion,
            'insertLink': isLink,
            'insertTable': isTable,
            'insertDiagram': isDiagram
        };

        Object.keys(states).forEach(key => {
            const btn = this.toolbar.querySelector(`button[data-cmd="${key}"], button[data-tool="${key}"]`);
            if (btn) {
                if (states[key]) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            }
        });

        const selectEl = this.toolbar.querySelector('select[data-select="formatBlock"]');
        if (selectEl) {
            selectEl.value = headingTag;
        }
    }

    /**
     * Calculate and update Word & Character Count
     */
    _updateWordCount() {
        const text = this.editorArea.innerText || '';
        const cleanText = text.trim();
        const words = cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
        const chars = text.length;

        this.wordCountEl.innerText = `${words} ${words === 1 ? 'word' : 'words'}`;
        this.charCountEl.innerText = `${chars} ${chars === 1 ? 'character' : 'characters'}`;

        if (this.options.onWordCountUpdate) {
            this.options.onWordCountUpdate(words, chars);
        }
    }

    /**
     * Get Editor Content HTML
     * @returns {string} HTML string
     */
    getContent() {
        if (this.isSourceMode) {
            return this.sourceArea.value;
        }
        return this.editorArea.innerHTML;
    }

    /**
     * Set Editor Content HTML
     * @param {string} html 
     */
    setContent(html) {
        this.editorArea.innerHTML = html;
        this.sourceArea.value = html;
        this._updateWordCount();
        this.updateToolbarActiveStates();
    }

    /**
     * Toggle visual/source editor mode
     */
    toggleSourceMode() {
        const btn = this.toolbar.querySelector('button[data-tool="toggleSource"]');
        if (this.isSourceMode) {
            // Switch to Visual Mode
            this.editorArea.innerHTML = this.sourceArea.value;
            this.sourceArea.style.display = 'none';
            this.sourceArea.classList.add('hidden');
            this.editorArea.style.display = 'block';
            this.editorArea.classList.remove('hidden');
            if (btn) btn.classList.remove('active');
            this.isSourceMode = false;
            this.statusTextEl.innerText = 'Visual Editor';
            this._updateWordCount();
            this.updateToolbarActiveStates();
            this.editorArea.focus();
        } else {
            // Switch to Source Mode
            this.sourceArea.value = this.editorArea.innerHTML;
            this.editorArea.style.display = 'none';
            this.editorArea.classList.add('hidden');
            this.sourceArea.style.display = 'block';
            this.sourceArea.classList.remove('hidden');
            if (btn) btn.classList.add('active');
            this.isSourceMode = true;
            this.statusTextEl.innerText = 'HTML Editor';
        }
    }

    /**
     * Custom styled Prompt Modal
     */
    _showPromptModal(title, fields = [], onSubmit) {
        // Create modal backdrop and container
        const overlay = document.createElement('div');
        overlay.className = 'de-modal-overlay';
        
        let inputsHtml = '';
        fields.forEach(field => {
            inputsHtml += `
                <div class="de-modal-group">
                    <label class="de-modal-label">${field.label}</label>
                    <input type="${field.type || 'text'}" class="de-modal-input" id="de-modal-f-${field.id}" value="${field.defaultValue || ''}" placeholder="${field.placeholder || ''}">
                </div>
            `;
        });

        overlay.innerHTML = `
            <div class="de-modal">
                <div class="de-modal-header">
                    <h4 class="de-modal-title">${title}</h4>
                    <button class="de-modal-close" type="button">✕</button>
                </div>
                <div class="de-modal-body">
                    ${inputsHtml}
                </div>
                <div class="de-modal-footer">
                    <button class="de-btn de-btn-secondary de-cancel" type="button">Cancel</button>
                    <button class="de-btn de-btn-primary de-submit" type="button">Insert</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        // Animation
        setTimeout(() => overlay.classList.add('active'), 50);

        const closeBtn = overlay.querySelector('.de-modal-close');
        const cancelBtn = overlay.querySelector('.de-cancel');
        const submitBtn = overlay.querySelector('.de-submit');

        const destroy = () => {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 250);
        };

        const executeSubmit = () => {
            const values = {};
            fields.forEach(field => {
                const input = overlay.querySelector(`#de-modal-f-${field.id}`);
                values[field.id] = input ? input.value : '';
            });
            onSubmit(values);
            destroy();
        };

        closeBtn.onclick = destroy;
        cancelBtn.onclick = destroy;
        submitBtn.onclick = executeSubmit;

        // Auto-focus first input
        if (fields.length > 0) {
            setTimeout(() => {
                const first = overlay.querySelector(`#de-modal-f-${fields[0].id}`);
                if (first) first.focus();
            }, 100);
        }

        // Support Enter key
        overlay.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                executeSubmit();
            } else if (e.key === 'Escape') {
                destroy();
            }
        });
    }

    /**
     * Toggle or insert blockquote
     */
    insertBlockquote() {
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
            let node = sel.anchorNode;
            if (node && node.nodeType === Node.TEXT_NODE) node = node.parentElement;
            const bq = node ? node.closest('blockquote') : null;
            if (bq && this.editorArea.contains(bq)) {
                // Remove blockquote
                const p = document.createElement('p');
                p.innerHTML = bq.innerHTML;
                bq.parentNode.replaceChild(p, bq);
                this.editorArea.focus();
                this._onContentChange();
                return;
            }
        }
        document.execCommand('formatBlock', false, '<blockquote>');
        this.editorArea.focus();
        this._onContentChange();
    }

    /**
     * Toggle or insert Code Block
     */
    insertCodeblock() {
        const sel = window.getSelection();
        if (!sel || !sel.rangeCount) return;

        let node = sel.anchorNode;
        if (node && node.nodeType === Node.TEXT_NODE) node = node.parentElement;
        const pre = node ? node.closest('pre') : null;
        if (pre && this.editorArea.contains(pre)) {
            // Remove code block
            const p = document.createElement('p');
            p.textContent = pre.textContent;
            pre.parentNode.replaceChild(p, pre);
            this.editorArea.focus();
            this._onContentChange();
            return;
        }

        const range = sel.getRangeAt(0);
        const newPre = document.createElement('pre');
        newPre.textContent = sel.toString() || '// Enter code snippet here';
        range.deleteContents();
        range.insertNode(newPre);
        this.editorArea.focus();
        this._onContentChange();
    }

    /**
     * Insert Link
     */
    insertLink() {
        const sel = window.getSelection();
        let currentLinkVal = 'https://';
        if (sel && sel.rangeCount > 0) {
            let node = sel.anchorNode;
            if (node && node.nodeType === Node.TEXT_NODE) node = node.parentElement;
            const link = node ? node.closest('a') : null;
            if (link && this.editorArea.contains(link)) {
                // Toggle off
                document.execCommand('unlink', false, null);
                this.editorArea.focus();
                this._onContentChange();
                return;
            }
        }

        this._showPromptModal('Insert Link', [
            { id: 'url', label: 'Web URL (HTTPS):', defaultValue: currentLinkVal, placeholder: 'https://example.com' }
        ], (values) => {
            const url = values.url.trim();
            if (url && url !== 'https://') {
                this._restoreSelection();
                document.execCommand('createLink', false, url);
                this.editorArea.focus();
                this._onContentChange();
            }
        });
    }

    /**
     * Insert Image
     */
    insertImage() {
        // Option select first
        const overlay = document.createElement('div');
        overlay.className = 'de-modal-overlay';
        overlay.innerHTML = `
            <div class="de-modal">
                <div class="de-modal-header">
                    <h4 class="de-modal-title">Insert Image</h4>
                    <button class="de-modal-close" type="button">✕</button>
                </div>
                <div class="de-modal-body">
                    <div class="de-image-choices">
                        <button class="de-choice-btn" id="de-choice-url" type="button">
                            ${DE_ICONS.link}
                            <span>Image URL</span>
                        </button>
                        <button class="de-choice-btn" id="de-choice-file" type="button">
                            ${DE_ICONS.image}
                            <span>Upload File</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('active'), 50);

        const close = () => {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 250);
        };

        overlay.querySelector('.de-modal-close').onclick = close;

        // Image URL option
        overlay.querySelector('#de-choice-url').onclick = () => {
            close();
            setTimeout(() => {
                this._showPromptModal('Insert Image URL', [
                    { id: 'url', label: 'Image URL Link:', defaultValue: 'https://', placeholder: 'https://example.com/image.jpg' }
                ], (values) => {
                    const url = values.url.trim();
                    if (url && url !== 'https://') {
                        this._restoreSelection();
                        document.execCommand('insertImage', false, url);
                        this.editorArea.focus();
                        this._onContentChange();
                    }
                });
            }, 300);
        };

        // File upload option
        overlay.querySelector('#de-choice-file').onclick = () => {
            close();
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        this._restoreSelection();
                        document.execCommand('insertImage', false, event.target.result);
                        this.editorArea.focus();
                        this._onContentChange();
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        };
    }

    /**
     * Insert Accordion FAQ Block
     */
    insertAccordion() {
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
            let node = sel.anchorNode;
            if (node && node.nodeType === Node.TEXT_NODE) node = node.parentElement;
            const accordion = node ? node.closest('details.article-accordion') : null;
            if (accordion && this.editorArea.contains(accordion)) {
                // Delete FAQ block
                accordion.remove();
                this.editorArea.focus();
                this._onContentChange();
                return;
            }
        }

        this._showPromptModal('Add FAQ Block', [
            { id: 'question', label: 'Question:', defaultValue: '', placeholder: 'What is DiginixIT?' },
            { id: 'answer', label: 'Answer:', defaultValue: '', placeholder: 'DiginixIT is a leading software & technology agency...' }
        ], (values) => {
            const q = values.question.trim();
            const a = values.answer.trim();
            if (q && a) {
                this._restoreSelection();
                const safeQ = this._escapeHtml(q);
                const safeA = this._escapeHtml(a);
                const html = `
                    <details class="article-accordion" open>
                        <summary>
                            <span>${safeQ}</span>
                            <button type="button" class="faq-delete-btn" onclick="this.closest('details').remove()">✕ Remove</button>
                        </summary>
                        <div class="faq-content">
                            <p>${safeA}</p>
                        </div>
                    </details>
                    <p></p>
                `;
                document.execCommand('insertHTML', false, html);
                this.editorArea.focus();
                this._onContentChange();
            }
        });
    }

    /**
     * Insert Custom Table
     */
    insertTable() {
        this._showPromptModal('Insert Table', [
            { id: 'rows', label: 'Number of Rows:', defaultValue: '3', type: 'number' },
            { id: 'cols', label: 'Number of Columns:', defaultValue: '3', type: 'number' }
        ], (values) => {
            const rows = parseInt(values.rows) || 1;
            const cols = parseInt(values.cols) || 1;

            let tableHtml = '<table><thead><tr>';
            for (let c = 0; c < cols; c++) {
                tableHtml += `<th>Header ${c + 1}</th>`;
            }
            tableHtml += '</tr></thead><tbody>';
            for (let r = 0; r < rows; r++) {
                tableHtml += '<tr>';
                for (let c = 0; c < cols; c++) {
                    tableHtml += `<td>Cell ${r + 1},${c + 1}</td>`;
                }
                tableHtml += '</tr>';
            }
            tableHtml += '</tbody></table><p></p>';

            this._restoreSelection();
            document.execCommand('insertHTML', false, tableHtml);
            this.editorArea.focus();
            this._onContentChange();
        });
    }

    /**
     * Insert ASCII Diagram
     */
    insertDiagram() {
        this._showPromptModal('Insert ASCII Diagram', [
            { id: 'text', label: 'ASCII Art / Diagram Text:', defaultValue: '', placeholder: '+---+   +---+\n| A |-->| B |\n+---+   +---+' }
        ], (values) => {
            const txt = values.text;
            if (txt) {
                this._restoreSelection();
                const pre = document.createElement('pre');
                pre.className = 'ascii-diagram';
                pre.textContent = txt;
                
                const sel = window.getSelection();
                if (sel && sel.rangeCount > 0 && this.editorArea.contains(sel.anchorNode)) {
                    const range = sel.getRangeAt(0);
                    range.deleteContents();
                    range.insertNode(pre);
                } else {
                    this.editorArea.appendChild(pre);
                }
                this.editorArea.focus();
                this._onContentChange();
            }
        });
    }

    /**
     * Apply inline styling directly to selected HTML elements/ranges
     */
    applySelectionStyle(styleName, styleValue) {
        const sel = window.getSelection();
        if (!sel || !sel.rangeCount) return;
        
        if (sel.isCollapsed) {
            // For collapsed selection (just cursor), insert an empty span and put cursor inside it
            const range = sel.getRangeAt(0);
            const span = document.createElement('span');
            span.style[styleName] = styleValue;
            span.innerHTML = '&#8203;'; // Zero-width space to keep selection
            range.insertNode(span);
            
            // Move cursor inside
            const newRange = document.createRange();
            newRange.setStart(span.firstChild, 1);
            newRange.setEnd(span.firstChild, 1);
            sel.removeAllRanges();
            sel.addRange(newRange);
            this.editorArea.focus();
            return;
        }

        const range = sel.getRangeAt(0);
        const container = document.createElement('div');
        container.appendChild(range.cloneContents());

        const span = document.createElement('span');
        span.style[styleName] = styleValue;
        span.innerHTML = container.innerHTML;

        this._restoreSelection();
        document.execCommand('insertHTML', false, span.outerHTML);
        this.editorArea.focus();
        this._onContentChange();
    }

    /**
     * Change case of selected text
     */
    changeCase(caseType) {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed || !sel.rangeCount) return;
        
        const range = sel.getRangeAt(0);
        const container = document.createElement('div');
        container.appendChild(range.cloneContents());
        
        const walker = document.createTreeWalker(
            container,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let textContent = '';
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
            textContent += node.nodeValue;
        }
        
        let newText = '';
        if (caseType === 'lowercase') {
            newText = textContent.toLowerCase();
        } else if (caseType === 'uppercase') {
            newText = textContent.toUpperCase();
        } else if (caseType === 'capitalize') {
            newText = textContent.replace(/\b\w/g, c => c.toUpperCase());
        } else if (caseType === 'sentence') {
            newText = textContent.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
        } else {
            return;
        }
        
        let offset = 0;
        textNodes.forEach(tNode => {
            const len = tNode.nodeValue.length;
            tNode.nodeValue = newText.substring(offset, offset + len);
            offset += len;
        });
        
        this._restoreSelection();
        document.execCommand('insertHTML', false, container.innerHTML);
        this.editorArea.focus();
        this._onContentChange();
    }

    /**
     * Search helper to find matches of a string inside editor text content
     */
    findTextInEditor(searchText, matchCase = false) {
        const textNodes = [];
        let textContent = '';
        const walker = document.createTreeWalker(
            this.editorArea,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let node;
        while (node = walker.nextNode()) {
            textNodes.push({
                node: node,
                start: textContent.length,
                end: textContent.length + node.nodeValue.length
            });
            textContent += node.nodeValue;
        }
        
        const flags = matchCase ? 'g' : 'gi';
        const escapedSearch = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedSearch, flags);
        
        const matches = [];
        let match;
        while ((match = regex.exec(textContent)) !== null) {
            matches.push({
                index: match.index,
                text: match[0]
            });
        }
        
        return { textNodes, matches, textContent };
    }

    /**
     * Select search match in the editor DOM
     */
    selectMatch(matchIndex, matchLength, textNodes) {
        const startPos = matchIndex;
        const endPos = matchIndex + matchLength;
        
        let startNode = null, startOffset = 0;
        let endNode = null, endOffset = 0;
        
        for (const info of textNodes) {
            if (startPos >= info.start && startPos <= info.end) {
                startNode = info.node;
                startOffset = startPos - info.start;
            }
            if (endPos >= info.start && endPos <= info.end) {
                endNode = info.node;
                endOffset = endPos - info.start;
            }
        }
        
        if (startNode && endNode) {
            const range = document.createRange();
            range.setStart(startNode, startOffset);
            range.setEnd(endNode, endOffset);
            
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            
            const parentEl = startNode.parentElement;
            if (parentEl) {
                parentEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            return range;
        }
        return null;
    }

    /**
     * Replace all occurrences of a search text
     */
    replaceAll(searchText, replacementText, matchCase = false) {
        const { textNodes, matches } = this.findTextInEditor(searchText, matchCase);
        if (!matches || matches.length === 0) return 0;
        
        // Loop back-to-front to keep offsets valid
        for (let i = matches.length - 1; i >= 0; i--) {
            const match = matches[i];
            const range = this.selectMatch(match.index, match.text.length, textNodes);
            if (range) {
                range.deleteContents();
                const node = document.createTextNode(replacementText);
                range.insertNode(node);
            }
        }
        
        this._onContentChange();
        return matches.length;
    }

    /**
     * Open Find and Replace dialog
     */
    openFindReplace() {
        this._saveSelection();
        
        const overlay = document.createElement('div');
        overlay.className = 'de-modal-overlay';
        overlay.innerHTML = `
            <div class="de-modal de-modal-find-replace">
                <div class="de-modal-header">
                    <h4 class="de-modal-title">Find and Replace</h4>
                    <button class="de-modal-close" type="button">✕</button>
                </div>
                <div class="de-modal-body">
                    <div class="de-modal-group">
                        <label class="de-modal-label">Find what:</label>
                        <input type="text" class="de-modal-input" id="de-find-text" placeholder="Enter text to find...">
                    </div>
                    <div class="de-modal-group">
                        <label class="de-modal-label">Replace with:</label>
                        <input type="text" class="de-modal-input" id="de-replace-text" placeholder="Enter replacement text...">
                    </div>
                    <div class="de-modal-group de-modal-checkbox-group">
                        <input type="checkbox" id="de-find-case">
                        <label for="de-find-case" class="de-modal-checkbox-label">Match case</label>
                    </div>
                    <div class="de-find-status" id="de-find-status-msg"></div>
                </div>
                <div class="de-modal-footer">
                    <button class="de-btn de-btn-secondary" id="de-btn-find-next" type="button">Find Next</button>
                    <button class="de-btn de-btn-secondary" id="de-btn-replace" type="button">Replace</button>
                    <button class="de-btn de-btn-primary" id="de-btn-replace-all" type="button">Replace All</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('active'), 50);
        
        const findInput = overlay.querySelector('#de-find-text');
        const replaceInput = overlay.querySelector('#de-replace-text');
        const caseCheckbox = overlay.querySelector('#de-find-case');
        const statusMsg = overlay.querySelector('#de-find-status-msg');
        
        const close = () => {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 250);
        };
        
        overlay.querySelector('.de-modal-close').onclick = close;
        
        const findNext = () => {
            const searchText = findInput.value;
            if (!searchText) {
                statusMsg.innerText = 'Please enter search text.';
                return;
            }
            
            const matchCase = caseCheckbox.checked;
            const searchData = this.findTextInEditor(searchText, matchCase);
            
            if (searchData.matches.length === 0) {
                statusMsg.innerText = 'No matches found.';
                return;
            }
            
            // Find next match relative to current cursor position
            let currentOffset = 0;
            const sel = window.getSelection();
            if (sel.rangeCount > 0) {
                const range = sel.getRangeAt(0);
                const walker = document.createTreeWalker(this.editorArea, NodeFilter.SHOW_TEXT, null, false);
                let node;
                let currentLength = 0;
                let foundStart = -1;
                while (node = walker.nextNode()) {
                    if (node === range.startContainer) {
                        foundStart = currentLength + range.startOffset;
                        break;
                    }
                    currentLength += node.nodeValue.length;
                }
                if (foundStart !== -1) {
                    currentOffset = foundStart;
                }
            }
            
            // Find first match that starts at or after current selection offset
            let nextMatch = searchData.matches.find(m => m.index >= currentOffset);
            if (!nextMatch && sel.rangeCount > 0) {
                // If cursor is at or inside the current match, next search should skip it. Let's find after current end
                const range = sel.getRangeAt(0);
                const currentEnd = currentOffset + range.toString().length;
                nextMatch = searchData.matches.find(m => m.index >= currentEnd);
            }
            
            if (!nextMatch) {
                nextMatch = searchData.matches[0];
                statusMsg.innerText = `Search wrapped. Match 1 of ${searchData.matches.length}`;
            } else {
                const matchNum = searchData.matches.indexOf(nextMatch) + 1;
                statusMsg.innerText = `Match ${matchNum} of ${searchData.matches.length}`;
            }
            
            this.selectMatch(nextMatch.index, searchText.length, searchData.textNodes);
        };
        
        const replace = () => {
            const searchText = findInput.value;
            const replacementText = replaceInput.value;
            if (!searchText) {
                statusMsg.innerText = 'Please enter search text.';
                return;
            }
            
            const sel = window.getSelection();
            if (sel.rangeCount > 0) {
                const range = sel.getRangeAt(0);
                const selectedText = range.toString();
                
                const matchCase = caseCheckbox.checked;
                const isMatch = matchCase 
                    ? selectedText === searchText 
                    : selectedText.toLowerCase() === searchText.toLowerCase();
                    
                if (isMatch) {
                    range.deleteContents();
                    const node = document.createTextNode(replacementText);
                    range.insertNode(node);
                    
                    const newRange = document.createRange();
                    newRange.setStartAfter(node);
                    newRange.setEndAfter(node);
                    sel.removeAllRanges();
                    sel.addRange(newRange);
                    
                    statusMsg.innerText = 'Replaced matching text.';
                    this._onContentChange();
                    
                    setTimeout(findNext, 200);
                    return;
                }
            }
            
            findNext();
        };
        
        const replaceAll = () => {
            const searchText = findInput.value;
            const replacementText = replaceInput.value;
            if (!searchText) {
                statusMsg.innerText = 'Please enter search text.';
                return;
            }
            
            const matchCase = caseCheckbox.checked;
            const replacedCount = this.replaceAll(searchText, replacementText, matchCase);
            statusMsg.innerText = `Replaced ${replacedCount} occurrences.`;
        };
        
        overlay.querySelector('#de-btn-find-next').onclick = findNext;
        overlay.querySelector('#de-btn-replace').onclick = replace;
        overlay.querySelector('#de-btn-replace-all').onclick = replaceAll;
        
        findInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                findNext();
            }
        });
        
        setTimeout(() => findInput.focus(), 150);
    }

    /**
     * Apply line spacing (line-height) to block elements intersecting selection
     */
    setLineSpacing(spacing) {
        this._restoreSelection();
        const sel = window.getSelection();
        if (!sel || !sel.rangeCount) return;
        
        const range = sel.getRangeAt(0);
        const blocks = new Set();
        
        const getBlockParent = (node) => {
            let curr = node;
            while (curr && curr !== this.editorArea) {
                const tag = curr.tagName ? curr.tagName.toLowerCase() : '';
                if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'blockquote', 'pre', 'td', 'th'].includes(tag)) {
                    return curr;
                }
                curr = curr.parentNode;
            }
            return null;
        };
        
        const startBlock = getBlockParent(range.startContainer);
        if (startBlock) blocks.add(startBlock);
        
        const endBlock = getBlockParent(range.endContainer);
        if (endBlock) blocks.add(endBlock);
        
        const walker = document.createTreeWalker(
            this.editorArea,
            NodeFilter.SHOW_ELEMENT,
            null,
            false
        );
        
        let node;
        let inRange = false;
        while (node = walker.nextNode()) {
            if (node === range.startContainer || node.contains(range.startContainer)) {
                inRange = true;
            }
            if (inRange) {
                const block = getBlockParent(node);
                if (block) blocks.add(block);
            }
            if (node === range.endContainer || node.contains(range.endContainer)) {
                break;
            }
        }
        
        if (blocks.size === 0) {
            document.execCommand('formatBlock', false, 'p');
            const newSel = window.getSelection();
            if (newSel.rangeCount) {
                const block = getBlockParent(newSel.getRangeAt(0).startContainer);
                if (block) blocks.add(block);
            }
        }
        
        blocks.forEach(block => {
            block.style.lineHeight = spacing;
        });
        
        this.editorArea.focus();
        this._onContentChange();
    }

    /**
     * Insert custom styled divider rule
     */
    insertHorizontalRule() {
        this._restoreSelection();
        document.execCommand('insertHTML', false, '<hr class="diginix-hr"><p></p>');
        this.editorArea.focus();
        this._onContentChange();
    }

    /**
     * Insert current date and time
     */
    insertDateTime() {
        this._restoreSelection();
        const now = new Date();
        const formatted = now.toLocaleString(undefined, {
            dateStyle: 'long',
            timeStyle: 'medium'
        });
        document.execCommand('insertHTML', false, `<span>${formatted}</span>`);
        this.editorArea.focus();
        this._onContentChange();
    }

    /**
     * Insert special character symbol picker
     */
    insertSpecialCharacter() {
        this._saveSelection();
        const categories = {
            'Math': ['±', '×', '÷', '=', '≠', '<', '>', '≤', '≥', '√', 'π', '∞', '▲', '▼'],
            'Currency': ['$', '€', '£', '¥', '¢', '₱', '₩', '₹', '¤'],
            'Typography': ['«', '»', '—', '–', '¶', '§', '©', '®', '™', '°', '•', '†', '‡', '№'],
            'Arrows': ['←', '↑', '→', '↓', '↔', '↕', '↖', '↗', '↘', '↙', '⇒', '⇔']
        };
        
        const overlay = document.createElement('div');
        overlay.className = 'de-modal-overlay';
        
        let tabsHtml = '';
        let gridsHtml = '';
        
        Object.keys(categories).forEach((cat, index) => {
            tabsHtml += `<button class="de-char-tab ${index === 0 ? 'active' : ''}" data-tab="${cat}">${cat}</button>`;
            gridsHtml += `
                <div class="de-char-grid ${index === 0 ? 'active' : ''}" id="de-char-grid-${cat}">
                    ${categories[cat].map(char => `<button type="button" class="de-char-btn" data-char="${char}">${char}</button>`).join('')}
                </div>
            `;
        });
        
        overlay.innerHTML = `
            <div class="de-modal de-modal-char">
                <div class="de-modal-header">
                    <h4 class="de-modal-title">Insert Special Character</h4>
                    <button class="de-modal-close" type="button">✕</button>
                </div>
                <div class="de-modal-body">
                    <div class="de-char-tabs">
                        ${tabsHtml}
                    </div>
                    <div class="de-char-grids-container">
                        ${gridsHtml}
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('active'), 50);
        
        const close = () => {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 250);
        };
        
        overlay.querySelector('.de-modal-close').onclick = close;
        
        overlay.querySelectorAll('.de-char-tab').forEach(tab => {
            tab.onclick = () => {
                overlay.querySelectorAll('.de-char-tab').forEach(t => t.classList.remove('active'));
                overlay.querySelectorAll('.de-char-grid').forEach(g => g.classList.remove('active'));
                
                tab.classList.add('active');
                const targetCat = tab.getAttribute('data-tab');
                overlay.querySelector(`#de-char-grid-${targetCat}`).classList.add('active');
            };
        });
        
        overlay.querySelectorAll('.de-char-btn').forEach(btn => {
            btn.onclick = () => {
                const char = btn.getAttribute('data-char');
                this._restoreSelection();
                document.execCommand('insertHTML', false, char);
                this.editorArea.focus();
                this._onContentChange();
                close();
            };
        });
    }

    /**
     * Print the document contents
     */
    printDocument() {
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        if (!printWindow) return;
        const content = this.getContent();
        printWindow.document.write(`
            <html>
            <head>
                <title>Print Document</title>
                <style>
                    body {
                        font-family: system-ui, -apple-system, sans-serif;
                        line-height: 1.6;
                        padding: 40px;
                        color: #000;
                        background: #fff;
                    }
                    pre {
                        background: #f4f4f5;
                        border: 1px solid #e4e4e7;
                        padding: 12px;
                        border-radius: 4px;
                        font-family: monospace;
                    }
                    blockquote {
                        border-left: 4px solid #3ecf8e;
                        padding-left: 16px;
                        margin-left: 0;
                        color: #666;
                        font-style: italic;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 16px 0;
                    }
                    th, td {
                        border: 1px solid #cbd5e1;
                        padding: 8px 12px;
                        text-align: left;
                    }
                    th {
                        background: #f8fafc;
                    }
                    details.article-accordion {
                        border: 1px solid #cbd5e1;
                        border-radius: 8px;
                        margin: 16px 0;
                        padding: 12px;
                    }
                    summary {
                        font-weight: bold;
                        cursor: pointer;
                    }
                    .faq-delete-btn {
                        display: none !important;
                    }
                </style>
            </head>
            <body>
                ${content}
                <script>
                    window.onload = function() {
                        window.print();
                        window.close();
                    }
                <\/script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    /**
     * Helper to escape HTML tags
     */
    _escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

// Export module
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = SleekEditor;
} else {
    window.SleekEditor = SleekEditor;
}
