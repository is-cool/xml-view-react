import React, { memo, useState } from 'react';

import Attributes from './attributes';
import CdataElement from './cdata-el';
import CommentElement from './comment-el';
import InstructionElement from './instruction-el';
import TextElement from './text-el';

function getIndentationString(size: number) {
  return new Array(size + 1).join(' ');
}

function isTextElement(elements: Record<string, any>[]) {
  return elements.length === 1 && elements[0].type === 'text';
}

function getSelectedText() {
  if (window.getSelection) {
    return window.getSelection()?.toString();
    // @ts-ignore
  } else if (document.selection) {
    // @ts-ignore
    return document.selection.createRange().text;
  }
  return '';
}

function onSelectText(e: any) {
  e.stopPropagation();
}

interface elementProps {
    name: string;
    elements: Record<string, any>[];
    attributes: Record<string, any>;
    theme: Record<string, any>
    indentation: string;
    indentSize: number;
    collapsible: boolean;
}

const Element = memo(({ name, elements, attributes, theme, indentation, indentSize, collapsible }: elementProps) => {
  const [collapsed, toggleCollapse] = useState(false);

  const cursor = collapsible && elements ? 'pointer' : 'text';

  return (
    <div
      style={{ whiteSpace: 'pre', cursor }}
      onClick={(event) => {
        if (!collapsible || !elements) {
          return;
        }
        event.stopPropagation();
        event.preventDefault();

        if (getSelectedText() === '') {
          toggleCollapse(!collapsed);
        }
      }}
    >
      <span style={{ color: theme.separatorColor }}>{`${indentation}<`}</span>
      <span style={{ color: theme.tagColor }}>{name}</span>
      {!collapsed && <Attributes attributes={attributes} theme={theme} />}
      <span style={{ color: theme.separatorColor }}>{elements ? '>' : '/>'}</span>
      {elements && !collapsed && (
        <span onClick={onSelectText}>
          <Elements
            elements={elements}
            theme={theme}
            indentation={indentation + getIndentationString(indentSize)}
            indentSize={indentSize}
            collapsible={collapsible}
          />
        </span>
      )}
      {elements && (
        <span style={{ color: theme.separatorColor }}>{`${
          isTextElement(elements) || collapsed ? '' : indentation
        }</`}</span>
      )}
      {elements && <span style={{ color: theme.tagColor }}>{name}</span>}
      {elements && <span style={{ color: theme.separatorColor }}>{'>'}</span>}
    </div>
  );
});


const getElement = (theme: Record<string, any>, indentation: string, indentSize: number, collapsible: boolean) => (element: Record<string, any>, index: number) => {
  switch (element.type) {
    case 'text':
      return <TextElement key={`el-${index}`} text={element.text} theme={theme} />;
    case 'element':
      return (
        <Element
          key={`el-${index}`}
          name={element.name}
          elements={element.elements}
          attributes={element.attributes}
          theme={theme}
          indentation={indentation}
          indentSize={indentSize}
          collapsible={collapsible}
        />
      );
    case 'comment':
      return <CommentElement key={`el-${index}`} comment={element.comment} theme={theme} indentation={indentation} />;
    case 'cdata':
      return <CdataElement key={`el-${index}`} cdata={element.cdata} theme={theme} indentation={indentation} />;
    case 'instruction':
      return (
        <InstructionElement
          key={`el-${index}`}
          instruction={element.instruction}
          name={element.name}
          theme={theme}
          indentation={indentation}
        />
      );
    default:
      return null;
  }
};

interface elementsProps {
    elements: Record<string, any>[];
    theme: Record<string, any>
    indentation: string;
    indentSize: number;
    collapsible: boolean;
}


const Elements = memo(({ elements, theme, indentation, indentSize, collapsible }: any) => {
  return elements.map(getElement(theme, indentation, indentSize, collapsible));
});

export default Elements;
