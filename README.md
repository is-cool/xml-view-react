# Usage

## Installation

```
npm i xml-view-react
```

## Quick start

```js
import XmlView from 'xml-view-react';
var xml =
'<?xml version="1.0" encoding="utf-8"?>' +
'<note importance="high" logged="true">' +
'    <title>Happy</title>' +
'    <todo>Play</todo>' +
'</note>';
<XmlView value={xml} title={<span style={{ color: 'pink' }}>xml解析</span>} copySuccess={() => alert('复制成功')} />
```
