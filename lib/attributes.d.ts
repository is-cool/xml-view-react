/// <reference types="react" />
interface Props {
    attributes: Record<string, any>;
    theme: Record<string, any>;
}
declare const Attributes: ({ attributes, theme }: Props) => JSX.Element;
export default Attributes;
