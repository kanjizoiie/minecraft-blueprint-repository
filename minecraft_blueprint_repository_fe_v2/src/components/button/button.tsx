import * as classNames from "classnames";
import * as React from "react";
import "./button.scss";

interface ButtonProps {
  raised?: boolean;
  outlined?: boolean;
  floating?: boolean;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export class Button extends React.Component<ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <a
        className={classNames.default("button", {
          raised: this.props.raised,
          outlined: this.props.outlined,
          floating: this.props.floating
        })}
        onClick={(event) => {
          this.props.onClick(event);
        }}
      >
        {this.props.children}
      </a>
    );
  }
}
