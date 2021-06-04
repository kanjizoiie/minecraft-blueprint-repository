import * as React from "react";
import { BlockScene, IBlockSceneProps } from "../scenes/BlockScene";
import { Card } from "semantic-ui-react";

export interface IBlockProps {
    blockName: string
    blockCreatedDate: Date
    blockSceneSettings?: IBlockSceneProps
}

export class Block extends React.Component<IBlockProps, {}> {
    constructor(props: any) {
        super(props);
    }


    render(): JSX.Element {
        return (
            <Card>
                <BlockScene {...this.props.blockSceneSettings} />
                <Card.Content>
                    <Card.Header>{this.props.blockName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Created: {this.props.blockCreatedDate.toISOString()}</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        );
    }
}