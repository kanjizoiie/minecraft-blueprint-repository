import * as React from "react";
import { Chart } from "../chart/chart";

interface HelloProps {
  name?: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <p> Hello {this.props.name ? this.props.name : "there"}!</p>;
  }
}
