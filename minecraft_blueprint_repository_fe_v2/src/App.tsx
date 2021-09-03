import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import { MainView } from "./components/views/MainView";
import { BlockView } from "./components/views/BlockView";
import { BlueprintView } from "./components/views/BlueprintView";
import { AppMenu } from "./components/presentational/appmenu/AppMenu"
import { FeedView } from "./components/views/FeedView";

export class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Container>
                <AppMenu inverted menuItems={
                    [
                        { color: "blue", inverted: true, header: true, name: "Feed", active: true, as: Link, to: "/feed" },
                        { name: "Blocks", active: false, as: Link, to: "/blocks" },
                        { name: "Blueprints", active: false, as: Link, to: "/blueprints" }
                    ]
                } />
                <Switch>
                    <React.Fragment>
                        <Route path="/feed" component={FeedView} />
                        <Route path="/blocks" component={BlockView} />
                        <Route path="/blueprints" component={BlueprintView} />
                        <Route exact path="/" component={MainView} />
                    </React.Fragment>
                </Switch>
            </Container>
        );
    }
}