import * as React from "react";
import { Button, ButtonGroup, Icon, IconButton } from "@chakra-ui/react";
import { BlockContainer } from "../components/BlockContainer";
import { EmptyContainer } from "../components/EmptyContainer";
import { IBlockProps } from "../components/Block/Block";
import { MdAdd, MdRemove } from "react-icons/md";
import { TestChart } from "../components/Chart/Chart";

interface IBlockViewState {
  blockData: Array<IBlockProps>
}


function BlockView() {
  const [blockData, setBlockData] = React.useState<Array<IBlockProps>>([])

  const block = {
    blockName: "Grass",
    blockCreatedDate: new Date(),
    blockSceneSettings: {
      materialImageURL: 'https://art.pixilart.com/591f1575a360ea1.png'
    }
  }

  const addBlockHandler = () => {
    setBlockData((prev) => ([...prev, block]))
  }



  const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 402, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 412, pv: 2400, amt: 2400 }];
  return (
    <div>
      <ButtonGroup>
        <TestChart data={data} />
        <IconButton
          aria-label="add block"
          icon={<MdAdd />}
          onClick={() => addBlockHandler()}
        />
        <IconButton
          aria-label="remove block"
          icon={<MdRemove />}
        />
      </ButtonGroup>
      {blockData.length > 0 ? <BlockContainer blockData={blockData} /> : <EmptyContainer />}
    </div>
  );
}

export { BlockView };