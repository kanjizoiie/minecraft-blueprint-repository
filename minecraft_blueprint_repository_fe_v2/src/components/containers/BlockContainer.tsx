import * as React from "react";
import { Block } from "../presentational/Block";
import { Button, Icon, Card, Segment } from "semantic-ui-react";

const testData = [
    {
        name: "Grass"
    },
    {
        name: "Dirt"
    },
    {
        name: "Stone"
    },
    {
        name: "Cobblestone"
    },
]


export class BlockContainer extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }


    render(): JSX.Element {
        return (
            <div>
                <Button.Group>
                    <Button icon>
                        <Icon name='add' />
                    </Button>
                    <Button icon>
                        <Icon name='minus' />
                    </Button>
                    <Button icon>
                        <Icon name='edit' />
                    </Button>
                </Button.Group>
                <Segment>
                    <Card.Group>
                        {
                            testData.map((block) => <Block blockName={ block.name }/>)
                        }
                    </Card.Group>
                </Segment>
            </div>
        );
    }
}