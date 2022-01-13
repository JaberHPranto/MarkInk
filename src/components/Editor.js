import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

function Editor() {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
  };

  return (
    <>
      <div className="container">
        <textarea
          value={text}
          onChange={handleInputChange}
          className="textarea"
        ></textarea>
        <div className="output">
          <ReactMarkdown
            children={text}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={materialDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code {...props}>{children}</code>
                );
              },
            }}
            remarkPlugins={[remarkGfm]}
          ></ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Editor;
