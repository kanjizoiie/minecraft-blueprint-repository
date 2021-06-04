import * as React from "react";
import { Route, Switch} from "react-router-dom";
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
                <AppMenu menuItems={[{ header: true,  name: "Home", active: false }, { name: "home", active: false }, { name: "bob", active: false }]} />
                <Switch>
                    <React.Fragment>
                        <Route path = "/feed" component = { FeedView } />
                        <Route path = "/blocks" component = { BlockView } />
                        <Route path = "/blueprints" component = { BlueprintView } />
                        <Route exact path = "/" component = { MainView } />
                    </React.Fragment>
                </Switch>
            </Container>
        );
    }
}