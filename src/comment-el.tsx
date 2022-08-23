import React from 'react';

interface Props {
    comment: string;
    theme: Record<string, any>;
    indentation: string;
}

const CommentElement = ({ comment, theme, indentation }: Props) => {
    return (
        <div style={{ color: theme.commentColor }}>
            {`${indentation}<!-- ${comment} -->`}
        </div>
    );
}

export default CommentElement;