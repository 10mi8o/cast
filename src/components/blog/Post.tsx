import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const Post = (props: { title: string; body: string }) => {
  const CodeBlock = ({ value }) => {
    return (
      <SyntaxHighlighter language="javascript" style={darcula}>
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
