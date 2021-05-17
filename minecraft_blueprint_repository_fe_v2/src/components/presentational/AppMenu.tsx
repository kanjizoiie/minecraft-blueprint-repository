import * as React from "react";
import { Button, Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
 


export class AppMenu extends React.Component<{}, { activeItem:string }> {
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
            <Menu pointing>
                <Menu.Item as = { Link } to = "/" name = "home" active = { activeItem === "home" } onClick = { this.handleClick } >
                    Home
                </Menu.Item>
                <Menu.Item as = { Link } to = "/blueprints" name = "about" active = { activeItem === "about" } onClick = { this.handleClick }>
                    Blueprints
                </Menu.Item>
                <Menu.Item as = { Link } to = "/blocks" name = "match" active = { activeItem === "match" } onClick = { this.handleClick }>
                    Blocks
                </Menu.Item>
            </Menu>
        );
    }
}