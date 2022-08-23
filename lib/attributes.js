"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
;
const Attributes = ({ attributes, theme }) => {
    let attributeList = [];
    const overflow = theme.overflowBreak ? { overflowWrap: 'break-word', whiteSpace: 'normal' } : {};
    for (const key in attributes) {
        attributeList.push(react_1.default.createElement("span", { key: `attr-${key}[${attributes[key]}]` },
            react_1.default.createElement("span", { style: { color: theme.attributeKeyColor } }, ` ${key}`),
            react_1.default.createElement("span", { style: { color: theme.separatorColor } }, '='),
            react_1.default.createElement("span", { style: { color: theme.attributeValueColor } }, `"${attributes[key]}"`)));
    }
    return react_1.default.createElement("span", { style: overflow }, attributeList);
};
exports.default = Attributes;
