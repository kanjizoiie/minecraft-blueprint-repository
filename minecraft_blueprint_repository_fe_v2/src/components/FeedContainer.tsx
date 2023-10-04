import * as React from "react";
import { Icon } from "@chakra-ui/react";
import { DateUtils } from "../utils/DateUtils";

interface IFeedItem {
  summary: String,
  date: Date,
  icon: {
    name: any,
    color: any
  }
}

interface IFeedProps {
  feed?: Array<IFeedItem>
}

export class FeedContainer extends React.Component<IFeedProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        {
          this.props.feed.length > 0 ? this.props.feed.map((feedItem: IFeedItem, index: number) =>
            <div key={index}>
              <div>
                <Icon {...feedItem.icon} />
              </div>
              <div>
                <div>
                  {feedItem.summary}
                  <div>{DateUtils.calculateDaysFromNow(feedItem.date)} days ago</div>
                </div>
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}