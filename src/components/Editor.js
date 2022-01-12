import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Editor() {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
  };
  const markdown = `
  # Header 1
  ## Header 2

  _italic_

  **bold**

  <b> bold Html </b>

`;
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
            remarkPlugins={[remarkGfm]}
          ></ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Editor;
