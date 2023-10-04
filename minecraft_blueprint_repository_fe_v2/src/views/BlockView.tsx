import * as React from "react";
import { Button, ButtonGroup, Icon } from "@chakra-ui/react";
import { BlockContainer } from "../components/BlockContainer";
import { EmptyContainer } from "../components/EmptyContainer";
import { IBlockProps } from "../components/block/Block";

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
        <ButtonGroup>
          <Button onClick={() => {
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
          <Button>
            <Icon name='minus' />
          </Button>
          <Button>
            <Icon name='edit' />
          </Button>
        </ButtonGroup>
        {this.state.blockData.length > 0 ? <BlockContainer blockData={this.state.blockData} /> : <EmptyContainer />}
      </div>
    );
  }
}