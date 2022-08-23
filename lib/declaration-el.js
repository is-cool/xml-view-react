"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const attributes_1 = __importDefault(require("./attributes"));
const DeclarationElement = ({ attributes, theme }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", { style: { color: theme.separatorColor } }, `<?`),
        react_1.default.createElement("span", { style: { color: theme.tagColor } }, "xml"),
        react_1.default.createElement(attributes_1.default, { attributes: attributes, theme: theme }),
        react_1.default.createElement("span", { style: { color: theme.separatorColor } }, `?>`)));
};
exports.default = DeclarationElement;
