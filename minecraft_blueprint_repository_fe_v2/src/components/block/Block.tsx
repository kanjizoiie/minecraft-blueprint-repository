import * as React from "react";
import { BlockScene, IBlockSceneProps } from "../scenes/BlockScene";
import { Button, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { DateUtils } from "../../utils/DateUtils";

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
        <CardHeader>
          {this.props.blockName}
          <span className='date'>Created: {DateUtils.calculateDaysFromNow(this.props.blockCreatedDate)} days ago</span>
        </CardHeader>
        <CardBody>
          <div className='ui two buttons'>
            <Button color='green'>
              Approve
            </Button>
            <Button color='red'>
              Decline
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }
}