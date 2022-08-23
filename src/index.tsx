import React, { CSSProperties, ReactNode } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import XMLViewer from './xmlViem';

interface Props {
  title?: string | ReactNode;
  value: string;
  centerStyle: CSSProperties;
  copySuccess: () => void;
}

export default (props: Props) => {
  const { value, title = 'XML', centerStyle, copySuccess } = props;
  //xml格式处理
  const formateXml = (xmlStr: string) => {
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
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{title}</div>
        <CopyToClipboard text={formateXml(value)} onCopy={copySuccess}>
          <span style={{ color: '#3CA1FF', cursor: 'pointer' }}>一键复制</span>
        </CopyToClipboard>
      </div>
      <pre style={{ background: '#efefef', overflow: 'auto', ...centerStyle }} id="copy-target">
        {/* <XMLViewer xml={formateXml(value)} /> */}
        {formateXml(value)}
      </pre>
    </div>
  );
};
