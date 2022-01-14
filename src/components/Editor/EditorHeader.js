import { Button } from "@mui/material";
import React from "react";

function EditorHeader({
  textEditor,
  markdownEditor,
  setMarkdownEditor,
  setTextEditor,
}) {
  return (
    <div className="editor_nav">
      <Button
        variant="primary"
        disabled={!textEditor}
        onClick={() => setMarkdownEditor(!markdownEditor)}
      >
        Zen mode
      </Button>
      <Button
        variant="primary"
        disabled={!markdownEditor}
        onClick={() => setTextEditor(!textEditor)}
      >
        Preview
      </Button>
    </div>
  );
}

export default EditorHeader;
