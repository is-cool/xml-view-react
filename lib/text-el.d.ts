import { ReactNode } from 'react';
interface Props {
    text: ReactNode;
    theme: Record<string, any>;
}
declare const TextElement: ({ text, theme }: Props) => JSX.Element;
export default TextElement;
