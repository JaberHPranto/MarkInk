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

export const advanceTemplate = [
  {
    id: "link",
    title: "Links",
    markdown: `Let's learn markdown [markdown guide](https://www.markdownguide.org)`,
  },
  {
    id: "url",
    title: "Urls",
    markdown: `<https://www.markdownguide.org>`,
  },
  {
    id: "images",
    title: "Images",
    markdown: `![markdown](https://www.pngrepo.com/png/346102/512/markdown-fill.png)`,
  },
  {
    id: "codeblocks",
    title: "Code Blocks",
    markdown: `
~~~js
console.log('Hello World !!!')
~~~
    `,
  },
];

export const githubTemplate = [
  {
    id: "api",
    title: "Api Reference",
    markdown: `
## API Reference

#### Get all users

\`\`\`js
  GET /api/users
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |
| options | object | Optional |
    `,
  },
  {
    id: "authors",
    title: "Authors",
    markdown: `
## Authors

- [@JaberHPranto](https://github.com/JaberHPranto)
    `,
  },
  {
    id: "badges",
    title: "Badges",
    markdown: `
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

    `,
  },
  {
    id: "demo",
    title: "Demo",
    markdown: `
## Demo

Insert video or image of your product
    `,
  },
  {
    id: "deployment",
    title: "Deployment",
    markdown: `
## Deployment

To deploy this project run

\`\`\`bash
  npm run deploy
\`\`\`
    `,
  },
  {
    id: "features",
    title: "Features",
    markdown: `
## Features
- Hints for writing markdown
- Save notes
    `,
  },
  {
    id: "about",
    title: "Github - About me",
    markdown: `
## 🚀 About Me
I'm a full stack developer...
`,
  },
  {
    id: "installation",
    title: "Installation",
    markdown: `
## Installation
Install and run it 
\`\`\`bash
  npm install my-project
  cd my-project
\`\`\`
    `,
  },
  {
    id: "logo",
    title: "Logo",
    markdown:
      "![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)",
  },
  {
    id: "run_locally",
    title: "Run Locally",
    markdown: `
Clone the project
\`\`\`bash
  git clone https://link-to-project
\`\`\`
Go to the project directory
\`\`\`bash
  cd my-project
\`\`\`
Install dependencies
\`\`\`bash
  npm install
\`\`\`
Start the server
\`\`\`bash
  npm run start
\`\`\`
    `,
  },
  {
    id: "screenshot",
    title: "Screenshot",
    markdown: `
## Screenshots
![screenshot](https://cdn.iconscout.com/icon/free/png-256/screenshot-1851023-1569010.png)`,
  },
  {
    id: "title_desc",
    title: "Title & Description",
    markdown: `
# Project Title

A brief description of the project
    `,
  },
  {
    id: "tech",
    title: "Tech",
    markdown: `
## Tech Stack

**Client** :  React, Redux, TailwindCSS

**Server** :  Node, Express

**Database** : Mongodb
    `,
  },
  {
    id: "usage",
    title: "Usage",
    markdown: `
## Usage/Examples

\`\`\`javascript

function App() {
  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>
      <div>
        <Layout />
      </div>
    </>
  );
}

export default App;
\`\`\`
    `,
  },
];

export const getTemplate = (key, type) => {
  if (type === "basic") {
    return basicTemplates.find((temp) => temp.title === key);
  } else if (type === "extended") {
    return extendedTemplate.find((temp) => temp.title === key);
  } else if (type === "advance") {
    return advanceTemplate.find((temp) => temp.title === key);
  } else if (type === "github") {
    return githubTemplate.find((temp) => temp.title === key);
  }
};
