import React from 'react';

interface Props {
    cdata: string;
    theme: Record<string, any>;
    indentation: string;
}
const CdataElement = ({ cdata, theme, indentation }: Props) => {
    return (
        <div style={{ color: theme.cdataColor }}>
            {`${indentation}<![CDATA[${cdata}]]>`}
        </div>
    );
}
export default CdataElement;