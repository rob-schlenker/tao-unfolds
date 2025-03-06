module.exports = {

"[project]/postcss.config.mjs [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/postcss.config.mjs/transform.ts { CONFIG => \"[project]/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>transform),
    "init": (()=>init)
});
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postcss/lib/postcss.mjs [postcss] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/postcss.config.mjs [postcss] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
const contextDir = process.cwd();
function toPath(file) {
    const relPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["relative"])(contextDir, file);
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"])(relPath)) {
        throw new Error(`Cannot depend on path (${file}) outside of root directory (${contextDir})`);
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"] !== "/" ? relPath.replaceAll(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"], "/") : relPath;
}
let processor;
const init = async (ipc)=>{
    let config = __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__["default"];
    if (typeof config === "function") {
        config = await config({
            env: "development"
        });
    }
    if (typeof config === "undefined") {
        throw new Error("PostCSS config is undefined (make sure to export an function or object from config file)");
    }
    let plugins;
    if (Array.isArray(config.plugins)) {
        plugins = config.plugins.map((plugin)=>{
            if (Array.isArray(plugin)) {
                return plugin;
            } else if (typeof plugin === "string") {
                return [
                    plugin,
                    {}
                ];
            } else {
                return plugin;
            }
        });
    } else if (typeof config.plugins === "object") {
        plugins = Object.entries(config.plugins).filter(([, options])=>options);
    } else {
        plugins = [];
    }
    const loadedPlugins = plugins.map((plugin)=>{
        if (Array.isArray(plugin)) {
            const [arg, options] = plugin;
            let pluginFactory = arg;
            if (typeof pluginFactory === "string") {
                pluginFactory = require(/* turbopackIgnore: true */ pluginFactory);
            }
            if (pluginFactory.default) {
                pluginFactory = pluginFactory.default;
            }
            return pluginFactory(options);
        }
        return plugin;
    });
    processor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__["default"])(loadedPlugins);
};
async function transform(ipc, cssContent, name, sourceMap) {
    const { css, map, messages } = await processor.process(cssContent, {
        from: name,
        to: name,
        map: sourceMap ? {
            inline: false,
            annotation: false
        } : undefined
    });
    const assets = [];
    for (const msg of messages){
        switch(msg.type){
            case "asset":
                assets.push({
                    file: msg.file,
                    content: msg.content,
                    sourceMap: !sourceMap ? undefined : typeof msg.sourceMap === "string" ? msg.sourceMap : JSON.stringify(msg.sourceMap)
                });
                break;
            case "dependency":
            case "missing-dependency":
                ipc.sendInfo({
                    type: "fileDependency",
                    path: toPath(msg.file)
                });
                break;
            case "build-dependency":
                ipc.sendInfo({
                    type: "buildDependency",
                    path: toPath(msg.file)
                });
                break;
            case "dir-dependency":
                ipc.sendInfo({
                    type: "dirDependency",
                    path: toPath(msg.dir),
                    glob: msg.glob
                });
                break;
            case "context-dependency":
                ipc.sendInfo({
                    type: "dirDependency",
                    path: toPath(msg.file),
                    glob: "**"
                });
                break;
            default:
                break;
        }
    }
    return {
        css,
        map: sourceMap ? JSON.stringify(map) : undefined,
        assets
    };
}
}}),
"[project]/node_modules/postcss/lib/at-rule.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/postcss/lib/comment.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/postcss/lib/css-syntax-error.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/postcss/lib/declaration.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/postcss/lib/document.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/postcss/lib/fromJSON.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/postcss/lib/input.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/postcss/lib/lazy-result.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/postcss/lib/list.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let list = {
    comma (string) {
        return list.split(string, [
            ','
        ], true);
    },
    space (string) {
        let spaces = [
            ' ',
            '\n',
            '\t'
        ];
        return list.split(string, spaces);
    },
    split (string, separators, last) {
        let array = [];
        let current = '';
        let split = false;
        let func = 0;
        let inQuote = false;
        let prevQuote = '';
        let escape = false;
        for (let letter of string){
            if (escape) {
                escape = false;
            } else if (letter === '\\') {
                escape = true;
            } else if (inQuote) {
                if (letter === prevQuote) {
                    inQuote = false;
                }
            } else if (letter === '"' || letter === "'") {
                inQuote = true;
                prevQuote = letter;
            } else if (letter === '(') {
                func += 1;
            } else if (letter === ')') {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.includes(letter)) split = true;
            }
            if (split) {
                if (current !== '') array.push(current.trim());
                current = '';
                split = false;
            } else {
                current += letter;
            }
        }
        if (last || current !== '') array.push(current.trim());
        return array;
    }
};
module.exports = list;
list.default = list;
}}),
"[project]/node_modules/postcss/lib/stringifier.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const DEFAULT_RAW = {
    after: '\n',
    beforeClose: '\n',
    beforeComment: '\n',
    beforeDecl: '\n',
    beforeOpen: ' ',
    beforeRule: '\n',
    colon: ': ',
    commentLeft: ' ',
    commentRight: ' ',
    emptyBody: '',
    indent: '    ',
    semicolon: false
};
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
class Stringifier {
    constructor(builder){
        this.builder = builder;
    }
    atrule(node, semicolon) {
        let name = '@' + node.name;
        let params = node.params ? this.rawValue(node, 'params') : '';
        if (typeof node.raws.afterName !== 'undefined') {
            name += node.raws.afterName;
        } else if (params) {
            name += ' ';
        }
        if (node.nodes) {
            this.block(node, name + params);
        } else {
            let end = (node.raws.between || '') + (semicolon ? ';' : '');
            this.builder(name + params + end, node);
        }
    }
    beforeAfter(node, detect) {
        let value;
        if (node.type === 'decl') {
            value = this.raw(node, null, 'beforeDecl');
        } else if (node.type === 'comment') {
            value = this.raw(node, null, 'beforeComment');
        } else if (detect === 'before') {
            value = this.raw(node, null, 'beforeRule');
        } else {
            value = this.raw(node, null, 'beforeClose');
        }
        let buf = node.parent;
        let depth = 0;
        while(buf && buf.type !== 'root'){
            depth += 1;
            buf = buf.parent;
        }
        if (value.includes('\n')) {
            let indent = this.raw(node, null, 'indent');
            if (indent.length) {
                for(let step = 0; step < depth; step++)value += indent;
            }
        }
        return value;
    }
    block(node, start) {
        let between = this.raw(node, 'between', 'beforeOpen');
        this.builder(start + between + '{', node, 'start');
        let after;
        if (node.nodes && node.nodes.length) {
            this.body(node);
            after = this.raw(node, 'after');
        } else {
            after = this.raw(node, 'after', 'emptyBody');
        }
        if (after) this.builder(after);
        this.builder('}', node, 'end');
    }
    body(node) {
        let last = node.nodes.length - 1;
        while(last > 0){
            if (node.nodes[last].type !== 'comment') break;
            last -= 1;
        }
        let semicolon = this.raw(node, 'semicolon');
        for(let i = 0; i < node.nodes.length; i++){
            let child = node.nodes[i];
            let before = this.raw(child, 'before');
            if (before) this.builder(before);
            this.stringify(child, last !== i || semicolon);
        }
    }
    comment(node) {
        let left = this.raw(node, 'left', 'commentLeft');
        let right = this.raw(node, 'right', 'commentRight');
        this.builder('/*' + left + node.text + right + '*/', node);
    }
    decl(node, semicolon) {
        let between = this.raw(node, 'between', 'colon');
        let string = node.prop + between + this.rawValue(node, 'value');
        if (node.important) {
            string += node.raws.important || ' !important';
        }
        if (semicolon) string += ';';
        this.builder(string, node);
    }
    document(node) {
        this.body(node);
    }
    raw(node, own, detect) {
        let value;
        if (!detect) detect = own;
        // Already had
        if (own) {
            value = node.raws[own];
            if (typeof value !== 'undefined') return value;
        }
        let parent = node.parent;
        if (detect === 'before') {
            // Hack for first rule in CSS
            if (!parent || parent.type === 'root' && parent.first === node) {
                return '';
            }
            // `root` nodes in `document` should use only their own raws
            if (parent && parent.type === 'document') {
                return '';
            }
        }
        // Floating child without parent
        if (!parent) return DEFAULT_RAW[detect];
        // Detect style by other nodes
        let root = node.root();
        if (!root.rawCache) root.rawCache = {};
        if (typeof root.rawCache[detect] !== 'undefined') {
            return root.rawCache[detect];
        }
        if (detect === 'before' || detect === 'after') {
            return this.beforeAfter(node, detect);
        } else {
            let method = 'raw' + capitalize(detect);
            if (this[method]) {
                value = this[method](root, node);
            } else {
                root.walk((i)=>{
                    value = i.raws[own];
                    if (typeof value !== 'undefined') return false;
                });
            }
        }
        if (typeof value === 'undefined') value = DEFAULT_RAW[detect];
        root.rawCache[detect] = value;
        return value;
    }
    rawBeforeClose(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length > 0) {
                if (typeof i.raws.after !== 'undefined') {
                    value = i.raws.after;
                    if (value.includes('\n')) {
                        value = value.replace(/[^\n]+$/, '');
                    }
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawBeforeComment(root, node) {
        let value;
        root.walkComments((i)=>{
            if (typeof i.raws.before !== 'undefined') {
                value = i.raws.before;
                if (value.includes('\n')) {
                    value = value.replace(/[^\n]+$/, '');
                }
                return false;
            }
        });
        if (typeof value === 'undefined') {
            value = this.raw(node, null, 'beforeDecl');
        } else if (value) {
            value = value.replace(/\S/g, '');
        }
        return value;
    }
    rawBeforeDecl(root, node) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.before !== 'undefined') {
                value = i.raws.before;
                if (value.includes('\n')) {
                    value = value.replace(/[^\n]+$/, '');
                }
                return false;
            }
        });
        if (typeof value === 'undefined') {
            value = this.raw(node, null, 'beforeRule');
        } else if (value) {
            value = value.replace(/\S/g, '');
        }
        return value;
    }
    rawBeforeOpen(root) {
        let value;
        root.walk((i)=>{
            if (i.type !== 'decl') {
                value = i.raws.between;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawBeforeRule(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && (i.parent !== root || root.first !== i)) {
                if (typeof i.raws.before !== 'undefined') {
                    value = i.raws.before;
                    if (value.includes('\n')) {
                        value = value.replace(/[^\n]+$/, '');
                    }
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawColon(root) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.between !== 'undefined') {
                value = i.raws.between.replace(/[^\s:]/g, '');
                return false;
            }
        });
        return value;
    }
    rawEmptyBody(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length === 0) {
                value = i.raws.after;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawIndent(root) {
        if (root.raws.indent) return root.raws.indent;
        let value;
        root.walk((i)=>{
            let p = i.parent;
            if (p && p !== root && p.parent && p.parent === root) {
                if (typeof i.raws.before !== 'undefined') {
                    let parts = i.raws.before.split('\n');
                    value = parts[parts.length - 1];
                    value = value.replace(/\S/g, '');
                    return false;
                }
            }
        });
        return value;
    }
    rawSemicolon(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length && i.last.type === 'decl') {
                value = i.raws.semicolon;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawValue(node, prop) {
        let value = node[prop];
        let raw = node.raws[prop];
        if (raw && raw.value === value) {
            return raw.raw;
        }
        return value;
    }
    root(node) {
        this.body(node);
        if (node.raws.after) this.builder(node.raws.after);
    }
    rule(node) {
        this.block(node, this.rawValue(node, 'selector'));
        if (node.raws.ownSemicolon) {
            this.builder(node.raws.ownSemicolon, node, 'end');
        }
    }
    stringify(node, semicolon) {
        /* c8 ignore start */ if (!this[node.type]) {
            throw new Error('Unknown AST node type ' + node.type + '. ' + 'Maybe you need to change PostCSS stringifier.');
        }
        /* c8 ignore stop */ this[node.type](node, semicolon);
    }
}
module.exports = Stringifier;
Stringifier.default = Stringifier;
}}),
"[project]/node_modules/postcss/lib/stringify.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let Stringifier = __turbopack_context__.r("[project]/node_modules/postcss/lib/stringifier.js [postcss] (ecmascript)");
function stringify(node, builder) {
    let str = new Stringifier(builder);
    str.stringify(node);
}
module.exports = stringify;
stringify.default = stringify;
}}),
"[project]/node_modules/postcss/lib/symbols.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
module.exports.isClean = Symbol('isClean');
module.exports.my = Symbol('my');
}}),
"[project]/node_modules/postcss/lib/node.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let CssSyntaxError = __turbopack_context__.r("[project]/node_modules/postcss/lib/css-syntax-error.js [postcss] (ecmascript)");
let Stringifier = __turbopack_context__.r("[project]/node_modules/postcss/lib/stringifier.js [postcss] (ecmascript)");
let stringify = __turbopack_context__.r("[project]/node_modules/postcss/lib/stringify.js [postcss] (ecmascript)");
let { isClean, my } = __turbopack_context__.r("[project]/node_modules/postcss/lib/symbols.js [postcss] (ecmascript)");
function cloneNode(obj, parent) {
    let cloned = new obj.constructor();
    for(let i in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, i)) {
            continue;
        }
        if (i === 'proxyCache') continue;
        let value = obj[i];
        let type = typeof value;
        if (i === 'parent' && type === 'object') {
            if (parent) cloned[i] = parent;
        } else if (i === 'source') {
            cloned[i] = value;
        } else if (Array.isArray(value)) {
            cloned[i] = value.map((j)=>cloneNode(j, cloned));
        } else {
            if (type === 'object' && value !== null) value = cloneNode(value);
            cloned[i] = value;
        }
    }
    return cloned;
}
function sourceOffset(inputCSS, position) {
    // Not all custom syntaxes support `offset` in `source.start` and `source.end`
    if (position && typeof position.offset !== 'undefined') {
        return position.offset;
    }
    let column = 1;
    let line = 1;
    let offset = 0;
    for(let i = 0; i < inputCSS.length; i++){
        if (line === position.line && column === position.column) {
            offset = i;
            break;
        }
        if (inputCSS[i] === '\n') {
            column = 1;
            line += 1;
        } else {
            column += 1;
        }
    }
    return offset;
}
class Node {
    get proxyOf() {
        return this;
    }
    constructor(defaults = {}){
        this.raws = {};
        this[isClean] = false;
        this[my] = true;
        for(let name in defaults){
            if (name === 'nodes') {
                this.nodes = [];
                for (let node of defaults[name]){
                    if (typeof node.clone === 'function') {
                        this.append(node.clone());
                    } else {
                        this.append(node);
                    }
                }
            } else {
                this[name] = defaults[name];
            }
        }
    }
    addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s = this.source;
            error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
        }
        return error;
    }
    after(add) {
        this.parent.insertAfter(this, add);
        return this;
    }
    assign(overrides = {}) {
        for(let name in overrides){
            this[name] = overrides[name];
        }
        return this;
    }
    before(add) {
        this.parent.insertBefore(this, add);
        return this;
    }
    cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween) delete this.raws.between;
    }
    clone(overrides = {}) {
        let cloned = cloneNode(this);
        for(let name in overrides){
            cloned[name] = overrides[name];
        }
        return cloned;
    }
    cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
    }
    cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
    }
    error(message, opts = {}) {
        if (this.source) {
            let { end, start } = this.rangeBy(opts);
            return this.source.input.error(message, {
                column: start.column,
                line: start.line
            }, {
                column: end.column,
                line: end.line
            }, opts);
        }
        return new CssSyntaxError(message);
    }
    getProxyProcessor() {
        return {
            get (node, prop) {
                if (prop === 'proxyOf') {
                    return node;
                } else if (prop === 'root') {
                    return ()=>node.root().toProxy();
                } else {
                    return node[prop];
                }
            },
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === 'prop' || prop === 'value' || prop === 'name' || prop === 'params' || prop === 'important' || /* c8 ignore next */ prop === 'text') {
                    node.markDirty();
                }
                return true;
            }
        };
    }
    /* c8 ignore next 3 */ markClean() {
        this[isClean] = true;
    }
    markDirty() {
        if (this[isClean]) {
            this[isClean] = false;
            let next = this;
            while(next = next.parent){
                next[isClean] = false;
            }
        }
    }
    next() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index + 1];
    }
    positionBy(opts) {
        let pos = this.source.start;
        if (opts.index) {
            pos = this.positionInside(opts.index);
        } else if (opts.word) {
            let inputString = 'document' in this.source.input ? this.source.input.document : this.source.input.css;
            let stringRepresentation = inputString.slice(sourceOffset(inputString, this.source.start), sourceOffset(inputString, this.source.end));
            let index = stringRepresentation.indexOf(opts.word);
            if (index !== -1) pos = this.positionInside(index);
        }
        return pos;
    }
    positionInside(index) {
        let column = this.source.start.column;
        let line = this.source.start.line;
        let inputString = 'document' in this.source.input ? this.source.input.document : this.source.input.css;
        let offset = sourceOffset(inputString, this.source.start);
        let end = offset + index;
        for(let i = offset; i < end; i++){
            if (inputString[i] === '\n') {
                column = 1;
                line += 1;
            } else {
                column += 1;
            }
        }
        return {
            column,
            line
        };
    }
    prev() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index - 1];
    }
    rangeBy(opts) {
        let start = {
            column: this.source.start.column,
            line: this.source.start.line
        };
        let end = this.source.end ? {
            column: this.source.end.column + 1,
            line: this.source.end.line
        } : {
            column: start.column + 1,
            line: start.line
        };
        if (opts.word) {
            let inputString = 'document' in this.source.input ? this.source.input.document : this.source.input.css;
            let stringRepresentation = inputString.slice(sourceOffset(inputString, this.source.start), sourceOffset(inputString, this.source.end));
            let index = stringRepresentation.indexOf(opts.word);
            if (index !== -1) {
                start = this.positionInside(index);
                end = this.positionInside(index + opts.word.length);
            }
        } else {
            if (opts.start) {
                start = {
                    column: opts.start.column,
                    line: opts.start.line
                };
            } else if (opts.index) {
                start = this.positionInside(opts.index);
            }
            if (opts.end) {
                end = {
                    column: opts.end.column,
                    line: opts.end.line
                };
            } else if (typeof opts.endIndex === 'number') {
                end = this.positionInside(opts.endIndex);
            } else if (opts.index) {
                end = this.positionInside(opts.index + 1);
            }
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) {
            end = {
                column: start.column + 1,
                line: start.line
            };
        }
        return {
            end,
            start
        };
    }
    raw(prop, defaultType) {
        let str = new Stringifier();
        return str.raw(this, prop, defaultType);
    }
    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.parent = undefined;
        return this;
    }
    replaceWith(...nodes) {
        if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node of nodes){
                if (node === this) {
                    foundSelf = true;
                } else if (foundSelf) {
                    this.parent.insertAfter(bookmark, node);
                    bookmark = node;
                } else {
                    this.parent.insertBefore(bookmark, node);
                }
            }
            if (!foundSelf) {
                this.remove();
            }
        }
        return this;
    }
    root() {
        let result = this;
        while(result.parent && result.parent.type !== 'document'){
            result = result.parent;
        }
        return result;
    }
    toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || new Map();
        let inputsNextIndex = 0;
        for(let name in this){
            if (!Object.prototype.hasOwnProperty.call(this, name)) {
                continue;
            }
            if (name === 'parent' || name === 'proxyCache') continue;
            let value = this[name];
            if (Array.isArray(value)) {
                fixed[name] = value.map((i)=>{
                    if (typeof i === 'object' && i.toJSON) {
                        return i.toJSON(null, inputs);
                    } else {
                        return i;
                    }
                });
            } else if (typeof value === 'object' && value.toJSON) {
                fixed[name] = value.toJSON(null, inputs);
            } else if (name === 'source') {
                let inputId = inputs.get(value.input);
                if (inputId == null) {
                    inputId = inputsNextIndex;
                    inputs.set(value.input, inputsNextIndex);
                    inputsNextIndex++;
                }
                fixed[name] = {
                    end: value.end,
                    inputId,
                    start: value.start
                };
            } else {
                fixed[name] = value;
            }
        }
        if (emitInputs) {
            fixed.inputs = [
                ...inputs.keys()
            ].map((input)=>input.toJSON());
        }
        return fixed;
    }
    toProxy() {
        if (!this.proxyCache) {
            this.proxyCache = new Proxy(this, this.getProxyProcessor());
        }
        return this.proxyCache;
    }
    toString(stringifier = stringify) {
        if (stringifier.stringify) stringifier = stringifier.stringify;
        let result = '';
        stringifier(this, (i)=>{
            result += i;
        });
        return result;
    }
    warn(result, text, opts) {
        let data = {
            node: this
        };
        for(let i in opts)data[i] = opts[i];
        return result.warn(text, data);
    }
}
module.exports = Node;
Node.default = Node;
}}),
"[project]/node_modules/postcss/lib/root.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let Container = __turbopack_context__.r("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let LazyResult, Processor;
class Root extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'root';
        if (!this.nodes) this.nodes = [];
    }
    normalize(child, sample, type) {
        let nodes = super.normalize(child);
        if (sample) {
            if (type === 'prepend') {
                if (this.nodes.length > 1) {
                    sample.raws.before = this.nodes[1].raws.before;
                } else {
                    delete sample.raws.before;
                }
            } else if (this.first !== sample) {
                for (let node of nodes){
                    node.raws.before = sample.raws.before;
                }
            }
        }
        return nodes;
    }
    removeChild(child, ignore) {
        let index = this.index(child);
        if (!ignore && index === 0 && this.nodes.length > 1) {
            this.nodes[1].raws.before = this.nodes[index].raws.before;
        }
        return super.removeChild(child);
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Root.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Root.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Root;
Root.default = Root;
Container.registerRoot(Root);
}}),
"[project]/node_modules/postcss/lib/rule.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let Container = __turbopack_context__.r("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let list = __turbopack_context__.r("[project]/node_modules/postcss/lib/list.js [postcss] (ecmascript)");
class Rule extends Container {
    get selectors() {
        return list.comma(this.selector);
    }
    set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
        this.selector = values.join(sep);
    }
    constructor(defaults){
        super(defaults);
        this.type = 'rule';
        if (!this.nodes) this.nodes = [];
    }
}
module.exports = Rule;
Rule.default = Rule;
Container.registerRule(Rule);
}}),
"[project]/node_modules/postcss/lib/tokenize.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = '\\'.charCodeAt(0);
const SLASH = '/'.charCodeAt(0);
const NEWLINE = '\n'.charCodeAt(0);
const SPACE = ' '.charCodeAt(0);
const FEED = '\f'.charCodeAt(0);
const TAB = '\t'.charCodeAt(0);
const CR = '\r'.charCodeAt(0);
const OPEN_SQUARE = '['.charCodeAt(0);
const CLOSE_SQUARE = ']'.charCodeAt(0);
const OPEN_PARENTHESES = '('.charCodeAt(0);
const CLOSE_PARENTHESES = ')'.charCodeAt(0);
const OPEN_CURLY = '{'.charCodeAt(0);
const CLOSE_CURLY = '}'.charCodeAt(0);
const SEMICOLON = ';'.charCodeAt(0);
const ASTERISK = '*'.charCodeAt(0);
const COLON = ':'.charCodeAt(0);
const AT = '@'.charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
module.exports = function tokenizer(input, options = {}) {
    let css = input.css.valueOf();
    let ignore = options.ignoreErrors;
    let code, content, escape, next, quote;
    let currentToken, escaped, escapePos, n, prev;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
        return pos;
    }
    function unclosed(what) {
        throw input.error('Unclosed ' + what, pos);
    }
    function endOfFile() {
        return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
        if (returned.length) return returned.pop();
        if (pos >= length) return;
        let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
        code = css.charCodeAt(pos);
        switch(code){
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED:
                {
                    next = pos;
                    do {
                        next += 1;
                        code = css.charCodeAt(next);
                    }while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED)
                    currentToken = [
                        'space',
                        css.slice(pos, next)
                    ];
                    pos = next - 1;
                    break;
                }
            case OPEN_SQUARE:
            case CLOSE_SQUARE:
            case OPEN_CURLY:
            case CLOSE_CURLY:
            case COLON:
            case SEMICOLON:
            case CLOSE_PARENTHESES:
                {
                    let controlChar = String.fromCharCode(code);
                    currentToken = [
                        controlChar,
                        controlChar,
                        pos
                    ];
                    break;
                }
            case OPEN_PARENTHESES:
                {
                    prev = buffer.length ? buffer.pop()[1] : '';
                    n = css.charCodeAt(pos + 1);
                    if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
                        next = pos;
                        do {
                            escaped = false;
                            next = css.indexOf(')', next + 1);
                            if (next === -1) {
                                if (ignore || ignoreUnclosed) {
                                    next = pos;
                                    break;
                                } else {
                                    unclosed('bracket');
                                }
                            }
                            escapePos = next;
                            while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                                escapePos -= 1;
                                escaped = !escaped;
                            }
                        }while (escaped)
                        currentToken = [
                            'brackets',
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        pos = next;
                    } else {
                        next = css.indexOf(')', pos + 1);
                        content = css.slice(pos, next + 1);
                        if (next === -1 || RE_BAD_BRACKET.test(content)) {
                            currentToken = [
                                '(',
                                '(',
                                pos
                            ];
                        } else {
                            currentToken = [
                                'brackets',
                                content,
                                pos,
                                next
                            ];
                            pos = next;
                        }
                    }
                    break;
                }
            case SINGLE_QUOTE:
            case DOUBLE_QUOTE:
                {
                    quote = code === SINGLE_QUOTE ? "'" : '"';
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(quote, next + 1);
                        if (next === -1) {
                            if (ignore || ignoreUnclosed) {
                                next = pos + 1;
                                break;
                            } else {
                                unclosed('string');
                            }
                        }
                        escapePos = next;
                        while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    }while (escaped)
                    currentToken = [
                        'string',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            case AT:
                {
                    RE_AT_END.lastIndex = pos + 1;
                    RE_AT_END.test(css);
                    if (RE_AT_END.lastIndex === 0) {
                        next = css.length - 1;
                    } else {
                        next = RE_AT_END.lastIndex - 2;
                    }
                    currentToken = [
                        'at-word',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            case BACKSLASH:
                {
                    next = pos;
                    escape = true;
                    while(css.charCodeAt(next + 1) === BACKSLASH){
                        next += 1;
                        escape = !escape;
                    }
                    code = css.charCodeAt(next + 1);
                    if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                        next += 1;
                        if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                            while(RE_HEX_ESCAPE.test(css.charAt(next + 1))){
                                next += 1;
                            }
                            if (css.charCodeAt(next + 1) === SPACE) {
                                next += 1;
                            }
                        }
                    }
                    currentToken = [
                        'word',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            default:
                {
                    if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                        next = css.indexOf('*/', pos + 2) + 1;
                        if (next === 0) {
                            if (ignore || ignoreUnclosed) {
                                next = css.length;
                            } else {
                                unclosed('comment');
                            }
                        }
                        currentToken = [
                            'comment',
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        pos = next;
                    } else {
                        RE_WORD_END.lastIndex = pos + 1;
                        RE_WORD_END.test(css);
                        if (RE_WORD_END.lastIndex === 0) {
                            next = css.length - 1;
                        } else {
                            next = RE_WORD_END.lastIndex - 2;
                        }
                        currentToken = [
                            'word',
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        buffer.push(currentToken);
                        pos = next;
                    }
                    break;
                }
        }
        pos++;
        return currentToken;
    }
    function back(token) {
        returned.push(token);
    }
    return {
        back,
        endOfFile,
        nextToken,
        position
    };
};
}}),
"[project]/node_modules/postcss/lib/parser.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let AtRule = __turbopack_context__.r("[project]/node_modules/postcss/lib/at-rule.js [postcss] (ecmascript)");
let Comment = __turbopack_context__.r("[project]/node_modules/postcss/lib/comment.js [postcss] (ecmascript)");
let Declaration = __turbopack_context__.r("[project]/node_modules/postcss/lib/declaration.js [postcss] (ecmascript)");
let Root = __turbopack_context__.r("[project]/node_modules/postcss/lib/root.js [postcss] (ecmascript)");
let Rule = __turbopack_context__.r("[project]/node_modules/postcss/lib/rule.js [postcss] (ecmascript)");
let tokenizer = __turbopack_context__.r("[project]/node_modules/postcss/lib/tokenize.js [postcss] (ecmascript)");
const SAFE_COMMENT_NEIGHBOR = {
    empty: true,
    space: true
};
function findLastWithPosition(tokens) {
    for(let i = tokens.length - 1; i >= 0; i--){
        let token = tokens[i];
        let pos = token[3] || token[2];
        if (pos) return pos;
    }
}
class Parser {
    constructor(input){
        this.input = input;
        this.root = new Root();
        this.current = this.root;
        this.spaces = '';
        this.semicolon = false;
        this.createTokenizer();
        this.root.source = {
            input,
            start: {
                column: 1,
                line: 1,
                offset: 0
            }
        };
    }
    atrule(token) {
        let node = new AtRule();
        node.name = token[1].slice(1);
        if (node.name === '') {
            this.unnamedAtrule(node, token);
        }
        this.init(node, token[2]);
        let type;
        let prev;
        let shift;
        let last = false;
        let open = false;
        let params = [];
        let brackets = [];
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            type = token[0];
            if (type === '(' || type === '[') {
                brackets.push(type === '(' ? ')' : ']');
            } else if (type === '{' && brackets.length > 0) {
                brackets.push('}');
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
            }
            if (brackets.length === 0) {
                if (type === ';') {
                    node.source.end = this.getPosition(token[2]);
                    node.source.end.offset++;
                    this.semicolon = true;
                    break;
                } else if (type === '{') {
                    open = true;
                    break;
                } else if (type === '}') {
                    if (params.length > 0) {
                        shift = params.length - 1;
                        prev = params[shift];
                        while(prev && prev[0] === 'space'){
                            prev = params[--shift];
                        }
                        if (prev) {
                            node.source.end = this.getPosition(prev[3] || prev[2]);
                            node.source.end.offset++;
                        }
                    }
                    this.end(token);
                    break;
                } else {
                    params.push(token);
                }
            } else {
                params.push(token);
            }
            if (this.tokenizer.endOfFile()) {
                last = true;
                break;
            }
        }
        node.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
            node.raws.afterName = this.spacesAndCommentsFromStart(params);
            this.raw(node, 'params', params);
            if (last) {
                token = params[params.length - 1];
                node.source.end = this.getPosition(token[3] || token[2]);
                node.source.end.offset++;
                this.spaces = node.raws.between;
                node.raws.between = '';
            }
        } else {
            node.raws.afterName = '';
            node.params = '';
        }
        if (open) {
            node.nodes = [];
            this.current = node;
        }
    }
    checkMissedSemicolon(tokens) {
        let colon = this.colon(tokens);
        if (colon === false) return;
        let founded = 0;
        let token;
        for(let j = colon - 1; j >= 0; j--){
            token = tokens[j];
            if (token[0] !== 'space') {
                founded += 1;
                if (founded === 2) break;
            }
        }
        // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
        // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
        // And because we need it after that one we do +1 to get the next one.
        throw this.input.error('Missed semicolon', token[0] === 'word' ? token[3] + 1 : token[2]);
    }
    colon(tokens) {
        let brackets = 0;
        let prev, token, type;
        for (let [i, element] of tokens.entries()){
            token = element;
            type = token[0];
            if (type === '(') {
                brackets += 1;
            }
            if (type === ')') {
                brackets -= 1;
            }
            if (brackets === 0 && type === ':') {
                if (!prev) {
                    this.doubleColon(token);
                } else if (prev[0] === 'word' && prev[1] === 'progid') {
                    continue;
                } else {
                    return i;
                }
            }
            prev = token;
        }
        return false;
    }
    comment(token) {
        let node = new Comment();
        this.init(node, token[2]);
        node.source.end = this.getPosition(token[3] || token[2]);
        node.source.end.offset++;
        let text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
            node.text = '';
            node.raws.left = text;
            node.raws.right = '';
        } else {
            let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
            node.text = match[2];
            node.raws.left = match[1];
            node.raws.right = match[3];
        }
    }
    createTokenizer() {
        this.tokenizer = tokenizer(this.input);
    }
    decl(tokens, customProperty) {
        let node = new Declaration();
        this.init(node, tokens[0][2]);
        let last = tokens[tokens.length - 1];
        if (last[0] === ';') {
            this.semicolon = true;
            tokens.pop();
        }
        node.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
        node.source.end.offset++;
        while(tokens[0][0] !== 'word'){
            if (tokens.length === 1) this.unknownWord(tokens);
            node.raws.before += tokens.shift()[1];
        }
        node.source.start = this.getPosition(tokens[0][2]);
        node.prop = '';
        while(tokens.length){
            let type = tokens[0][0];
            if (type === ':' || type === 'space' || type === 'comment') {
                break;
            }
            node.prop += tokens.shift()[1];
        }
        node.raws.between = '';
        let token;
        while(tokens.length){
            token = tokens.shift();
            if (token[0] === ':') {
                node.raws.between += token[1];
                break;
            } else {
                if (token[0] === 'word' && /\w/.test(token[1])) {
                    this.unknownWord([
                        token
                    ]);
                }
                node.raws.between += token[1];
            }
        }
        if (node.prop[0] === '_' || node.prop[0] === '*') {
            node.raws.before += node.prop[0];
            node.prop = node.prop.slice(1);
        }
        let firstSpaces = [];
        let next;
        while(tokens.length){
            next = tokens[0][0];
            if (next !== 'space' && next !== 'comment') break;
            firstSpaces.push(tokens.shift());
        }
        this.precheckMissedSemicolon(tokens);
        for(let i = tokens.length - 1; i >= 0; i--){
            token = tokens[i];
            if (token[1].toLowerCase() === '!important') {
                node.important = true;
                let string = this.stringFrom(tokens, i);
                string = this.spacesFromEnd(tokens) + string;
                if (string !== ' !important') node.raws.important = string;
                break;
            } else if (token[1].toLowerCase() === 'important') {
                let cache = tokens.slice(0);
                let str = '';
                for(let j = i; j > 0; j--){
                    let type = cache[j][0];
                    if (str.trim().startsWith('!') && type !== 'space') {
                        break;
                    }
                    str = cache.pop()[1] + str;
                }
                if (str.trim().startsWith('!')) {
                    node.important = true;
                    node.raws.important = str;
                    tokens = cache;
                }
            }
            if (token[0] !== 'space' && token[0] !== 'comment') {
                break;
            }
        }
        let hasWord = tokens.some((i)=>i[0] !== 'space' && i[0] !== 'comment');
        if (hasWord) {
            node.raws.between += firstSpaces.map((i)=>i[1]).join('');
            firstSpaces = [];
        }
        this.raw(node, 'value', firstSpaces.concat(tokens), customProperty);
        if (node.value.includes(':') && !customProperty) {
            this.checkMissedSemicolon(tokens);
        }
    }
    doubleColon(token) {
        throw this.input.error('Double colon', {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    emptyRule(token) {
        let node = new Rule();
        this.init(node, token[2]);
        node.selector = '';
        node.raws.between = '';
        this.current = node;
    }
    end(token) {
        if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
        }
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || '') + this.spaces;
        this.spaces = '';
        if (this.current.parent) {
            this.current.source.end = this.getPosition(token[2]);
            this.current.source.end.offset++;
            this.current = this.current.parent;
        } else {
            this.unexpectedClose(token);
        }
    }
    endFile() {
        if (this.current.parent) this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
        }
        this.current.raws.after = (this.current.raws.after || '') + this.spaces;
        this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(token) {
        this.spaces += token[1];
        if (this.current.nodes) {
            let prev = this.current.nodes[this.current.nodes.length - 1];
            if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
                prev.raws.ownSemicolon = this.spaces;
                this.spaces = '';
                prev.source.end = this.getPosition(token[2]);
                prev.source.end.offset += prev.raws.ownSemicolon.length;
            }
        }
    }
    // Helpers
    getPosition(offset) {
        let pos = this.input.fromOffset(offset);
        return {
            column: pos.col,
            line: pos.line,
            offset
        };
    }
    init(node, offset) {
        this.current.push(node);
        node.source = {
            input: this.input,
            start: this.getPosition(offset)
        };
        node.raws.before = this.spaces;
        this.spaces = '';
        if (node.type !== 'comment') this.semicolon = false;
    }
    other(start) {
        let end = false;
        let type = null;
        let colon = false;
        let bracket = null;
        let brackets = [];
        let customProperty = start[1].startsWith('--');
        let tokens = [];
        let token = start;
        while(token){
            type = token[0];
            tokens.push(token);
            if (type === '(' || type === '[') {
                if (!bracket) bracket = token;
                brackets.push(type === '(' ? ')' : ']');
            } else if (customProperty && colon && type === '{') {
                if (!bracket) bracket = token;
                brackets.push('}');
            } else if (brackets.length === 0) {
                if (type === ';') {
                    if (colon) {
                        this.decl(tokens, customProperty);
                        return;
                    } else {
                        break;
                    }
                } else if (type === '{') {
                    this.rule(tokens);
                    return;
                } else if (type === '}') {
                    this.tokenizer.back(tokens.pop());
                    end = true;
                    break;
                } else if (type === ':') {
                    colon = true;
                }
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
                if (brackets.length === 0) bracket = null;
            }
            token = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile()) end = true;
        if (brackets.length > 0) this.unclosedBracket(bracket);
        if (end && colon) {
            if (!customProperty) {
                while(tokens.length){
                    token = tokens[tokens.length - 1][0];
                    if (token !== 'space' && token !== 'comment') break;
                    this.tokenizer.back(tokens.pop());
                }
            }
            this.decl(tokens, customProperty);
        } else {
            this.unknownWord(tokens);
        }
    }
    parse() {
        let token;
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            switch(token[0]){
                case 'space':
                    this.spaces += token[1];
                    break;
                case ';':
                    this.freeSemicolon(token);
                    break;
                case '}':
                    this.end(token);
                    break;
                case 'comment':
                    this.comment(token);
                    break;
                case 'at-word':
                    this.atrule(token);
                    break;
                case '{':
                    this.emptyRule(token);
                    break;
                default:
                    this.other(token);
                    break;
            }
        }
        this.endFile();
    }
    precheckMissedSemicolon() {
    // Hook for Safe Parser
    }
    raw(node, prop, tokens, customProperty) {
        let token, type;
        let length = tokens.length;
        let value = '';
        let clean = true;
        let next, prev;
        for(let i = 0; i < length; i += 1){
            token = tokens[i];
            type = token[0];
            if (type === 'space' && i === length - 1 && !customProperty) {
                clean = false;
            } else if (type === 'comment') {
                prev = tokens[i - 1] ? tokens[i - 1][0] : 'empty';
                next = tokens[i + 1] ? tokens[i + 1][0] : 'empty';
                if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
                    if (value.slice(-1) === ',') {
                        clean = false;
                    } else {
                        value += token[1];
                    }
                } else {
                    clean = false;
                }
            } else {
                value += token[1];
            }
        }
        if (!clean) {
            let raw = tokens.reduce((all, i)=>all + i[1], '');
            node.raws[prop] = {
                raw,
                value
            };
        }
        node[prop] = value;
    }
    rule(tokens) {
        tokens.pop();
        let node = new Rule();
        this.init(node, tokens[0][2]);
        node.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node, 'selector', tokens);
        this.current = node;
    }
    spacesAndCommentsFromEnd(tokens) {
        let lastTokenType;
        let spaces = '';
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    // Errors
    spacesAndCommentsFromStart(tokens) {
        let next;
        let spaces = '';
        while(tokens.length){
            next = tokens[0][0];
            if (next !== 'space' && next !== 'comment') break;
            spaces += tokens.shift()[1];
        }
        return spaces;
    }
    spacesFromEnd(tokens) {
        let lastTokenType;
        let spaces = '';
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== 'space') break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    stringFrom(tokens, from) {
        let result = '';
        for(let i = from; i < tokens.length; i++){
            result += tokens[i][1];
        }
        tokens.splice(from, tokens.length - from);
        return result;
    }
    unclosedBlock() {
        let pos = this.current.source.start;
        throw this.input.error('Unclosed block', pos.line, pos.column);
    }
    unclosedBracket(bracket) {
        throw this.input.error('Unclosed bracket', {
            offset: bracket[2]
        }, {
            offset: bracket[2] + 1
        });
    }
    unexpectedClose(token) {
        throw this.input.error('Unexpected }', {
            offset: token[2]
        }, {
            offset: token[2] + 1
        });
    }
    unknownWord(tokens) {
        throw this.input.error('Unknown word ' + tokens[0][1], {
            offset: tokens[0][2]
        }, {
            offset: tokens[0][2] + tokens[0][1].length
        });
    }
    unnamedAtrule(node, token) {
        throw this.input.error('At-rule without name', {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
}
module.exports = Parser;
}}),
"[project]/node_modules/postcss/lib/parse.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let Container = __turbopack_context__.r("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let Input = __turbopack_context__.r("[project]/node_modules/postcss/lib/input.js [postcss] (ecmascript)");
let Parser = __turbopack_context__.r("[project]/node_modules/postcss/lib/parser.js [postcss] (ecmascript)");
function parse(css, opts) {
    let input = new Input(css, opts);
    let parser = new Parser(input);
    try {
        parser.parse();
    } catch (e) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (e.name === 'CssSyntaxError' && opts && opts.from) {
                if (/\.scss$/i.test(opts.from)) {
                    e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
                } else if (/\.sass/i.test(opts.from)) {
                    e.message += '\nYou tried to parse Sass with ' + 'the standard CSS parser; ' + 'try again with the postcss-sass parser';
                } else if (/\.less$/i.test(opts.from)) {
                    e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
                }
            }
        }
        throw e;
    }
    return parser.root;
}
module.exports = parse;
parse.default = parse;
Container.registerParse(parse);
}}),
"[project]/node_modules/postcss/lib/map-generator.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/postcss/lib/warning.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
class Warning {
    constructor(text, opts = {}){
        this.type = 'warning';
        this.text = text;
        if (opts.node && opts.node.source) {
            let range = opts.node.rangeBy(opts);
            this.line = range.start.line;
            this.column = range.start.column;
            this.endLine = range.end.line;
            this.endColumn = range.end.column;
        }
        for(let opt in opts)this[opt] = opts[opt];
    }
    toString() {
        if (this.node) {
            return this.node.error(this.text, {
                index: this.index,
                plugin: this.plugin,
                word: this.word
            }).message;
        }
        if (this.plugin) {
            return this.plugin + ': ' + this.text;
        }
        return this.text;
    }
}
module.exports = Warning;
Warning.default = Warning;
}}),
"[project]/node_modules/postcss/lib/result.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let Warning = __turbopack_context__.r("[project]/node_modules/postcss/lib/warning.js [postcss] (ecmascript)");
class Result {
    get content() {
        return this.css;
    }
    constructor(processor, root, opts){
        this.processor = processor;
        this.messages = [];
        this.root = root;
        this.opts = opts;
        this.css = undefined;
        this.map = undefined;
    }
    toString() {
        return this.css;
    }
    warn(text, opts = {}) {
        if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
                opts.plugin = this.lastPlugin.postcssPlugin;
            }
        }
        let warning = new Warning(text, opts);
        this.messages.push(warning);
        return warning;
    }
    warnings() {
        return this.messages.filter((i)=>i.type === 'warning');
    }
}
module.exports = Result;
Result.default = Result;
}}),
"[project]/node_modules/postcss/lib/warn-once.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/* eslint-disable no-console */ 'use strict';
let printed = {};
module.exports = function warnOnce(message) {
    if (printed[message]) return;
    printed[message] = true;
    if (typeof console !== 'undefined' && console.warn) {
        console.warn(message);
    }
};
}}),
"[project]/node_modules/postcss/lib/no-work-result.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let MapGenerator = __turbopack_context__.r("[project]/node_modules/postcss/lib/map-generator.js [postcss] (ecmascript)");
let parse = __turbopack_context__.r("[project]/node_modules/postcss/lib/parse.js [postcss] (ecmascript)");
const Result = __turbopack_context__.r("[project]/node_modules/postcss/lib/result.js [postcss] (ecmascript)");
let stringify = __turbopack_context__.r("[project]/node_modules/postcss/lib/stringify.js [postcss] (ecmascript)");
let warnOnce = __turbopack_context__.r("[project]/node_modules/postcss/lib/warn-once.js [postcss] (ecmascript)");
class NoWorkResult {
    get content() {
        return this.result.css;
    }
    get css() {
        return this.result.css;
    }
    get map() {
        return this.result.map;
    }
    get messages() {
        return [];
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        if (this._root) {
            return this._root;
        }
        let root;
        let parser = parse;
        try {
            root = parser(this._css, this._opts);
        } catch (error) {
            this.error = error;
        }
        if (this.error) {
            throw this.error;
        } else {
            this._root = root;
            return root;
        }
    }
    get [Symbol.toStringTag]() {
        return 'NoWorkResult';
    }
    constructor(processor, css, opts){
        css = css.toString();
        this.stringified = false;
        this._processor = processor;
        this._css = css;
        this._opts = opts;
        this._map = undefined;
        let root;
        let str = stringify;
        this.result = new Result(this._processor, root, this._opts);
        this.result.css = css;
        let self = this;
        Object.defineProperty(this.result, 'root', {
            get () {
                return self.root;
            }
        });
        let map = new MapGenerator(str, root, this._opts, css);
        if (map.isMap()) {
            let [generatedCSS, generatedMap] = map.generate();
            if (generatedCSS) {
                this.result.css = generatedCSS;
            }
            if (generatedMap) {
                this.result.map = generatedMap;
            }
        } else {
            map.clearAnnotation();
            this.result.css = map.css;
        }
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        return Promise.resolve(this.result);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    sync() {
        if (this.error) throw this.error;
        return this.result;
    }
    then(onFulfilled, onRejected) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (!('from' in this._opts)) {
                warnOnce('Without `from` option PostCSS could generate wrong source map ' + 'and will not find Browserslist config. Set it to CSS file path ' + 'or to `undefined` to prevent this warning.');
            }
        }
        return this.async().then(onFulfilled, onRejected);
    }
    toString() {
        return this._css;
    }
    warnings() {
        return [];
    }
}
module.exports = NoWorkResult;
NoWorkResult.default = NoWorkResult;
}}),
"[project]/node_modules/postcss/lib/processor.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let Document = __turbopack_context__.r("[project]/node_modules/postcss/lib/document.js [postcss] (ecmascript)");
let LazyResult = __turbopack_context__.r("[project]/node_modules/postcss/lib/lazy-result.js [postcss] (ecmascript)");
let NoWorkResult = __turbopack_context__.r("[project]/node_modules/postcss/lib/no-work-result.js [postcss] (ecmascript)");
let Root = __turbopack_context__.r("[project]/node_modules/postcss/lib/root.js [postcss] (ecmascript)");
class Processor {
    constructor(plugins = []){
        this.version = '8.5.3';
        this.plugins = this.normalize(plugins);
    }
    normalize(plugins) {
        let normalized = [];
        for (let i of plugins){
            if (i.postcss === true) {
                i = i();
            } else if (i.postcss) {
                i = i.postcss;
            }
            if (typeof i === 'object' && Array.isArray(i.plugins)) {
                normalized = normalized.concat(i.plugins);
            } else if (typeof i === 'object' && i.postcssPlugin) {
                normalized.push(i);
            } else if (typeof i === 'function') {
                normalized.push(i);
            } else if (typeof i === 'object' && (i.parse || i.stringify)) {
                if ("TURBOPACK compile-time truthy", 1) {
                    throw new Error('PostCSS syntaxes cannot be used as plugins. Instead, please use ' + 'one of the syntax/parser/stringifier options as outlined ' + 'in your PostCSS runner documentation.');
                }
            } else {
                throw new Error(i + ' is not a PostCSS plugin');
            }
        }
        return normalized;
    }
    process(css, opts = {}) {
        if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
            return new NoWorkResult(this, css, opts);
        } else {
            return new LazyResult(this, css, opts);
        }
    }
    use(plugin) {
        this.plugins = this.plugins.concat(this.normalize([
            plugin
        ]));
        return this;
    }
}
module.exports = Processor;
Processor.default = Processor;
Root.registerProcessor(Processor);
Document.registerProcessor(Processor);
}}),
"[project]/node_modules/postcss/lib/postcss.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
let AtRule = __turbopack_context__.r("[project]/node_modules/postcss/lib/at-rule.js [postcss] (ecmascript)");
let Comment = __turbopack_context__.r("[project]/node_modules/postcss/lib/comment.js [postcss] (ecmascript)");
let Container = __turbopack_context__.r("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let CssSyntaxError = __turbopack_context__.r("[project]/node_modules/postcss/lib/css-syntax-error.js [postcss] (ecmascript)");
let Declaration = __turbopack_context__.r("[project]/node_modules/postcss/lib/declaration.js [postcss] (ecmascript)");
let Document = __turbopack_context__.r("[project]/node_modules/postcss/lib/document.js [postcss] (ecmascript)");
let fromJSON = __turbopack_context__.r("[project]/node_modules/postcss/lib/fromJSON.js [postcss] (ecmascript)");
let Input = __turbopack_context__.r("[project]/node_modules/postcss/lib/input.js [postcss] (ecmascript)");
let LazyResult = __turbopack_context__.r("[project]/node_modules/postcss/lib/lazy-result.js [postcss] (ecmascript)");
let list = __turbopack_context__.r("[project]/node_modules/postcss/lib/list.js [postcss] (ecmascript)");
let Node = __turbopack_context__.r("[project]/node_modules/postcss/lib/node.js [postcss] (ecmascript)");
let parse = __turbopack_context__.r("[project]/node_modules/postcss/lib/parse.js [postcss] (ecmascript)");
let Processor = __turbopack_context__.r("[project]/node_modules/postcss/lib/processor.js [postcss] (ecmascript)");
let Result = __turbopack_context__.r("[project]/node_modules/postcss/lib/result.js [postcss] (ecmascript)");
let Root = __turbopack_context__.r("[project]/node_modules/postcss/lib/root.js [postcss] (ecmascript)");
let Rule = __turbopack_context__.r("[project]/node_modules/postcss/lib/rule.js [postcss] (ecmascript)");
let stringify = __turbopack_context__.r("[project]/node_modules/postcss/lib/stringify.js [postcss] (ecmascript)");
let Warning = __turbopack_context__.r("[project]/node_modules/postcss/lib/warning.js [postcss] (ecmascript)");
function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) {
        plugins = plugins[0];
    }
    return new Processor(plugins);
}
postcss.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
        // eslint-disable-next-line no-console
        if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            // eslint-disable-next-line no-console
            console.warn(name + ': postcss.plugin was deprecated. Migration guide:\n' + 'https://evilmartians.com/chronicles/postcss-8-plugin-migration');
            if (process.env.LANG && process.env.LANG.startsWith('cn')) {
                /* c8 ignore next 7 */ // eslint-disable-next-line no-console
                console.warn(name + ': 里面 postcss.plugin 被弃用. 迁移指南:\n' + 'https://www.w3ctech.com/topic/2226');
            }
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor().version;
        return transformer;
    }
    let cache;
    Object.defineProperty(creator, 'postcss', {
        get () {
            if (!cache) cache = creator();
            return cache;
        }
    });
    creator.process = function(css, processOpts, pluginOpts) {
        return postcss([
            creator(pluginOpts)
        ]).process(css, processOpts);
    };
    return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults)=>new Comment(defaults);
postcss.atRule = (defaults)=>new AtRule(defaults);
postcss.decl = (defaults)=>new Declaration(defaults);
postcss.rule = (defaults)=>new Rule(defaults);
postcss.root = (defaults)=>new Root(defaults);
postcss.document = (defaults)=>new Document(defaults);
postcss.CssSyntaxError = CssSyntaxError;
postcss.Declaration = Declaration;
postcss.Container = Container;
postcss.Processor = Processor;
postcss.Document = Document;
postcss.Comment = Comment;
postcss.Warning = Warning;
postcss.AtRule = AtRule;
postcss.Result = Result;
postcss.Input = Input;
postcss.Rule = Rule;
postcss.Root = Root;
postcss.Node = Node;
LazyResult.registerPostcss(postcss);
module.exports = postcss;
postcss.default = postcss;
}}),
"[project]/node_modules/postcss/lib/postcss.mjs [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AtRule": (()=>AtRule),
    "Comment": (()=>Comment),
    "Container": (()=>Container),
    "CssSyntaxError": (()=>CssSyntaxError),
    "Declaration": (()=>Declaration),
    "Document": (()=>Document),
    "Input": (()=>Input),
    "Node": (()=>Node),
    "Processor": (()=>Processor),
    "Result": (()=>Result),
    "Root": (()=>Root),
    "Rule": (()=>Rule),
    "Warning": (()=>Warning),
    "atRule": (()=>atRule),
    "comment": (()=>comment),
    "decl": (()=>decl),
    "default": (()=>__TURBOPACK__default__export__),
    "document": (()=>document),
    "fromJSON": (()=>fromJSON),
    "list": (()=>list),
    "parse": (()=>parse),
    "plugin": (()=>plugin),
    "root": (()=>root),
    "rule": (()=>rule),
    "stringify": (()=>stringify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postcss/lib/postcss.js [postcss] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"];
const stringify = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].stringify;
const fromJSON = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].fromJSON;
const plugin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].plugin;
const parse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].parse;
const list = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].list;
const document = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].document;
const comment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].comment;
const atRule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].atRule;
const rule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].rule;
const decl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].decl;
const root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].root;
const CssSyntaxError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].CssSyntaxError;
const Declaration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Declaration;
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Container;
const Processor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Processor;
const Document = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Document;
const Comment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Comment;
const Warning = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Warning;
const AtRule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].AtRule;
const Result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Result;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Input;
const Rule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Rule;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Root;
const Node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Node;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__ef1a6f6c._.js.map