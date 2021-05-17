import * as React from "react";
import "./log.scss";

interface LogData {
  time: Date;
  value: string;
}

interface LogProps {
  log?: LogData[];
}

export default class Log extends React.Component<LogProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.log
          ? this.props.log.map((log) => <div>{log.time}</div>)
          : null}
      </div>
    );
  }
}
