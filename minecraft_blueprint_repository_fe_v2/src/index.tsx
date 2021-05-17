import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import { ModalProvider } from "./context/modal/modal-context";
import { NotificationFeedProvider } from "./context/notification-feed/notification-feed-context";

import "./index.scss";
import 'semantic-ui-css/semantic.min.css';

import { App } from "./App";



ReactDOM.render(
  <ModalProvider>
    <NotificationFeedProvider>
      <Router>
        <App />
      </Router>
    </NotificationFeedProvider>
  </ModalProvider>,
  document.getElementById("root")
);
