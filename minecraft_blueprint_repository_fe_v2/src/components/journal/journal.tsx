import * as React from "react";
import { Editor } from "../editor/editor";
import "./journal.scss";

interface JournalState {
  date: Date
}

export class Journal extends React.Component<{}, JournalState> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  render() {
    return (
        <div className="journal-container">
            <h1>Journal - { this.state.date.toUTCString() }</h1>
        </div>
    );
  }
}
