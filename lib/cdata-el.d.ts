/// <reference types="react" />
interface Props {
    cdata: string;
    theme: Record<string, any>;
    indentation: string;
}
declare const CdataElement: ({ cdata, theme, indentation }: Props) => JSX.Element;
export default CdataElement;
