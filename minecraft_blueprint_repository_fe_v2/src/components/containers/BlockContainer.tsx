import * as React from "react";
import { Block, IBlockProps } from "../presentational/block/Block";
import { Card, Segment } from "semantic-ui-react";


interface IBlockContainerProps {
    blockData?: Array<IBlockProps>
}

export class BlockContainer extends React.Component<IBlockContainerProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Segment>
                <Card.Group itemsPerRow={4}>
                    {this.props.blockData ? this.props.blockData.map((block: IBlockProps, index: number) => <Block key={index} {...block} />) : null}
                </Card.Group>
            </Segment>
        );
    }
}