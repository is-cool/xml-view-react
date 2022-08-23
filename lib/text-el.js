"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TextElement = ({ text, theme }) => {
    const overflow = theme.overflowBreak ? { overflowWrap: 'break-word', whiteSpace: 'normal' } : {};
    return (react_1.default.createElement("span", { style: Object.assign({ color: theme.textColor }, overflow) }, text));
};
exports.default = TextElement;
