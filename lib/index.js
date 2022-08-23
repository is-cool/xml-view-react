"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
exports.default = (props) => {
    const { value, title = 'XML', centerStyle, copySuccess } = props;
    //xml格式处理
    const formateXml = (xmlStr) => {
        let text = xmlStr || '';
        if (text !== '') {
            //使用replace去空格
            text =
                '\n' +
                    text
                        .replace(/(<\w+)(\s.*?>)/g, function ($0, name, props) {
                        return name + ' ' + props.replace(/\s+(\w+=)/g, ' $1');
                    })
                        .replace(/>\s*?</g, '>\n<');
            //处理注释，对注释进行编码
            text = text
                .replace(/\n/g, '\r')
                .replace(/<!--(.+?)-->/g, function ($0, text) {
                var ret = '<!--' + escape(text) + '-->';
                return ret;
            })
                .replace(/\r/g, '\n');
        }
        return text;
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
            react_1.default.createElement("div", null, title),
            react_1.default.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: formateXml(value), onCopy: copySuccess },
                react_1.default.createElement("span", { style: { color: '#3CA1FF', cursor: 'pointer' } }, "\u4E00\u952E\u590D\u5236"))),
        react_1.default.createElement("pre", { style: Object.assign({ background: '#efefef', overflow: 'auto' }, centerStyle), id: "copy-target" }, formateXml(value))));
};
