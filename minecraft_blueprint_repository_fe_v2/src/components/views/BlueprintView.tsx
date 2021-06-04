import * as React from "react";
import { Segment, Header, Icon, Button } from "semantic-ui-react";

export class BlueprintView extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }


    render(): JSX.Element {
        return (
            <Segment placeholder>
                <Header icon>
                    <Icon name='block layout' />
                    We don't have any documents matching your query.
                </Header>
                <Segment.Inline>
                    <Button>
                        <Icon name='add' />
                        Add Blueprint
                    </Button>
                </Segment.Inline>
            </Segment>
        );
    }
}