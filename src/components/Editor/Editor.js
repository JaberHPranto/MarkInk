import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import "../../styles/editor.css";

function EditorComponent({
  textEditor,
  markdownEditor,
  text,
  handleInputChange,
}) {
  const handleChange = (e) => {
    handleInputChange(e);
  };

  return (
    <div className="container">
      {/* {textEditor && (
        <textarea
          value={text}
          onChange={handleChange}
          className={markdownEditor ? "textarea" : "textarea text_full"}
        ></textarea>
      )} */}
      {textEditor && (
        <CodeMirror
          className="textarea"
          value={text}
          width={markdownEditor ? "35rem" : "67rem"}
          theme={oneDark}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value, viewUpdate) => {
            console.log("value:", value);
            handleChange(value);
          }}
        />
      )}

      {markdownEditor && (
        <div className={textEditor ? "output" : "output markdown_full"}>
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
  );
}

export default EditorComponent;
