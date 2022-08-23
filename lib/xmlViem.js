"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const xml_js_1 = __importDefault(require("xml-js"));
const declaration_el_1 = __importDefault(require("./declaration-el"));
const elements_1 = __importDefault(require("./elements"));
const defaultTheme = {
    tagColor: '#d43900',
    textColor: '#333',
    attributeKeyColor: '#2a7ab0',
    attributeValueColor: '#008000',
    separatorColor: '#333',
    commentColor: '#aaa',
    cdataColor: '#1d781d',
    overflowBreak: false,
};
const defaultInvalidXml = react_1.default.createElement("div", null, "Invalid XML!");
const XMLViewer = (_a) => {
    var { xml, theme, indentSize = 2, invalidXml = defaultInvalidXml, collapsible = false } = _a, props = __rest(_a, ["xml", "theme", "indentSize", "invalidXml", "collapsible"]);
    let json = null;
    const customTheme = Object.assign(Object.assign({}, defaultTheme), theme);
    try {
        // @ts-ignore
        json = xml_js_1.default.xml2js(xml, { compact: false, spaces: 0 });
        if (!Array.isArray(json.elements)) {
            return invalidXml;
        }
    }
    catch (e) {
        return invalidXml;
    }
    return (react_1.default.createElement("div", Object.assign({}, props),
        json.declaration && react_1.default.createElement(declaration_el_1.default, { theme: customTheme, attributes: json.declaration.attributes }),
        react_1.default.createElement(elements_1.default, { elements: json.elements, theme: customTheme, indentSize: indentSize, indentation: "", collapsible: collapsible })));
};
exports.default = XMLViewer;
