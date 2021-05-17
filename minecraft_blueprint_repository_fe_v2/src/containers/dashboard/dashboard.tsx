import * as React from "react";
import "./dashboard.scss";

export class Dashboard extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard">
        {React.Children.toArray(this.props.children).map(
          (element: React.ReactElement, index: number) => (
            <div className="dashboard__item" key={index}>
              {element}
            </div>
          )
        )}
      </div>
    );
  }
}
