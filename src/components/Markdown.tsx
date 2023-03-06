import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

type MarkdownProps = {
  children: string;
};

export function Markdown({ children }: MarkdownProps): JSX.Element {
  return (
    <ReactMarkdown rehypePlugins={[rehypeHighlight]} className="markdown">
      {children}
    </ReactMarkdown>
  );
}
