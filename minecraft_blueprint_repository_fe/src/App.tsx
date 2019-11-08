import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { Button, Menu, Container } from "semantic-ui-react";

import { MainView } from "./components/views/MainView";
import { BlockView } from "./components/views/BlockView";
import { BlueprintView } from "./components/views/BlueprintView";
import { AppMenu } from "./components/presentational/AppMenu"

export class App extends React.Component<{}, { activeItem:string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeItem: "home"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e: any, elem: any): any {
        this.setState({
            activeItem: elem.name
        });
    }

    render(): JSX.Element {
        let { activeItem } = this.state;
        return (
            <Container>
                <AppMenu />
                <Switch>
                    <React.Fragment>
                        <Route path = "/blocks" component = { BlockView } />
                        <Route path = "/blueprints" component = { BlueprintView } />
                        <Route exact path = "/" component = { MainView } />
                    </React.Fragment>
                </Switch>
            </Container>
        );
    }
}