import * as React from "react";
import "./statistic.scss";

interface StatisticsProps {
  title?: string;
  value?: number | string;
}

interface StatisticsState {
  average?: number;
  averageList?: number[];
}

export class Statistic extends React.Component<
  StatisticsProps,
  StatisticsState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      average: 0,
      averageList: []
    };
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="statistic">
        <div className="statistic__title">
          {this.props.title ? this.props.title : ""}
        </div>
        <div className="statistic__value">
          {this.props.value ? this.props.value : ""}
        </div>
      </div>
    );
  }
}
