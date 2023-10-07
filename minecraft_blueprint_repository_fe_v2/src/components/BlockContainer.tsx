import * as React from "react";
import { Block, IBlockProps } from "./Block/Block";


interface IBlockContainerProps {
  blockData?: Array<IBlockProps>
}


function BlockContainer({ blockData }: IBlockContainerProps) {
  return (
    <div>
      {blockData ? blockData.map((block: IBlockProps, index: number) => <Block key={index} {...block} />) : null}
    </div>
  );
}

export { BlockContainer }