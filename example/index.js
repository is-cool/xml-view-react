import React from 'react';
import ReactDOM from 'react-dom';
import XmlView from 'xml-view-react';

const appRoot = document.createElement('div');
appRoot.id = 'app';

const xml =
  '<MirrorStrategies>\r\n    <PressureLaneMirrorStrategy executeModel="sequential" ignoreHintsTrafficStrategy="false"\r\n                                defaultMirrorWriteAction="mirror" defaultMirrorReadAction="mirror" defaultMirrorTransactionAction="mirror"\r\n                                defaultUnActiveWriteAction="exception" defaultUnActiveReadAction="exception" defaultUnActiveTransactionAction="exception"\r\n                                defaultNoneMirrorWriteAction="exception" defaultNoneMirrorReadAction="normal" defaultNoneMirrorTransactionAction="exception" status="on">\r\n        <PressureLaneMirror name="shadow_opsgalaxysoatestdb_dalcluster">\r\n            <MirrorConfigs>\r\n                \r\n                <MirrorConfig scenesIds="1200_10000001" appId="100009598" default="true">\r\n    <Property name="write" value="mirror"/>\r\n    <Property name="read" value="mirror"/>\r\n    <Property name="transaction" value="mirror"/>\r\n</MirrorConfig>\r\n                \r\n            </MirrorConfigs>\r\n        </PressureLaneMirror>\r\n    </PressureLaneMirrorStrategy>\r\n</MirrorStrategies>';

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
  
  console.log('formateXml', formateXml(xml))

document.body.appendChild(appRoot);
ReactDOM.render(
  <React.StrictMode>
    <XmlView value={xml} title={<span style={{ color: 'red' }}>xml解析</span>} copySuccess={() => alert('复制成功')} />
  </React.StrictMode>,
  appRoot,
);
