import * as React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export class EmptyContainer extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Segment placeholder>
                <Header icon>
                    <Icon name='block layout' />
                    We don't have any objects matching your query.
                </Header>
                <Segment.Inline>
                    <Button>
                        <Icon name='add' />
                        Add new item
                    </Button>
                </Segment.Inline>
            </Segment>
        );
    }
}