import * as React from "react";
import { Icon } from "../icon/icon";

import "./notification.scss";

export interface NotificationObject {
  timeOut?: number;
  onClose?: (
    event?: React.MouseEvent<HTMLElement, MouseEvent> | MouseEvent
  ) => void;
}

export interface NotificationProps extends NotificationObject {
  title?: string;
}

export class Notification extends React.Component<NotificationProps, {}> {
  private timeoutHandle: number;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    if (this.props.timeOut) {
      this.timeoutHandle = window.setTimeout(
        this.props.onClose,
        this.props.timeOut
      );
    }
  }

  componentWillUnmount() {
    if (this.timeoutHandle) {
      window.clearTimeout(this.timeoutHandle);
    }
  }

  render() {
    return (
      <div className="notification">
        <div className="notification__top-bar">
          <span>
            <Icon>done</Icon>
            {this.props.title}
          </span>
          <span className="notification__close" onClick={this.props.onClose}>
            <Icon>clear</Icon>
          </span>
        </div>
        <div className="notification__content">{this.props.children}</div>
      </div>
    );
  }
}
