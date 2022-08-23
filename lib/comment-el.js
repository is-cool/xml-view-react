"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CommentElement = ({ comment, theme, indentation }) => {
    return (react_1.default.createElement("div", { style: { color: theme.commentColor } }, `${indentation}<!-- ${comment} -->`));
};
exports.default = CommentElement;
