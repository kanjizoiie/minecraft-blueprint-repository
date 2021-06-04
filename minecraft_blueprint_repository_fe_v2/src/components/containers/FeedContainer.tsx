import * as React from "react";
import { Feed, Icon } from "semantic-ui-react";
import { DateUtils } from "../../utils/DateUtils";

export class FeedContainer extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <Icon name="checkmark" color="green"/>
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <a>Joe Henderson</a> posted on his page
                            <Feed.Date>{DateUtils.calculateDaysFromNow(new Date(2021, 1, 1))} days ago</Feed.Date>
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                    <Feed.Label>
                        <Icon name="close" color="red"/>
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <a>Joe Henderson</a> posted on his page
                            <Feed.Date>{DateUtils.calculateDaysFromNow(new Date(2021, 1, 1))} days ago</Feed.Date>
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}