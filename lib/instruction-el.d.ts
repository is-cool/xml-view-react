/// <reference types="react" />
interface Props {
    name: string;
    instruction: string;
    theme: Record<string, any>;
    indentation: string;
}
declare const InstructionElement: ({ name, instruction, theme, indentation }: Props) => JSX.Element;
export default InstructionElement;
