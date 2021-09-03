import * as React from "react";
import { Feed, Icon, SemanticCOLORS } from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";
import { DateUtils } from "../../utils/DateUtils";

interface IFeedItem {
    summary: String,
    date: Date,
    icon: {
        name: SemanticICONS,
        color: SemanticCOLORS
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
            <Feed>
                {
                    this.props.feed.length > 0 ? this.props.feed.map((feedItem: IFeedItem, index: number) =>
                        <Feed.Event key={index}>
                            <Feed.Label>
                                <Icon {...feedItem.icon} />
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                    {feedItem.summary}
                                    <Feed.Date>{DateUtils.calculateDaysFromNow(feedItem.date)} days ago</Feed.Date>
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                    ) : null
                }
            </Feed>
        );
    }
}