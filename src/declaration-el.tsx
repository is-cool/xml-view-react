import React from 'react';
import Attributes from './attributes';

interface Props {
    attributes: Record<string, any>;
    theme: Record<string, any>;
}

const DeclarationElement = ({ attributes, theme }: Props) => {
    return (
        <div>
            <span style={{ color: theme.separatorColor }}>{`<?`}</span>
            <span style={{ color: theme.tagColor }}>{"xml"}</span>
            <Attributes attributes={attributes} theme={theme} />
            <span style={{ color: theme.separatorColor }}>{`?>`}</span>
        </div>
    );
}

export default DeclarationElement;