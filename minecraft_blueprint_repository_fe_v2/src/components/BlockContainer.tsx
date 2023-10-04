import * as React from "react";
import { Block, IBlockProps } from "./block/Block";
import { Card } from "@chakra-ui/react";


interface IBlockContainerProps {
  blockData?: Array<IBlockProps>
}

export class BlockContainer extends React.Component<IBlockContainerProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <div>
          {this.props.blockData ? this.props.blockData.map((block: IBlockProps, index: number) => <Block key={index} {...block} />) : null}
        </div>
      </div>
    );
  }
}