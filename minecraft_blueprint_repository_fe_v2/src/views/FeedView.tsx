import * as React from "react";
import { FeedContainer } from "../components/FeedContainer";


function FeedView() {
  return (
    <div>
      <FeedContainer feed={[{
        date: new Date(),
        summary: "test",
        icon: {
          color: "green",
          name: "checkmark"
        },
      }, {
        date: new Date(),
        summary: "test",
        icon: {
          color: "green",
          name: "checkmark"
        },
      }, {
        date: new Date(),
        summary: "test",
        icon: {
          color: "green",
          name: "checkmark"
        },
      }, {
        date: new Date(),
        summary: "test",
        icon: {
          color: "green",
          name: "checkmark"
        },
      }]} />
    </div>
  );
}

export { FeedView };