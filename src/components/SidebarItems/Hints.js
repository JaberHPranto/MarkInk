import React from "react";
import "../../styles/sidebar.hints.css";
import {
  advanceTemplate,
  basicTemplates,
  extendedTemplate,
  getTemplate,
  githubTemplate,
} from "../MarkdownTemplate/template";

function Hints({ text, setText }) {
  const handleAdd = (e, type) => {
    const markdownText = getTemplate(e.target.innerText, type);
    if (markdownText) {
      setText((prevState) => {
        return prevState + markdownText?.markdown;
      });
    }
  };

  const getAccordionItems = (templates, type) => {
    return templates.map((template) => (
      <button
        className="accordion-btn"
        key={template.id}
        onClick={(e) => handleAdd(e, type)}
      >
        {template.title}
      </button>
    ));
  };
  return (
    <div className="wrapper">
      <Accordion title="Basic markdown syntax">
        {getAccordionItems(basicTemplates, "basic")}
      </Accordion>
      <Accordion title="Extended markdown syntax">
        {getAccordionItems(extendedTemplate, "extended")}
      </Accordion>
      <Accordion title="Advance markdown">
        {getAccordionItems(advanceTemplate, "advance")}
      </Accordion>
      <Accordion title="Github markdown">
        {getAccordionItems(githubTemplate, "github")}
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
