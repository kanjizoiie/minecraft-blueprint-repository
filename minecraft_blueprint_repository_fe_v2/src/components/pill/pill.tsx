

import * as classNames from "classnames";
import * as React from "react";
import "./pill.scss";

interface PillProps {
  active?: boolean;
  onclick?: () => {};
}

export default class Pill extends React.Component<PillProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <a className={classNames.default("pill", { active: this.props.active })}>
        {this.props.children}
      </a>
    );
  }
}
