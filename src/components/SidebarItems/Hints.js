import React from "react";
import "../../styles/sidebar.hints.css";

function Hints() {
  return (
    <div className="wrapper">
      <Accordion title="Basic markdown syntax">
        <button className="accordion-btn">Heading level 1</button>
        <button className="accordion-btn">Heading level 2</button>
        <button className="accordion-btn">Heading level 3</button>
        <button className="accordion-btn">Bold</button>
        <button className="accordion-btn">Italic</button>
        <button className="accordion-btn">Bold & Italic</button>
        <button className="accordion-btn">Blockquote</button>
        <button className="accordion-btn">Strike-through</button>
      </Accordion>
      <Accordion title="Extended markdown syntax">
        <button className="accordion-btn">List</button>
        <button className="accordion-btn">Nested List</button>
        <button className="accordion-btn">Tables</button>
        <button className="accordion-btn">Task Lists</button>
        <button className="accordion-btn">Horizontal Rule</button>
      </Accordion>
      <Accordion title="Advance markdown">
        <button className="accordion-btn">Links</button>
        <button className="accordion-btn">Urls</button>
        <button className="accordion-btn">Images</button>
        <button className="accordion-btn">Code Blocks</button>
      </Accordion>
      <Accordion title="Github markdown">
        <button className="accordion-btn">API Reference</button>
        <button className="accordion-btn">Authors</button>
        <button className="accordion-btn">Badges</button>
        <button className="accordion-btn">Demo</button>
        <button className="accordion-btn">Deployment</button>
        <button className="accordion-btn">Features</button>
        <button className="accordion-btn">Github - About me</button>
        <button className="accordion-btn">Installation</button>
        <button className="accordion-btn">Logo</button>
        <button className="accordion-btn">Run Locally</button>
        <button className="accordion-btn">Screenshots</button>
        <button className="accordion-btn">Title & Description</button>
        <button className="accordion-btn">Tech</button>
        <button className="accordion-btn">Usage</button>
      </Accordion>
      <Accordion title="Mathematics markdown">Not completed yet</Accordion>
    </div>
  );
}

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default Hints;
