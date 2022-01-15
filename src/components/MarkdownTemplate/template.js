export const basicTemplates = [
  {
    id: "heading_1",
    title: "Heading level 1",
    markdown: "# Heading 1",
  },
  {
    id: "heading_2",
    title: "Heading level 2",
    markdown: "## Heading 2 \n",
  },
  {
    id: "heading_3",
    title: "Heading level 3",
    markdown: "### Heading 3 \n",
  },
  {
    id: "bold",
    title: "Bold",
    markdown: "**bold text**",
  },
  {
    id: "italic",
    title: "Italic",
    markdown: "*italic text*",
  },
  {
    id: "bold_italic",
    title: "Bold & Italic",
    markdown: "***really important***",
  },
  {
    id: "blockquote",
    title: "Blockquote",
    markdown: "\n > I love markdown",
  },
  {
    id: "Strike-through",
    title: "Strike-through",
    markdown: "~~The world is flat.~~ ",
  },
];

export const extendedTemplate = [
  {
    id: "List",
    title: "List",
    markdown: `
- First item
- Second item
    `,
  },
  {
    id: "nested_list",
    title: "Nested List",
    markdown: `
- First item
- Second item
  - Sub item 1
  - Sub item 2
    `,
  },

  {
    id: "tables",
    title: "Tables",
    markdown: `
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
    `,
  },

  {
    id: "task",
    title: "Task List",
    markdown: `
- [x] Task complete
- [ ] Have to complete the task
    `,
  },
  {
    id: "horizontal",
    title: "Horizontal Rule",
    markdown: "\n --- \n",
  },
];

export const getTemplate = (key, type) => {
  if (type === "basic") {
    return basicTemplates.find((temp) => temp.title === key);
  } else if (type === "extended") {
    return extendedTemplate.find((temp) => temp.title === key);
  }
};
