/// <reference types="react" />
interface Props {
    comment: string;
    theme: Record<string, any>;
    indentation: string;
}
declare const CommentElement: ({ comment, theme, indentation }: Props) => JSX.Element;
export default CommentElement;
