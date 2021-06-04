import * as React from "react";
import { FeedContainer } from "../containers/FeedContainer";


export class FeedView extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }


    render(): JSX.Element {
        return (
            <div>
                <h1>Feed</h1>
                <FeedContainer />
            </div>
        );
    }
}