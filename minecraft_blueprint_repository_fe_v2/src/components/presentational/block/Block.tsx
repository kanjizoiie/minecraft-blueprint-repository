import * as React from "react";
import { BlockScene, IBlockSceneProps } from "../scenes/BlockScene";
import { Button, Card } from "semantic-ui-react";
import { DateUtils } from "../../../utils/DateUtils";

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
                        <span className='date'>Created: {DateUtils.calculateDaysFromNow(this.props.blockCreatedDate)} days ago</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}