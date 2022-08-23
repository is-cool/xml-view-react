import { CSSProperties, ReactNode } from 'react';
interface Props {
    title?: string | ReactNode;
    value: string;
    centerStyle: CSSProperties;
    copySuccess: () => void;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
