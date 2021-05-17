import * as React from "react";

export class Icon extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <i className="material-icons">{this.props.children}</i>;
  }
}

