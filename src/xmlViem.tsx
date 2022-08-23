import React from 'react';
import convert from 'xml-js';

import DeclarationElement from './declaration-el';
import Elements from './elements';

const defaultTheme = {
  tagColor: '#d43900',
  textColor: '#333',
  attributeKeyColor: '#2a7ab0',
  attributeValueColor: '#008000',
  separatorColor: '#333',
  commentColor: '#aaa',
  cdataColor: '#1d781d',
  overflowBreak: false,
};

const defaultInvalidXml = <div>Invalid XML!</div>;

interface Props {
  xml: string;
  theme?: Record<string, any>;
  indentSize?: number;
  invalidXml?: any;
  collapsible?: boolean;
}

const XMLViewer = ({ xml, theme, indentSize = 2, invalidXml = defaultInvalidXml, collapsible = false, ...props }: Props) => {
  let json = null;
  const customTheme = { ...defaultTheme, ...theme };

  try {
    // @ts-ignore
    json = convert.xml2js(xml, { compact: false, spaces: 0  });
    if (!Array.isArray(json.elements)) {
      return invalidXml;
    }
  } catch (e) {
    return invalidXml;
  }

  return (
    <div {...props}>
      {json.declaration && <DeclarationElement theme={customTheme} attributes={json.declaration.attributes} />}
      <Elements
        elements={json.elements}
        theme={customTheme}
        indentSize={indentSize}
        indentation=""
        collapsible={collapsible}
      />
    </div>
  );
};

export default XMLViewer;
