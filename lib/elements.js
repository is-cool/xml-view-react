"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const attributes_1 = __importDefault(require("./attributes"));
const cdata_el_1 = __importDefault(require("./cdata-el"));
const comment_el_1 = __importDefault(require("./comment-el"));
const instruction_el_1 = __importDefault(require("./instruction-el"));
const text_el_1 = __importDefault(require("./text-el"));
function getIndentationString(size) {
    return new Array(size + 1).join(' ');
}
function isTextElement(elements) {
    return elements.length === 1 && elements[0].type === 'text';
}
function getSelectedText() {
    var _a;
    if (window.getSelection) {
        return (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString();
        // @ts-ignore
    }
    else if (document.selection) {
        // @ts-ignore
        return document.selection.createRange().text;
    }
    return '';
}
function onSelectText(e) {
    e.stopPropagation();
}
const Element = (0, react_1.memo)(({ name, elements, attributes, theme, indentation, indentSize, collapsible }) => {
    const [collapsed, toggleCollapse] = (0, react_1.useState)(false);
    const cursor = collapsible && elements ? 'pointer' : 'text';
    return (react_1.default.createElement("div", { style: { whiteSpace: 'pre', cursor }, onClick: (event) => {
            if (!collapsible || !elements) {
                return;
            }
            event.stopPropagation();
            event.preventDefault();
            if (getSelectedText() === '') {
                toggleCollapse(!collapsed);
            }
        } },
        react_1.default.createElement("span", { style: { color: theme.separatorColor } }, `${indentation}<`),
        react_1.default.createElement("span", { style: { color: theme.tagColor } }, name),
        !collapsed && react_1.default.createElement(attributes_1.default, { attributes: attributes, theme: theme }),
        react_1.default.createElement("span", { style: { color: theme.separatorColor } }, elements ? '>' : '/>'),
        elements && !collapsed && (react_1.default.createElement("span", { onClick: onSelectText },
            react_1.default.createElement(Elements, { elements: elements, theme: theme, indentation: indentation + getIndentationString(indentSize), indentSize: indentSize, collapsible: collapsible }))),
        elements && (react_1.default.createElement("span", { style: { color: theme.separatorColor } }, `${isTextElement(elements) || collapsed ? '' : indentation}</`)),
        elements && react_1.default.createElement("span", { style: { color: theme.tagColor } }, name),
        elements && react_1.default.createElement("span", { style: { color: theme.separatorColor } }, '>')));
});
const getElement = (theme, indentation, indentSize, collapsible) => (element, index) => {
    switch (element.type) {
        case 'text':
            return react_1.default.createElement(text_el_1.default, { key: `el-${index}`, text: element.text, theme: theme });
        case 'element':
            return (react_1.default.createElement(Element, { key: `el-${index}`, name: element.name, elements: element.elements, attributes: element.attributes, theme: theme, indentation: indentation, indentSize: indentSize, collapsible: collapsible }));
        case 'comment':
            return react_1.default.createElement(comment_el_1.default, { key: `el-${index}`, comment: element.comment, theme: theme, indentation: indentation });
        case 'cdata':
            return react_1.default.createElement(cdata_el_1.default, { key: `el-${index}`, cdata: element.cdata, theme: theme, indentation: indentation });
        case 'instruction':
            return (react_1.default.createElement(instruction_el_1.default, { key: `el-${index}`, instruction: element.instruction, name: element.name, theme: theme, indentation: indentation }));
        default:
            return null;
    }
};
const Elements = (0, react_1.memo)(({ elements, theme, indentation, indentSize, collapsible }) => {
    return elements.map(getElement(theme, indentation, indentSize, collapsible));
});
exports.default = Elements;
