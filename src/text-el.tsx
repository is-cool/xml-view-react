import React, { CSSProperties, ReactNode } from 'react';

interface Props {
    text: ReactNode;
    theme: Record<string, any>;
}

const TextElement = ({ text, theme }: Props) => {
    const overflow = theme.overflowBreak ? { overflowWrap: 'break-word', whiteSpace: 'normal' } : {} 
    return (
        <span style={{ color: theme.textColor,  ...overflow as CSSProperties }}>
            {text}
        </span>
    );
}

export default TextElement;