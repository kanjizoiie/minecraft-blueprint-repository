import * as React from "react";
import { BlockScene, IBlockSceneProps } from "../Scenes/BlockScene";
import { Button, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { DateUtils } from "../../utils/DateUtils";

export interface IBlockProps {
  blockName: string
  blockCreatedDate: Date
  blockSceneSettings?: IBlockSceneProps
}

function Block({ blockName, blockCreatedDate, blockSceneSettings }: IBlockProps) {
  return (
    <Card>
      <BlockScene {...blockSceneSettings} />
      <CardHeader>
        {blockName}
        <span className='date'>Created: {DateUtils.calculateDaysFromNow(blockCreatedDate)} days ago</span>
      </CardHeader>
      <CardBody>
        <Button color='green'>
          Approve
        </Button>
        <Button color='red'>
          Decline
        </Button>
      </CardBody>
    </Card >
  );
}

export { Block };