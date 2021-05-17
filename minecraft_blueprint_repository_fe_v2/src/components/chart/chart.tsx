import * as React from "react";
import * as ChartJS from "chart.js";
import "chartjs-plugin-zoom";

import "./chart.scss";

interface ChartProps {
  data: ChartJS.ChartData;
  type?: ChartJS.ChartType;
  options?: ChartJS.ChartOptions;
}

interface ChartState {}

export class Chart extends React.Component<ChartProps, ChartState> {
  private chart: ChartJS;
  private canvasContext: CanvasRenderingContext2D;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.chart = new ChartJS.Chart(this.canvasContext, {
      type: this.props.type || "bar",
      data: this.props.data,
      options: {
        legend: {
          display: true,
          align: "start"
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: "x"
            },
            zoom: {
              enabled: true,
              drag: true,
              mode: "x"
            }
          },
          ...this.props.options
        }
      }
    });
  }

  shouldComponentUpdate() {
    return false;
  }
  
  render() {
    return (
      <div className="chart-container">
        <canvas
          className="chart-container__chart"
          ref={(canvas) => (this.canvasContext = canvas.getContext("2d"))}
          aria-label="chart-view"
          role="img"
        >
          <p>Chart could not be displayed</p>
        </canvas>
      </div>
    );
  }
}
