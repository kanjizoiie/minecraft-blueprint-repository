import * as React from "react";
import { Button, Icon } from "semantic-ui-react";
import { BlockContainer } from "../containers/BlockContainer";
import { EmptyContainer } from "../containers/EmptyContainer";
import { IBlockProps } from "../presentational/block/Block";

interface IBlockViewState {
    blockData: Array<IBlockProps>
}

export class BlockView extends React.Component<{}, IBlockViewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            blockData: []
        }
    }

    render(): JSX.Element {
        return (
            <div>
                <Button.Group>
                    <Button icon onClick={() => {
                        let { blockData } = this.state;
                        blockData.push({
                            blockName: "Grass",
                            blockCreatedDate: new Date(),
                            blockSceneSettings: {
                                materialImageURL: 'https://art.pixilart.com/591f1575a360ea1.png'
                            }
                        })
                        this.setState({
                            blockData
                        })
                    }}>
                        <Icon name='add' />
                    </Button>
                    <Button icon>
                        <Icon name='minus' />
                    </Button>
                    <Button icon>
                        <Icon name='edit' />
                    </Button>
                </Button.Group>
                { this.state.blockData.length > 0 ? <BlockContainer blockData={this.state.blockData} /> : <EmptyContainer /> }
            </div>
        );
    }
}