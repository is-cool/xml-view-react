import React, { CSSProperties } from 'react';

interface Props {
    attributes: Record<string, any>;
    theme: Record<string, any>;
};

const Attributes = ({ attributes, theme } : Props) => {
  let attributeList = [];
  const overflow = theme.overflowBreak ? { overflowWrap: 'break-word', whiteSpace: 'normal' } : {};

  for (const key in attributes) {
    attributeList.push(
      <span key={`attr-${key}[${attributes[key]}]`}>
        <span style={{ color: theme.attributeKeyColor }}>{` ${key}`}</span>
        <span style={{ color: theme.separatorColor }}>{'='}</span>
        <span style={{ color: theme.attributeValueColor }}>{`"${attributes[key]}"`}</span>
      </span>,
    );
  }

  return <span style={ overflow as CSSProperties }>{attributeList}</span>;
};

export default Attributes;
