import * as React from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

const Header = require('@editorjs/header');
const LinkTool = require('@editorjs/link');
const Paragraph = require('@editorjs/paragraph');

import "./editor.scss"

export class Editor extends React.Component<{}, {}> {
  private editor: HTMLElement;
  private editorJS: EditorJS;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.editorJS = new EditorJS({
      holder: this.editor,
      autofocus: true,
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'Tell your story...'
          }
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: 'http://localhost:3000/link', // Your backend endpoint for url data fetching
          }
        },
        paragraph: {
          class: Paragraph,
          config: {
            placeholder: 'Tell your story...'
          }
        }
      },
      onReady: () => { }, //TODO: Load data
      onChange: () => { },
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="editor" ref={(context) => { this.editor = context }}>
      </div>
    )
  }
}
