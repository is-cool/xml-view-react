"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InstructionElement = ({ name, instruction, theme, indentation }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", { style: { color: theme.separatorColor } }, `${indentation}<?`),
        react_1.default.createElement("span", { style: { color: theme.tagColor } }, name),
        react_1.default.createElement("span", { style: { color: theme.attributeKeyColor } }, ` ${instruction}`),
        react_1.default.createElement("span", { style: { color: theme.separatorColor } }, `?>`)));
};
exports.default = InstructionElement;
