import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const Post: FC<{ title: string; body: string; category }> = (props: {
  title;
  body;
  category;
}) => {
  const category = props.category.fields.slug;

  let lang = '';
  if (category === 'react' || category === 'redux' || category === 'javascript') {
    lang = 'javascript';
  } else if (category === 'php' || category === 'laravel') {
    lang = 'php';
  }

  const CodeBlock = ({ value }) => {
    return (
      <SyntaxHighlighter language={lang} style={darcula}>
        {value}
      </SyntaxHighlighter>
    );
  };

  return (
    <>
      <h1 className="title">{props.title}</h1>
      <ReactMarkdown source={props.body} renderers={{ code: CodeBlock }} escapeHtml={false} />
    </>
  );
};
