import React, { useState } from "react";
import "../styles/editor.css";
import Editor from "./Editor/Editor";
import EditorHeader from "./Editor/EditorHeader";
import Sidebar from "./Sidebar";

function Layout() {
  const [text, setText] = useState("");
  const [markdownEditor, setMarkdownEditor] = useState(true);
  const [textEditor, setTextEditor] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
  };

  // const handleAdd = () => {
  //   setText((prevState) => {
  //     return prevState + "# Heading 1 \n";
  //   });
  // };

  return (
    <div className="main_container">
      <div className="main_sidebar">
        <Sidebar text={text} setText={setText} />
      </div>
      <div className="main_editor">
        <EditorHeader
          textEditor={textEditor}
          markdownEditor={markdownEditor}
          setTextEditor={setTextEditor}
          setMarkdownEditor={setMarkdownEditor}
        />

        <Editor
          text={text}
          markdownEditor={markdownEditor}
          textEditor={textEditor}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default Layout;
