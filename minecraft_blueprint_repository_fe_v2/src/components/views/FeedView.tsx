import * as React from "react";
import { FeedContainer } from "../containers/FeedContainer";


export class FeedView extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }


    render(): JSX.Element {
        return (
            <div>
                <FeedContainer feed={[{
                    date: new Date(),
                    summary: "test",
                    icon: {
                        color: "green",
                        name: "checkmark"
                    },
                },{
                    date: new Date(),
                    summary: "test",
                    icon: {
                        color: "green",
                        name: "checkmark"
                    },
                },{
                    date: new Date(),
                    summary: "test",
                    icon: {
                        color: "green",
                        name: "checkmark"
                    },
                },{
                    date: new Date(),
                    summary: "test",
                    icon: {
                        color: "green",
                        name: "checkmark"
                    },
                }]} />
            </div>
        );
    }
}