import * as React from "react";
import { BlockScene } from "./scenes/BlockScene";
import { Segment, Card } from "semantic-ui-react";

interface IBlockProps {
    blockName: String
}

interface IBlockState {
    blockName: String
}

export class Block extends React.Component<IBlockProps, IBlockState> {
    constructor(props: any) {
        super(props);
    }


    render(): JSX.Element {
        return (
            <Card compact>
                <BlockScene />
                <Card.Content>
                    <Card.Header>{this.props.blockName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        );
    }
}