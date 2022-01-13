import { Button } from "@mui/material";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import "../styles/editor.css";

function Editor() {
  const [text, setText] = useState("");
  const [markdownEditor, setMarkdownEditor] = useState(true);
  const [textEditor, setTextEditor] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
  };

  return (
    <>
      <div className="editor_nav">
        <Button
          variant="primary"
          onClick={() => setMarkdownEditor(!markdownEditor)}
        >
          Zen mode
        </Button>
        <Button variant="primary" onClick={() => setTextEditor(!textEditor)}>
          Preview
        </Button>
      </div>

      <div className="container">
        {textEditor && (
          <textarea
            value={text}
            onChange={handleInputChange}
            className={markdownEditor ? "textarea" : "textarea full"}
          ></textarea>
        )}

        {markdownEditor && (
          <div className={textEditor ? "output" : "output full"}>
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
        )}
      </div>
    </>
  );
}

export default Editor;
