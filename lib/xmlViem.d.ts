interface Props {
    xml: string;
    theme?: Record<string, any>;
    indentSize?: number;
    invalidXml?: any;
    collapsible?: boolean;
}
declare const XMLViewer: ({ xml, theme, indentSize, invalidXml, collapsible, ...props }: Props) => any;
export default XMLViewer;
