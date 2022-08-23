import React from 'react';

interface Props {
    name: string;
    instruction: string;
    theme: Record<string, any>;
    indentation: string;
}

const InstructionElement = ({ name, instruction, theme, indentation }: Props) => {
    return (
        <div>
            <span style={{ color: theme.separatorColor }}>{`${indentation}<?`}</span>
            <span style={{ color: theme.tagColor }}>{name}</span>
            <span style={{ color: theme.attributeKeyColor }}>{` ${instruction}`}</span>
            <span style={{ color: theme.separatorColor }}>{`?>`}</span>
        </div>);
}

export default InstructionElement;