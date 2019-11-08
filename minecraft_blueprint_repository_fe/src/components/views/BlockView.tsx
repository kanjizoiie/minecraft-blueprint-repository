import * as React from "react";
import { BlockContainer } from "../containers/BlockContainer";

export class BlockView extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }


    render(): JSX.Element {
        return (
            <div>
                <BlockContainer />
            </div>
        );
    }
}