import * as React from "react";

import { IconItem, Item, Navbar } from "../../components/navbar/navbar";
import { Link, Route, Switch } from "react-router-dom";
import { Icon } from "../../components/icon/icon";


import "./navigation-view.scss";
import { Chart } from "../../components/chart/chart";
import { ChartUtils } from "./../../components/chart/chart-utils";

interface navigationItem {
  path: String
  icon: Icon
  component: React.Component
}

export class NavigationView extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let data = ChartUtils.culmulativeMovingAverage(Array.from({ length: 50 }, (_, i) => Math.random() * 12300123));
    return (
      <div className="navigation-view__page">
        <div className="navigation-view__page__nav-area">
          <Navbar>
            <Link to="/">
              <IconItem icon="dashboard" label="Dashboard" />
            </Link>
            <Link to="/">
              <IconItem icon="home" label="Hordse" />
            </Link>
          </Navbar>
        </div>
        <div className="navigation-view__page__content-area">
          <Switch>
            <Route path="*">
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
