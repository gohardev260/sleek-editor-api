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
